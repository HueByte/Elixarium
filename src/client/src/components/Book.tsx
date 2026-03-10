import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { loadAllPotions, type PotionData } from '../utils/markdownParser';
import ElixirPage, { CoverPage, PotionContent, TocPage, type TocEntry } from './ElixirPage';

// Usable content height per page: 700 - 40 top pad - 40 bottom pad
// Page number is position:absolute in the padding area, so it doesn't consume content space
const CONTENT_HEIGHT = 620;

interface PageSlice {
  potionIndex: number;
  offset: number;
}

type PageSlot =
  | { type: 'cover'; title: string; ornament: string; desc: string }
  | { type: 'toc' }
  | { type: 'elixir'; potionIndex: number; offset: number }
  | { type: 'blank' };

interface Spread {
  left: PageSlot;
  right: PageSlot;
}

function buildSpreadsAndToc(
  pageSlices: PageSlice[],
  potions: PotionData[],
): { spreads: Spread[]; tocEntries: TocEntry[] } {
  const slots: PageSlot[] = [];

  slots.push({
    type: 'cover',
    title: 'The Elixir Codex',
    ornament: '\u2726 \u2727 \u2726',
    desc: "A compendium of rare and wondrous elixirs, transcribed by silver stylus upon aged vellum. Herein lie the secrets of the apothecary's art.",
  });

  // Table of contents
  slots.push({ type: 'toc' });

  // Elixir pages — track first page of each potion for TOC
  const tocEntries: TocEntry[] = [];
  for (const slice of pageSlices) {
    if (slice.offset === 0) {
      const potion = potions[slice.potionIndex];
      tocEntries.push({
        name: potion.meta.name,
        subtitle: potion.meta.subtitle,
        pageNumber: slots.length + 1, // 1-based
        spreadIndex: Math.floor(slots.length / 2),
      });
    }
    slots.push({ type: 'elixir', potionIndex: slice.potionIndex, offset: slice.offset });
  }

  slots.push({
    type: 'cover',
    title: 'Finis Libri',
    ornament: '\u2726 \u2727 \u2726',
    desc: 'Thus concludes this volume of the Codex. May the knowledge herein serve thee well, and may thy hand remain steady in the art of the apothecary.',
  });

  if (slots.length % 2 !== 0) {
    slots.push({ type: 'blank' });
  }

  const spreads: Spread[] = [];
  for (let i = 0; i < slots.length; i += 2) {
    spreads.push({ left: slots[i], right: slots[i + 1] });
  }

  return { spreads, tocEntries };
}

function PageContent({
  slot,
  potions,
  pageNumber,
  tocEntries,
  onJump,
}: {
  slot: PageSlot;
  potions: PotionData[];
  pageNumber: number;
  tocEntries?: TocEntry[];
  onJump?: (spread: number) => void;
}) {
  if (slot.type === 'cover') {
    return <CoverPage title={slot.title} ornament={slot.ornament} desc={slot.desc} pageNumber={pageNumber} />;
  }
  if (slot.type === 'toc') {
    return <TocPage entries={tocEntries ?? []} pageNumber={pageNumber} onJump={onJump} />;
  }
  if (slot.type === 'blank') {
    return <div className="page-number">{pageNumber}</div>;
  }
  return <ElixirPage potion={potions[slot.potionIndex]} offset={slot.offset} pageNumber={pageNumber} />;
}

export default function Book() {
  const potions = useMemo(() => loadAllPotions(), []);
  const measureRef = useRef<HTMLDivElement>(null);
  const [pageSlices, setPageSlices] = useState<PageSlice[] | null>(null);

  // Measure content heights after fonts are loaded
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!measureRef.current) return;
      const containers = measureRef.current.children;
      const slices: PageSlice[] = [];

      potions.forEach((_, potionIndex) => {
        const el = containers[potionIndex] as HTMLElement;
        if (!el) return;
        const totalHeight = el.scrollHeight;

        if (totalHeight <= CONTENT_HEIGHT) {
          slices.push({ potionIndex, offset: 0 });
          return;
        }

        // Collect bottom edges of all breakable elements (relative to container top)
        const containerRect = el.getBoundingClientRect();
        const breakPoints: number[] = [0];

        const addBreakPoint = (child: Element) => {
          breakPoints.push(child.getBoundingClientRect().bottom - containerRect.top);
        };

        // Direct children (title, subtitle, illustration, body)
        for (const child of Array.from(el.children)) {
          addBreakPoint(child);
        }

        // Children of .elixir-body (paragraphs, headings, lists, hrs)
        const body = el.querySelector('.elixir-body');
        if (body) {
          for (const child of Array.from(body.children)) {
            addBreakPoint(child);
            // Individual list items — allows breaking mid-list
            if (child.tagName === 'OL' || child.tagName === 'UL') {
              for (const li of Array.from(child.children)) {
                addBreakPoint(li);
              }
            }
          }
        }

        // Sort and deduplicate
        const sorted = [...new Set(breakPoints)].sort((a, b) => a - b);

        // Walk through content, finding clean break points
        let currentOffset = 0;
        while (currentOffset < totalHeight) {
          slices.push({ potionIndex, offset: currentOffset });

          const maxBottom = currentOffset + CONTENT_HEIGHT;

          // Find the last element boundary that fits within this page
          let nextOffset = currentOffset + CONTENT_HEIGHT; // fallback
          for (let i = sorted.length - 1; i >= 0; i--) {
            if (sorted[i] <= maxBottom && sorted[i] > currentOffset) {
              nextOffset = sorted[i];
              break;
            }
          }

          if (nextOffset <= currentOffset) {
            nextOffset = currentOffset + CONTENT_HEIGHT;
          }

          // If remaining content is tiny, keep it on this page instead of creating a near-empty page
          if (totalHeight - nextOffset < 60) {
            break;
          }

          currentOffset = nextOffset;
        }
      });

      setPageSlices(slices);
    });
  }, [potions]);

  const { spreads, tocEntries } = useMemo(() => {
    if (!pageSlices) return { spreads: [], tocEntries: [] };
    return buildSpreadsAndToc(pageSlices, potions);
  }, [pageSlices, potions]);

  const totalSpreads = spreads.length;
  const [currentSpread, setCurrentSpread] = useState(0);
  const [flippedPages, setFlippedPages] = useState<Set<number>>(new Set());
  const [activePage, setActivePage] = useState<number | null>(null);
  const [leftSlot, setLeftSlot] = useState<PageSlot | null>(null);
  const [leftPageNum, setLeftPageNum] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Initialize left slot when spreads become available
  useEffect(() => {
    if (spreads.length > 0 && leftSlot === null) {
      setLeftSlot(spreads[0].left);
    }
  }, [spreads, leftSlot]);

  const goToSpread = useCallback((target: number) => {
    if (target < 0 || target >= totalSpreads || target === currentSpread) return;

    clearTimeout(timeoutRef.current);

    // Set all pages before target as flipped, rest unflipped
    const newFlipped = new Set<number>();
    for (let i = 0; i < target; i++) {
      newFlipped.add(i);
    }

    setFlippedPages(newFlipped);
    setCurrentSpread(target);
    setLeftSlot(spreads[target].left);
    setLeftPageNum(target * 2 + 1);
    setActivePage(null);
  }, [currentSpread, totalSpreads, spreads]);

  const nextPage = useCallback(() => {
    if (totalSpreads === 0 || currentSpread >= totalSpreads - 1) return;

    const pageIndex = currentSpread;
    setActivePage(pageIndex);
    setFlippedPages((prev) => new Set(prev).add(pageIndex));

    const next = currentSpread + 1;
    setCurrentSpread(next);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setLeftSlot(spreads[next].left);
      setLeftPageNum(next * 2 + 1);
      setActivePage(null);
    }, 600);
  }, [currentSpread, totalSpreads, spreads]);

  const prevPage = useCallback(() => {
    if (currentSpread <= 0) return;

    const prev = currentSpread - 1;

    setActivePage(prev);
    setFlippedPages((p) => {
      const next = new Set(p);
      next.delete(prev);
      return next;
    });
    setCurrentSpread(prev);
    setLeftSlot(spreads[prev].left);
    setLeftPageNum(prev * 2 + 1);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActivePage(null);
    }, 1000);
  }, [currentSpread, spreads]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Home') goToSpread(0);
      if (e.key === 'End') goToSpread(totalSpreads - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextPage, prevPage, goToSpread, totalSpreads]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <>
      {/* Hidden measurement containers — same width as page content area */}
      <div
        ref={measureRef}
        aria-hidden
        style={{
          position: 'absolute',
          left: -9999,
          top: 0,
          width: 435,
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {potions.map((potion, i) => (
          <div key={i}>
            <PotionContent potion={potion} />
          </div>
        ))}
      </div>

      {spreads.length > 0 && leftSlot && (
        <>
          <div className="book-title-label">The Elixir Codex</div>

          <div className="book-container">
            <div className="book-shadow" />
            <div className="book">
              <div className="static-page">
                <PageContent
                  slot={leftSlot}
                  potions={potions}
                  pageNumber={leftPageNum}
                  tocEntries={tocEntries}
                  onJump={goToSpread}
                />
              </div>

              {Array.from({ length: totalSpreads - 1 }, (_, i) => {
                const isFlipped = flippedPages.has(i);
                const isActive = activePage === i;
                const zIndex = isActive ? 100 : isFlipped ? 0 : totalSpreads - i;

                return (
                  <div
                    key={i}
                    className={`page${isFlipped ? ' flipped' : ''}${isActive ? ' active' : ''}`}
                    style={{ zIndex }}
                  >
                    <div className="page-front">
                      <PageContent
                        slot={spreads[i].right}
                        potions={potions}
                        pageNumber={i * 2 + 2}
                        tocEntries={tocEntries}
                        onJump={goToSpread}
                      />
                    </div>
                    <div className="page-back">
                      <PageContent
                        slot={spreads[i + 1].left}
                        potions={potions}
                        pageNumber={i * 2 + 3}
                        tocEntries={tocEntries}
                        onJump={goToSpread}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="nav-arrow nav-prev" onClick={prevPage} disabled={currentSpread === 0}>
            <GrFormPrevious />
          </button>
          <button className="nav-arrow nav-next" onClick={nextPage} disabled={currentSpread === totalSpreads - 1}>
            <GrFormNext />
          </button>

          <div className="page-controls">
            <button
              className="page-jump-btn"
              onClick={() => goToSpread(0)}
              disabled={currentSpread === 0}
              title="First page"
            >
              {'\u275A\u2039'}
            </button>
            <button
              className="page-jump-btn"
              onClick={prevPage}
              disabled={currentSpread === 0}
              title="Previous page"
            >
              {'\u2039'}
            </button>
            <select
              className="page-select"
              value={currentSpread}
              onChange={(e) => goToSpread(Number(e.target.value))}
            >
              {spreads.map((_, i) => (
                <option key={i} value={i}>
                  {i * 2 + 1} &ndash; {i * 2 + 2}
                </option>
              ))}
            </select>
            <span className="page-of">of {totalSpreads * 2}</span>
            <button
              className="page-jump-btn"
              onClick={nextPage}
              disabled={currentSpread === totalSpreads - 1}
              title="Next page"
            >
              {'\u203A'}
            </button>
            <button
              className="page-jump-btn"
              onClick={() => goToSpread(totalSpreads - 1)}
              disabled={currentSpread === totalSpreads - 1}
              title="Last page"
            >
              {'\u203A\u275A'}
            </button>
          </div>
        </>
      )}
    </>
  );
}
