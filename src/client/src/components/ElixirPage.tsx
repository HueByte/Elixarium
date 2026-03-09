import type { ContentBlock } from '../utils/markdownParser';
import { PotionIllustration } from './PotionIllustrations';

interface Props {
  blocks: ContentBlock[];
  pageNumber: number;
}

export default function ElixirPage({ blocks, pageNumber }: Props) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'title':
            return <div key={i} className="elixir-title">{block.text}</div>;
          case 'subtitle':
            return <div key={i} className="elixir-subtitle">{block.text}</div>;
          case 'illustration':
            return <PotionIllustration key={i} type={block.illustrationType!} />;
          case 'paragraph':
            return (
              <div
                key={i}
                className="elixir-description"
                dangerouslySetInnerHTML={{ __html: block.html ?? '' }}
              />
            );
          case 'separator':
            return <div key={i} className="elixir-separator" />;
          case 'properties':
            return (
              <div key={i} className="elixir-properties">
                {block.items?.map((p) => (
                  <div className="elixir-property" key={p.label}>
                    <span className="label">{p.label}:</span> {p.value}
                  </div>
                ))}
              </div>
            );
          case 'mirror':
            return (
              <div
                key={i}
                className="mirror-note"
                style={{ bottom: 40, right: 15, transform: 'scaleX(-1) rotate(-2deg)' }}
              >
                {block.text}
              </div>
            );
          default:
            return null;
        }
      })}
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
