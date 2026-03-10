export interface PotionMeta {
  name: string;
  subtitle: string;
  illustration: string;
  order: number;
  mirror?: string;
}

export interface PotionData {
  meta: PotionMeta;
  markdown: string;
}

interface Frontmatter {
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

export function loadAllPotions(): PotionData[] {
  const files = import.meta.glob('/content/potions/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  }) as Record<string, string>;

  const allPotions: PotionData[] = [];

  for (const raw of Object.values(files)) {
    const { frontmatter, body } = parseFrontmatter(raw);

    const nameMatch = body.match(/^# (.+)$/m);
    const name = nameMatch ? nameMatch[1].trim() : 'Untitled';
    const bodyWithoutTitle = body.replace(/^# .+\n?/m, '').trim();

    allPotions.push({
      meta: {
        name,
        subtitle: (frontmatter.subtitle as string) ?? '',
        illustration: (frontmatter.illustration as string) ?? 'potion-round',
        order: (frontmatter.order as number) ?? 99,
        mirror: frontmatter.mirror as string | undefined,
      },
      markdown: bodyWithoutTitle,
    });
  }

  allPotions.sort((a, b) => a.meta.order - b.meta.order);
  return allPotions;
}
