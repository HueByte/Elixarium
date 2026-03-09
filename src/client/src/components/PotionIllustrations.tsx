const silver = '#9a9aaa';
const silverLight = '#b0b0c0';
const silverDark = '#707080';

const illustrations: Record<string, React.ReactNode> = {
  'potion-round': (
    <svg width="120" height="150" viewBox="0 0 120 150">
      <defs>
        <linearGradient id="liq1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={silverLight} stopOpacity="0.3" />
          <stop offset="100%" stopColor={silverDark} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="100" rx="38" ry="35" fill="none" stroke={silver} strokeWidth="1.5" />
      <ellipse cx="60" cy="100" rx="30" ry="28" fill="url(#liq1)" />
      <line x1="52" y1="65" x2="52" y2="35" stroke={silver} strokeWidth="1.5" />
      <line x1="68" y1="65" x2="68" y2="35" stroke={silver} strokeWidth="1.5" />
      <line x1="48" y1="35" x2="72" y2="35" stroke={silver} strokeWidth="1.5" />
      <ellipse cx="60" cy="35" rx="12" ry="4" fill="none" stroke={silver} strokeWidth="1" />
      <circle cx="55" cy="90" r="3" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.5" />
      <circle cx="65" cy="105" r="2" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.4" />
      <circle cx="50" cy="108" r="1.5" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.3" />
      <text x="60" y="145" textAnchor="middle" fontFamily="MedievalSharp" fontSize="8" fill={silver} opacity="0.4">fig. I</text>
    </svg>
  ),
  'potion-tall': (
    <svg width="100" height="150" viewBox="0 0 100 150">
      <defs>
        <linearGradient id="liq2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={silverLight} stopOpacity="0.25" />
          <stop offset="100%" stopColor={silverDark} stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path d="M 40 130 Q 35 110 38 70 L 42 30 L 58 30 L 62 70 Q 65 110 60 130 Z" fill="none" stroke={silver} strokeWidth="1.5" />
      <path d="M 42 120 Q 40 100 42 70 L 44 45 L 56 45 L 58 70 Q 60 100 58 120 Z" fill="url(#liq2)" />
      <line x1="42" y1="30" x2="42" y2="20" stroke={silver} strokeWidth="1" />
      <line x1="58" y1="30" x2="58" y2="20" stroke={silver} strokeWidth="1" />
      <ellipse cx="50" cy="20" rx="10" ry="4" fill="none" stroke={silver} strokeWidth="1" />
      <path d="M 35 130 L 65 130" stroke={silver} strokeWidth="1.5" />
      <ellipse cx="50" cy="130" rx="15" ry="5" fill="none" stroke={silver} strokeWidth="1" />
      <text x="50" y="148" textAnchor="middle" fontFamily="MedievalSharp" fontSize="8" fill={silver} opacity="0.4">fig. II</text>
    </svg>
  ),
  'potion-wide': (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <defs>
        <linearGradient id="liq3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={silverLight} stopOpacity="0.3" />
          <stop offset="100%" stopColor={silverDark} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path d="M 30 100 Q 25 80 35 60 L 55 30 L 85 30 L 105 60 Q 115 80 110 100 Z" fill="none" stroke={silver} strokeWidth="1.5" />
      <path d="M 38 95 Q 35 78 43 62 L 58 40 L 82 40 L 97 62 Q 105 78 102 95 Z" fill="url(#liq3)" />
      <ellipse cx="70" cy="100" rx="40" ry="8" fill="none" stroke={silver} strokeWidth="1.5" />
      <line x1="55" y1="30" x2="58" y2="15" stroke={silver} strokeWidth="1" />
      <line x1="85" y1="30" x2="82" y2="15" stroke={silver} strokeWidth="1" />
      <line x1="58" y1="15" x2="82" y2="15" stroke={silver} strokeWidth="1.5" />
      <path d="M 50 75 Q 70 65 90 75" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.4" />
      <circle cx="60" cy="82" r="2" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.4" />
      <circle cx="80" cy="88" r="1.5" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.3" />
      <text x="70" y="125" textAnchor="middle" fontFamily="MedievalSharp" fontSize="8" fill={silver} opacity="0.4">fig. III</text>
    </svg>
  ),
  'potion-angular': (
    <svg width="110" height="150" viewBox="0 0 110 150">
      <defs>
        <linearGradient id="liq4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={silverLight} stopOpacity="0.25" />
          <stop offset="100%" stopColor={silverDark} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <polygon points="55,25 80,55 80,110 30,110 30,55" fill="none" stroke={silver} strokeWidth="1.5" />
      <polygon points="55,50 72,65 72,105 38,105 38,65" fill="url(#liq4)" />
      <line x1="48" y1="25" x2="48" y2="10" stroke={silver} strokeWidth="1" />
      <line x1="62" y1="25" x2="62" y2="10" stroke={silver} strokeWidth="1" />
      <rect x="46" y="8" width="18" height="6" rx="2" fill="none" stroke={silver} strokeWidth="1" />
      <line x1="40" y1="80" x2="70" y2="80" stroke={silverLight} strokeWidth="0.3" opacity="0.4" />
      <line x1="40" y1="90" x2="70" y2="90" stroke={silverLight} strokeWidth="0.3" opacity="0.3" />
      <text x="55" y="130" textAnchor="middle" fontFamily="MedievalSharp" fontSize="8" fill={silver} opacity="0.4">fig. IV</text>
    </svg>
  ),
  'potion-skull': (
    <svg width="120" height="150" viewBox="0 0 120 150">
      <defs>
        <linearGradient id="liq5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={silverLight} stopOpacity="0.2" />
          <stop offset="100%" stopColor={silverDark} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path d="M 35 110 Q 30 80 40 55 Q 45 35 60 30 Q 75 35 80 55 Q 90 80 85 110 Z" fill="none" stroke={silver} strokeWidth="1.5" />
      <path d="M 42 105 Q 38 80 46 58 Q 50 42 60 38 Q 70 42 74 58 Q 82 80 78 105 Z" fill="url(#liq5)" />
      <ellipse cx="60" cy="110" rx="25" ry="6" fill="none" stroke={silver} strokeWidth="1.5" />
      <line x1="55" y1="30" x2="53" y2="15" stroke={silver} strokeWidth="1" />
      <line x1="65" y1="30" x2="67" y2="15" stroke={silver} strokeWidth="1" />
      <line x1="53" y1="15" x2="67" y2="15" stroke={silver} strokeWidth="1.5" />
      <circle cx="53" cy="12" r="3" fill="none" stroke={silver} strokeWidth="0.8" />
      <circle cx="67" cy="12" r="3" fill="none" stroke={silver} strokeWidth="0.8" />
      <path d="M 55 75 L 58 80 L 62 80 L 65 75" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.3" />
      <text x="60" y="135" textAnchor="middle" fontFamily="MedievalSharp" fontSize="8" fill={silver} opacity="0.4">fig. V</text>
    </svg>
  ),
  'potion-mercury': (
    <svg width="110" height="150" viewBox="0 0 110 150">
      <defs>
        <linearGradient id="liq6" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={silverLight} stopOpacity="0.35" />
          <stop offset="50%" stopColor={silverDark} stopOpacity="0.2" />
          <stop offset="100%" stopColor={silverLight} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <circle cx="55" cy="90" r="30" fill="none" stroke={silver} strokeWidth="1.5" />
      <circle cx="55" cy="90" r="23" fill="url(#liq6)" />
      <line x1="50" y1="60" x2="48" y2="35" stroke={silver} strokeWidth="1.5" />
      <line x1="60" y1="60" x2="62" y2="35" stroke={silver} strokeWidth="1.5" />
      <path d="M 42 35 L 48 35 L 45 25 L 55 30 L 65 25 L 62 35 L 68 35" fill="none" stroke={silver} strokeWidth="1" />
      <path d="M 45 85 Q 55 78 65 85 Q 55 92 45 85" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.4" />
      <circle cx="48" cy="95" r="1.5" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.3" />
      <circle cx="62" cy="98" r="1" fill="none" stroke={silverLight} strokeWidth="0.5" opacity="0.3" />
      <text x="55" y="135" textAnchor="middle" fontFamily="MedievalSharp" fontSize="8" fill={silver} opacity="0.4">fig. VI</text>
    </svg>
  ),
};

export function PotionIllustration({ type }: { type: string }) {
  return <div className="elixir-illustration">{illustrations[type] ?? illustrations['potion-round']}</div>;
}
