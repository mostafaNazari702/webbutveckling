import "./Illustration.css";

export default function Illustration({ name, className = "", title }) {
  const Component = library[name];
  if (!Component) return null;
  return (
    <div className={`illustration ${className}`} role="img" aria-label={title}>
      <Component />
    </div>
  );
}

function HeroDeveloper() {
  return (
    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroSky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#ccfbf1" />
        </linearGradient>
        <linearGradient id="heroScreen" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="520" height="380" rx="24" fill="url(#heroSky)" />

      <g transform="translate(420 70)" opacity="0.55">
        <ellipse cx="0" cy="0" rx="42" ry="16" fill="none" stroke="#2563eb" strokeWidth="2" />
        <ellipse cx="0" cy="0" rx="42" ry="16" fill="none" stroke="#2563eb" strokeWidth="2" transform="rotate(60)" />
        <ellipse cx="0" cy="0" rx="42" ry="16" fill="none" stroke="#2563eb" strokeWidth="2" transform="rotate(-60)" />
        <circle cx="0" cy="0" r="6" fill="#2563eb" />
      </g>

      <g transform="translate(110 90)">
        <rect width="300" height="190" rx="14" fill="url(#heroScreen)" />
        <rect x="14" y="14" width="272" height="162" rx="8" fill="#0f172a" />
        <rect x="28" y="32" width="80" height="8" rx="3" fill="#60a5fa" />
        <rect x="28" y="48" width="180" height="8" rx="3" fill="#94a3b8" />
        <rect x="44" y="64" width="140" height="8" rx="3" fill="#a7f3d0" />
        <rect x="44" y="80" width="120" height="8" rx="3" fill="#fcd34d" />
        <rect x="28" y="96" width="80" height="8" rx="3" fill="#60a5fa" />
        <rect x="28" y="120" width="220" height="8" rx="3" fill="#475569" />
        <rect x="28" y="136" width="160" height="8" rx="3" fill="#475569" />
        <circle cx="278" cy="154" r="4" fill="#22c55e" />
        <circle cx="262" cy="154" r="4" fill="#f59e0b" />
        <circle cx="246" cy="154" r="4" fill="#ef4444" />
        <rect x="130" y="190" width="40" height="10" fill="#1e293b" />
        <rect x="100" y="200" width="100" height="6" rx="3" fill="#0f172a" />
      </g>

      <g transform="translate(220 200)">
        <circle cx="40" cy="0" r="22" fill="#fbcfe8" />
        <path d="M18 26 Q40 14 62 26 L70 80 L10 80 Z" fill="#2563eb" />
        <rect x="18" y="80" width="22" height="50" rx="4" fill="#0f172a" />
        <rect x="44" y="80" width="22" height="50" rx="4" fill="#0f172a" />
      </g>

      <circle cx="60" cy="60" r="14" fill="#ffffff" opacity="0.7" />
      <circle cx="80" cy="320" r="22" fill="#ffffff" opacity="0.7" />
      <circle cx="470" cy="300" r="18" fill="#ffffff" opacity="0.7" />
    </svg>
  );
}

function FetchFlow() {
  return (
    <svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#64748b" />
        </marker>
      </defs>

      <g transform="translate(20 50)">
        <rect width="170" height="140" rx="14" fill="#ffffff" stroke="#e2e8f0" />
        <rect x="0" y="0" width="170" height="26" rx="14" fill="#dbeafe" />
        <circle cx="14" cy="13" r="4" fill="#ef4444" />
        <circle cx="28" cy="13" r="4" fill="#f59e0b" />
        <circle cx="42" cy="13" r="4" fill="#22c55e" />
        <text x="85" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" fill="#0f172a">Browser</text>
        <text x="85" y="102" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#64748b">React-app</text>
      </g>

      <g transform="translate(235 70)">
        <rect width="170" height="100" rx="14" fill="#2563eb" />
        <text x="85" y="48" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="20" fill="#ffffff">fetch()</text>
        <text x="85" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#dbeafe">HTTP-request</text>
      </g>

      <g transform="translate(450 50)">
        <rect width="170" height="140" rx="14" fill="#ccfbf1" stroke="#99f6e4" />
        <text x="85" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" fill="#0f172a">API-server</text>
        <text x="85" y="84" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#0f766e">Returnerar JSON</text>
        <rect x="22" y="98" width="126" height="10" rx="3" fill="#5eead4" />
        <rect x="22" y="114" width="100" height="10" rx="3" fill="#5eead4" />
      </g>

      <line x1="190" y1="120" x2="235" y2="120" stroke="#64748b" strokeWidth="3" markerEnd="url(#arr)" />
      <line x1="405" y1="120" x2="450" y2="120" stroke="#64748b" strokeWidth="3" markerEnd="url(#arr)" />

      <text x="212" y="110" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#64748b">request</text>
      <text x="427" y="110" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#64748b">response</text>
    </svg>
  );
}

function ComponentTree() {
  return (
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="320" rx="20" fill="#f8fafc" />
      <line x1="260" y1="80" x2="120" y2="180" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="260" y1="80" x2="260" y2="180" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="260" y1="80" x2="400" y2="180" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="120" y1="220" x2="60" y2="280" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="120" y1="220" x2="180" y2="280" stroke="#cbd5e1" strokeWidth="2" />

      <g>
        <rect x="200" y="40" width="120" height="40" rx="12" fill="#2563eb" />
        <text x="260" y="64" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#fff" fontWeight="700">App</text>
      </g>
      <g>
        <rect x="60" y="180" width="120" height="40" rx="12" fill="#dbeafe" stroke="#bfdbfe" />
        <text x="120" y="204" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#1d4ed8" fontWeight="700">Header</text>
      </g>
      <g>
        <rect x="200" y="180" width="120" height="40" rx="12" fill="#ccfbf1" stroke="#99f6e4" />
        <text x="260" y="204" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#0f766e" fontWeight="700">Lista</text>
      </g>
      <g>
        <rect x="340" y="180" width="120" height="40" rx="12" fill="#fef3c7" stroke="#fde68a" />
        <text x="400" y="204" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#b45309" fontWeight="700">Footer</text>
      </g>
      <g>
        <rect x="0" y="280" width="120" height="40" rx="12" fill="#ede9fe" stroke="#ddd6fe" />
        <text x="60" y="304" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#7c3aed" fontWeight="700">Logo</text>
      </g>
      <g>
        <rect x="120" y="280" width="120" height="40" rx="12" fill="#ffe4e6" stroke="#fecdd3" />
        <text x="180" y="304" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#be123c" fontWeight="700">Nav</text>
      </g>
    </svg>
  );
}

function JsonNote() {
  return (
    <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="240" rx="18" fill="#0f172a" />
      <g fontFamily="JetBrains Mono, monospace" fontSize="14">
        <text x="24" y="40" fill="#94a3b8">{`{`}</text>
        <text x="40" y="64" fill="#60a5fa">"id"</text>
        <text x="80" y="64" fill="#94a3b8">:</text>
        <text x="92" y="64" fill="#fcd34d">1,</text>
        <text x="40" y="88" fill="#60a5fa">"title"</text>
        <text x="100" y="88" fill="#94a3b8">:</text>
        <text x="112" y="88" fill="#a7f3d0">"Lär dig React",</text>
        <text x="40" y="112" fill="#60a5fa">"completed"</text>
        <text x="140" y="112" fill="#94a3b8">:</text>
        <text x="152" y="112" fill="#fb7185">false,</text>
        <text x="40" y="136" fill="#60a5fa">"tags"</text>
        <text x="92" y="136" fill="#94a3b8">: [</text>
        <text x="120" y="136" fill="#a7f3d0">"react", "fetch"</text>
        <text x="280" y="136" fill="#94a3b8">]</text>
        <text x="24" y="160" fill="#94a3b8">{`}`}</text>
      </g>
      <g transform="translate(240 188)">
        <rect width="100" height="30" rx="15" fill="#2563eb" />
        <text x="50" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#fff">JSON</text>
      </g>
    </svg>
  );
}

function WeatherScene() {
  return (
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="weatherSky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="520" height="320" rx="20" fill="url(#weatherSky)" />
      <circle cx="120" cy="110" r="44" fill="#fcd34d" />
      <g stroke="#f59e0b" strokeWidth="3" strokeLinecap="round">
        <line x1="120" y1="40" x2="120" y2="56" />
        <line x1="120" y1="164" x2="120" y2="180" />
        <line x1="50" y1="110" x2="66" y2="110" />
        <line x1="174" y1="110" x2="190" y2="110" />
        <line x1="72" y1="62" x2="84" y2="74" />
        <line x1="156" y1="146" x2="168" y2="158" />
        <line x1="72" y1="158" x2="84" y2="146" />
        <line x1="156" y1="74" x2="168" y2="62" />
      </g>
      <g fill="#ffffff">
        <ellipse cx="320" cy="140" rx="80" ry="34" />
        <ellipse cx="370" cy="120" rx="50" ry="28" />
        <ellipse cx="270" cy="124" rx="44" ry="26" />
      </g>
      <g transform="translate(180 180)">
        <rect width="160" height="120" rx="16" fill="#0f172a" />
        <rect x="10" y="14" width="140" height="92" rx="8" fill="#1e293b" />
        <text x="80" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" fill="#fff">12°C</text>
        <text x="80" y="72" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#cbd5e1">Stockholm</text>
        <text x="80" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#5eead4">Lätt molnigt</text>
      </g>
    </svg>
  );
}

function ContactMail() {
  return (
    <svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="360" rx="24" fill="#dbeafe" />
      <g transform="translate(120 90)">
        <rect width="280" height="180" rx="14" fill="#ffffff" stroke="#bfdbfe" />
        <path d="M0 0 L140 110 L280 0" fill="none" stroke="#2563eb" strokeWidth="3" />
        <rect x="20" y="120" width="140" height="10" rx="3" fill="#cbd5e1" />
        <rect x="20" y="138" width="100" height="10" rx="3" fill="#cbd5e1" />
        <circle cx="240" cy="140" r="20" fill="#2563eb" />
        <path d="M232 140 L238 146 L250 134" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="70" cy="70" r="20" fill="#ffffff" opacity="0.85" />
      <circle cx="450" cy="80" r="12" fill="#ffffff" opacity="0.85" />
      <circle cx="470" cy="290" r="22" fill="#ffffff" opacity="0.85" />
    </svg>
  );
}

function CopyrightShield() {
  return (
    <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shield" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect width="360" height="360" rx="24" fill="#ede9fe" />
      <path d="M180 50 L300 90 V190 Q300 270 180 320 Q60 270 60 190 V90 Z" fill="url(#shield)" />
      <text x="180" y="210" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="120" fill="#ffffff">©</text>
    </svg>
  );
}

const library = {
  hero: HeroDeveloper,
  fetchFlow: FetchFlow,
  componentTree: ComponentTree,
  json: JsonNote,
  weather: WeatherScene,
  contactMail: ContactMail,
  copyrightShield: CopyrightShield
};
