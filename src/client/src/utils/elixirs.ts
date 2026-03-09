export interface ElixirProperty {
  label: string;
  value: string;
}

export interface ElixirData {
  type?: 'cover';
  title: string;
  subtitle?: string;
  illustration?: string;
  description?: string;
  properties?: ElixirProperty[];
  mirror?: string;
  ornament?: string;
  desc?: string;
}

export interface Spread {
  left: ElixirData;
  right: ElixirData;
}

export const elixirs: Spread[] = [
  {
    left: {
      type: 'cover',
      title: 'The Elixir Codex',
      ornament: '\u2726 \u2727 \u2726',
      desc: "A compendium of rare and wondrous elixirs, transcribed by silver stylus upon aged vellum. Herein lie the secrets of the apothecary's art.",
    },
    right: {
      title: 'Moonveil Elixir',
      subtitle: 'Extractum Lunaris Velum',
      illustration: 'potion-round',
      description:
        'Distilled from nightbloom petals gathered under a waning crescent, this luminous draught bestows upon the imbiber a <em>sight beyond sight</em>. The world reveals its hidden geometries\u2014ley lines shimmer like silver threads and the true names of things become briefly legible.',
      properties: [
        { label: 'Potency', value: 'Considerable' },
        { label: 'Duration', value: 'Three hours, waning' },
        { label: 'Catalyst', value: 'Powdered moonstone' },
        { label: 'Caution', value: 'Avoid during solar eclipse' },
      ],
      mirror: 'the moon sees what the sun cannot',
    },
  },
  {
    left: {
      title: 'Emberheart Tonic',
      subtitle: 'Tinctura Cordis Ignis',
      illustration: 'potion-tall',
      description:
        'Brewed in a crucible of volcanic glass, this amber tonic pulses with inner warmth. A single draught kindles the vital fire within, granting <em>extraordinary resilience</em> against bitter cold and the creeping numbness of despair.',
      properties: [
        { label: 'Potency', value: 'Moderate' },
        { label: 'Duration', value: 'Six hours, steady' },
        { label: 'Catalyst', value: 'Salamander scale' },
        { label: 'Caution', value: 'Inflammable near open flame' },
      ],
      mirror: 'fire within quenches fire without',
    },
    right: {
      title: 'Verdant Ichor',
      subtitle: 'Succus Viridis Aeternum',
      illustration: 'potion-wide',
      description:
        "Pressed from the heartwood of an ancient yew and mingled with morning dew collected at the vernal equinox. This verdant liquid accelerates the body's <em>natural restoration</em>, knitting wounds and mending fractures at remarkable speed.",
      properties: [
        { label: 'Potency', value: 'Strong' },
        { label: 'Duration', value: 'Until next dawn' },
        { label: 'Catalyst', value: "Dryad's tear" },
        { label: 'Caution', value: 'May attract woodland spirits' },
      ],
      mirror: 'that which grows never truly dies',
    },
  },
  {
    left: {
      title: '\u00C6ther Philtre',
      subtitle: 'Philtra Aetheris Sublimis',
      illustration: 'potion-angular',
      description:
        'A vaporous elixir captured in a crystal phial, shimmering between states of matter. When inhaled, the drinker experiences a <em>lightening of the corpus</em>\u2014gravity loosens its hold and one may drift upon currents of thought.',
      properties: [
        { label: 'Potency', value: 'Extreme' },
        { label: 'Duration', value: 'One hour, volatile' },
        { label: 'Catalyst', value: 'Stardust residue' },
        { label: 'Caution', value: 'Tether yourself firmly' },
      ],
      mirror: 'to rise one must first let go',
    },
    right: {
      title: 'Umbral Draught',
      subtitle: 'Haustus Umbrae Profundae',
      illustration: 'potion-skull',
      description:
        'Fermented in absolute darkness from the ink of deep-sea cephalopods and shadow-caught cobwebs. This inky draught grants the drinker <em>passage through darkness</em> itself\u2014shadows become doorways, and the night a navigable sea.',
      properties: [
        { label: 'Potency', value: 'Formidable' },
        { label: 'Duration', value: 'Until first light' },
        { label: 'Catalyst', value: 'Obsidian dust' },
        { label: 'Caution', value: 'Never drink at noon' },
      ],
      mirror: 'darkness is merely light unseen',
    },
  },
  {
    left: {
      title: 'Quicksilver Essence',
      subtitle: 'Essentia Argenti Vivi',
      illustration: 'potion-mercury',
      description:
        'A mercurial compound stabilised through seventeen stages of alchemical refinement. This ever-shifting liquid bestows <em>preternatural reflexes</em> upon the consumer\u2014time itself appears to thicken, granting moments that stretch like hours.',
      properties: [
        { label: 'Potency', value: 'Severe' },
        { label: 'Duration', value: 'Thirty minutes, exact' },
        { label: 'Catalyst', value: 'Hummingbird feather' },
        { label: 'Caution', value: 'Do not combine with stimulants' },
      ],
      mirror: 'speed is stillness inverted',
    },
    right: {
      type: 'cover',
      title: 'Finis Libri',
      ornament: '\u2726 \u2727 \u2726',
      desc: 'Thus concludes this volume of the Codex. May the knowledge herein serve thee well, and may thy hand remain steady in the art of the apothecary.',
    },
  },
];
