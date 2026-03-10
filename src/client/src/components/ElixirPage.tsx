import Markdown from 'react-markdown';
import type { PotionData } from '../utils/markdownParser';
import { PotionIllustration } from './PotionIllustrations';

/** Renders the full potion content (header + body). Used for both measurement and display. */
export function PotionContent({ potion }: { potion: PotionData }) {
  return (
    <>
      <div className="elixir-title">{potion.meta.name}</div>
      <div className="elixir-subtitle">{potion.meta.subtitle}</div>
      <PotionIllustration type={potion.meta.illustration} />
      <div className="elixir-body">
        <Markdown>{potion.markdown}</Markdown>
      </div>
    </>
  );
}

interface Props {
  potion: PotionData;
  offset: number;
  pageNumber: number;
}

export default function ElixirPage({ potion, offset, pageNumber }: Props) {
  return (
    <>
      <div className="elixir-content-clip">
        <div style={{ marginTop: -offset }}>
          <PotionContent potion={potion} />
        </div>
      </div>

      {potion.meta.mirror && offset === 0 && (
        <div
          className="mirror-note"
          style={{ bottom: 40, right: 15, transform: 'scaleX(-1) rotate(-2deg)' }}
        >
          {potion.meta.mirror}
        </div>
      )}

      <div className="page-number">{pageNumber}</div>
    </>
  );
}

export function CoverPage({ title, ornament, desc, pageNumber }: {
  title: string;
  ornament: string;
  desc: string;
  pageNumber: number;
}) {
  return (
    <>
      <div className="cover-content">
        <div className="cover-title">{title}</div>
        <div className="cover-ornament">{ornament}</div>
        <div className="cover-desc">{desc}</div>
      </div>
      <div className="page-number">{pageNumber}</div>
    </>
  );
}

export interface TocEntry {
  name: string;
  subtitle: string;
  pageNumber: number;
  spreadIndex: number;
}

export function TocPage({ entries, pageNumber, onJump }: {
  entries: TocEntry[];
  pageNumber: number;
  onJump?: (spreadIndex: number) => void;
}) {
  return (
    <>
      <div className="toc-content">
        <div className="toc-title">Contents</div>
        <div className="toc-ornament">{'\u2726 \u2727 \u2726'}</div>
        <div className="toc-entries">
          {entries.map((entry, i) => (
            <div
              key={i}
              className="toc-entry"
              onClick={() => onJump?.(entry.spreadIndex)}
            >
              <span className="toc-entry-name">{entry.name}</span>
              <span className="toc-entry-dots" />
              <span className="toc-entry-page">{entry.pageNumber}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="page-number">{pageNumber}</div>
    </>
  );
}
