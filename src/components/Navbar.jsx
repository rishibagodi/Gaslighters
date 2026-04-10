const TABS = [
  {
    id:    'dashboard',
    label: 'Dashboard',
    emoji: '📊',
    icon:  <DashIcon />,
  },
  {
    id:    'scanner',
    label: 'Scanner',
    emoji: '🔬',
    icon:  <ScanIcon />,
  },
  {
    id:    'irrigation',
    label: 'Irrigation',
    emoji: '💧',
    icon:  <WaterIcon />,
  },
];

/**
 * Navbar
 * Fixed bottom navigation bar with three tabs.
 *
 * @param {{
 *   page:    'dashboard' | 'scanner' | 'irrigation',
 *   setPage: (id: string) => void,
 * }} props
 */
export default function Navbar({ page, setPage }) {
  return (
    <nav className="navbar navbar--earthy" aria-label="Main navigation">
      <div className="navbar__inner">
        {TABS.map((tab) => {
          const isActive = page === tab.id;
          return (
            <button
              key={tab.id}
              id={`nav-${tab.id}`}
              className={`navbar__tab ${isActive ? 'navbar__tab--active' : ''}`}
              onClick={() => setPage(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={tab.label}
            >
              {/* Pill indicator */}
              <span className="navbar__pill" aria-hidden="true" />

              {/* Icon */}
              <span className="navbar__icon" aria-hidden="true">
                {tab.icon}
              </span>

              {/* Label */}
              <span className="navbar__label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ─── SVG icons ──────────────────────────────────────────── */
function DashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 9 4 13.5 4 16a8 8 0 0016 0c0-2.5-2.5-7-8-14z"/>
    </svg>
  );
}
