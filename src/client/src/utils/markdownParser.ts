export interface ContentBlock {
  type: 'title' | 'subtitle' | 'illustration' | 'paragraph' | 'properties' | 'mirror' | 'separator';
  text?: string;
  html?: string;
  illustrationType?: string;
  items?: { label: string; value: string }[];
}

export interface PotionData {
  order: number;
  blocks: ContentBlock[];
}

interface Frontmatter {
  subtitle?: string;
  illustration?: string;
  order?: number;
  mirror?: string;
  [key: string]: string | number | undefined;
}

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };

  const fm: Frontmatter = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value: string | number = line.slice(idx + 1).trim();
    if (/^\d+$/.test(value)) value = parseInt(value, 10);
    fm[key] = value;
  }

  return { frontmatter: fm, body: match[2].trim() };
}

function inlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>');
}

function parseBody(body: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = body.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) {
      i++;
      continue;
    }

    // Heading
    if (line.startsWith('# ')) {
      blocks.push({ type: 'title', text: line.slice(2).trim() });
      i++;
      continue;
    }

    // Horizontal rule (separator) — only if not frontmatter delimiter
    if (/^---+$/.test(line)) {
      blocks.push({ type: 'separator' });
      i++;
      continue;
    }

    // Property list: consecutive lines starting with `- **Label:** Value`
    if (/^-\s+\*\*/.test(line)) {
      const items: { label: string; value: string }[] = [];
      while (i < lines.length && /^-\s+\*\*/.test(lines[i].trim())) {
        const propMatch = lines[i].trim().match(/^-\s+\*\*(.+?):\*\*\s*(.+)$/);
        if (propMatch) {
          items.push({ label: propMatch[1], value: propMatch[2] });
        }
        i++;
      }
      blocks.push({ type: 'properties', items });
      continue;
    }

    // Regular paragraph: collect consecutive non-empty, non-special lines
    const paraLines: string[] = [];
    while (i < lines.length) {
      const l = lines[i].trim();
      if (!l || l.startsWith('# ') || /^---+$/.test(l) || /^-\s+\*\*/.test(l)) break;
      paraLines.push(l);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', html: inlineMarkdown(paraLines.join(' ')) });
    }
  }

  return blocks;
}

export function parsePotion(raw: string): PotionData {
  const { frontmatter, body } = parseFrontmatter(raw);
  const bodyBlocks = parseBody(body);

  const blocks: ContentBlock[] = [];

  // Find the title block from body and insert subtitle + illustration after it
  const titleIdx = bodyBlocks.findIndex((b) => b.type === 'title');

  for (let i = 0; i < bodyBlocks.length; i++) {
    blocks.push(bodyBlocks[i]);

    // After title, inject subtitle and illustration from frontmatter
    if (i === titleIdx) {
      if (frontmatter.subtitle) {
        blocks.push({ type: 'subtitle', text: frontmatter.subtitle as string });
      }
      if (frontmatter.illustration) {
        blocks.push({ type: 'illustration', illustrationType: frontmatter.illustration as string });
      }
    }
  }

  // Append mirror note at the end
  if (frontmatter.mirror) {
    blocks.push({ type: 'mirror', text: frontmatter.mirror as string });
  }

  return {
    order: (frontmatter.order as number) ?? 99,
    blocks,
  };
}

// Estimated block heights for pagination (in px)
// Page usable height: 560px total - 40px top padding - 40px bottom padding - 30px page number = ~450px
const PAGE_USABLE_HEIGHT = 450;
const CHARS_PER_LINE = 42;
const TEXT_LINE_HEIGHT = 24; // 13px font * 1.8 line-height

function estimateBlockHeight(block: ContentBlock): number {
  switch (block.type) {
    case 'title':
      return 55;
    case 'subtitle':
      return 35;
    case 'illustration':
      return 180;
    case 'paragraph': {
      const textLen = (block.html ?? '').replace(/<[^>]*>/g, '').length;
      const lines = Math.max(1, Math.ceil(textLen / CHARS_PER_LINE));
      return lines * TEXT_LINE_HEIGHT;
    }
    case 'properties':
      return 26 + (block.items?.length ?? 0) * 20;
    case 'mirror':
      return 25;
    case 'separator':
      return 14;
    default:
      return 20;
  }
}

export function paginateBlocks(blocks: ContentBlock[]): ContentBlock[][] {
  const pages: ContentBlock[][] = [];
  let currentPage: ContentBlock[] = [];
  let currentHeight = 0;

  for (const block of blocks) {
    const h = estimateBlockHeight(block);

    // If adding this block would overflow and page isn't empty, start new page
    if (currentHeight + h > PAGE_USABLE_HEIGHT && currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [];
      currentHeight = 0;
    }

    currentPage.push(block);
    currentHeight += h;
  }

  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  return pages;
}

// Load all potion markdown files and return sorted, paginated pages
export function loadAllPotions(): ContentBlock[][] {
  const files = import.meta.glob('/content/potions/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  }) as Record<string, string>;

  const potions: PotionData[] = Object.values(files).map((raw) => parsePotion(raw));
  potions.sort((a, b) => a.order - b.order);

  // Paginate each potion, ensuring each potion starts on a new page
  const allPages: ContentBlock[][] = [];
  for (const potion of potions) {
    const potionPages = paginateBlocks(potion.blocks);
    allPages.push(...potionPages);
  }

  return allPages;
}
