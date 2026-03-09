import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { loadAllPotions, type ContentBlock } from '../utils/markdownParser';
import ElixirPage, { CoverPage } from './ElixirPage';

interface Spread {
  left: { type: 'cover'; title: string; ornament: string; desc: string } | { type: 'elixir'; blocks: ContentBlock[] };
  right: { type: 'cover'; title: string; ornament: string; desc: string } | { type: 'elixir'; blocks: ContentBlock[] };
}

function buildSpreads(potionPages: ContentBlock[][]): Spread[] {
  // Build a flat list of all page slots: cover + potion pages + back cover
  type PageSlot =
    | { type: 'cover'; title: string; ornament: string; desc: string }
    | { type: 'elixir'; blocks: ContentBlock[] };

  const slots: PageSlot[] = [];

  // Front cover
  slots.push({
    type: 'cover',
    title: 'The Elixir Codex',
    ornament: '\u2726 \u2727 \u2726',
    desc: "A compendium of rare and wondrous elixirs, transcribed by silver stylus upon aged vellum. Herein lie the secrets of the apothecary's art.",
  });

  // All potion content pages
  for (const page of potionPages) {
    slots.push({ type: 'elixir', blocks: page });
  }

  // Back cover
  slots.push({
    type: 'cover',
    title: 'Finis Libri',
    ornament: '\u2726 \u2727 \u2726',
    desc: 'Thus concludes this volume of the Codex. May the knowledge herein serve thee well, and may thy hand remain steady in the art of the apothecary.',
  });

  // Ensure even number of slots (each spread = 2 pages)
  if (slots.length % 2 !== 0) {
    // Add blank page
    slots.push({ type: 'elixir', blocks: [] });
  }

  // Pair into spreads
  const spreads: Spread[] = [];
  for (let i = 0; i < slots.length; i += 2) {
    spreads.push({ left: slots[i], right: slots[i + 1] });
  }

  return spreads;
}

function PageContent({ page, pageNumber }: { page: Spread['left']; pageNumber: number }) {
  if (page.type === 'cover') {
    return <CoverPage title={page.title} ornament={page.ornament} desc={page.desc} pageNumber={pageNumber} />;
  }
  if (page.blocks.length === 0) {
    return <div className="page-number">{pageNumber}</div>;
  }
  return <ElixirPage blocks={page.blocks} pageNumber={pageNumber} />;
}

export default function Book() {
  const spreads = useMemo(() => {
    const potionPages = loadAllPotions();
    return buildSpreads(potionPages);
  }, []);

  const totalSpreads = spreads.length;
  const [currentSpread, setCurrentSpread] = useState(0);
  const [flippedPages, setFlippedPages] = useState<Set<number>>(new Set());
  const [activePage, setActivePage] = useState<number | null>(null);
  const [leftPage, setLeftPage] = useState(spreads[0].left);
  const [leftPageNum, setLeftPageNum] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const nextPage = useCallback(() => {
    if (currentSpread >= totalSpreads - 1) return;

    const pageIndex = currentSpread;
    setActivePage(pageIndex);
    setFlippedPages((prev) => new Set(prev).add(pageIndex));

    const next = currentSpread + 1;
    setCurrentSpread(next);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setLeftPage(spreads[next].left);
      setLeftPageNum(next * 2 + 1);
      setActivePage(null);
    }, 450);
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
    setLeftPage(spreads[prev].left);
    setLeftPageNum(prev * 2 + 1);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActivePage(null);
    }, 800);
  }, [currentSpread, spreads]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextPage, prevPage]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const leftNum = currentSpread * 2 + 1;
  const rightNum = leftNum + 1;

  return (
    <>
      <div className="book-title-label">The Elixir Codex</div>

      <div className="book-container">
        <div className="book-shadow" />
        <div className="book">
          <div className="static-page">
            <PageContent page={leftPage} pageNumber={leftPageNum} />
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
                  <PageContent page={spreads[i].right} pageNumber={i * 2 + 2} />
                </div>
                <div className="page-back">
                  <PageContent page={spreads[i + 1].left} pageNumber={i * 2 + 3} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="nav-arrow nav-prev" onClick={prevPage} disabled={currentSpread === 0}>
        &#9664;
      </button>
      <button className="nav-arrow nav-next" onClick={nextPage} disabled={currentSpread === totalSpreads - 1}>
        &#9654;
      </button>

      <div className="page-indicator">
        {leftNum} &mdash; {rightNum} of {totalSpreads * 2}
      </div>
    </>
  );
}
