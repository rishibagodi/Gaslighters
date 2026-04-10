/* ── Severity config ─────────────────────────────────────── */
const SEVERITY_CONFIG = {
  low:      { label: 'Low',      className: 'badge--green',  icon: '✓' },
  moderate: { label: 'Moderate', className: 'badge--yellow', icon: '⚠' },
  high:     { label: 'High',     className: 'badge--red',    icon: '✕' },
};

const normalize = (val) => (val ?? '').toString().toLowerCase().trim();

/**
 * ResultCard
 * Displays the model's diagnosis result in a structured card.
 *
 * @param {{
 *   result: {
 *     disease:    string,
 *     confidence: number,          // 0-100
 *     severity:   'low' | 'moderate' | 'high',
 *     treatment:  string,
 *     prevention: string,
 *   }
 * }} props
 */
export default function ResultCard({ result }) {
  if (!result) return null;

  const { disease, confidence, severity, treatment, prevention } = result;

  const sev     = SEVERITY_CONFIG[normalize(severity)] ?? SEVERITY_CONFIG.moderate;
  const conf    = Math.min(100, Math.max(0, Math.round(confidence ?? 0)));

  /* Circular progress for confidence */
  const radius      = 26;
  const circumference = 2 * Math.PI * radius;
  const dash          = (conf / 100) * circumference;

  return (
    <article className="result-card" aria-label="Diagnosis result">

      {/* ── Header ─────────────────────────────── */}
      <div className="result-card__header">
        <div className="result-card__title-row">
          <h2 className="result-card__disease">{disease ?? 'Unknown'}</h2>
          <span className={`result-badge ${sev.className}`} aria-label={`Severity: ${sev.label}`}>
            <span className="result-badge__icon" aria-hidden="true">{sev.icon}</span>
            {sev.label}
          </span>
        </div>

        {/* Confidence ring */}
        <div className="confidence-ring" aria-label={`Confidence: ${conf}%`}>
          <svg viewBox="0 0 64 64" className="confidence-ring__svg" aria-hidden="true">
            {/* track */}
            <circle cx="32" cy="32" r={radius}
              fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
            {/* fill */}
            <circle cx="32" cy="32" r={radius}
              fill="none"
              stroke="url(#conf-gradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
              transform="rotate(-90 32 32)"
            />
            <defs>
              <linearGradient id="conf-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#16a34a" />
                <stop offset="100%" stopColor="#84cc16" />
              </linearGradient>
            </defs>
          </svg>
          <div className="confidence-ring__label">
            <span className="confidence-ring__pct">{conf}%</span>
            <span className="confidence-ring__sub">confidence</span>
          </div>
        </div>
      </div>

      {/* ── Divider ────────────────────────────── */}
      <hr className="result-card__divider" />

      {/* ── Body sections ──────────────────────── */}
      <div className="result-card__body">

        <section className="result-section" aria-labelledby="treatment-heading">
          <div className="result-section__icon-wrap result-section__icon-wrap--green" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              <path d="M8 12l3 3 5-5"/>
            </svg>
          </div>
          <div className="result-section__content">
            <h3 id="treatment-heading" className="result-section__title">Treatment</h3>
            <p className="result-section__text">{treatment ?? 'No treatment information available.'}</p>
          </div>
        </section>

        <section className="result-section" aria-labelledby="prevention-heading">
          <div className="result-section__icon-wrap result-section__icon-wrap--blue" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div className="result-section__content">
            <h3 id="prevention-heading" className="result-section__title">Prevention</h3>
            <p className="result-section__text">{prevention ?? 'No prevention information available.'}</p>
          </div>
        </section>

      </div>
    </article>
  );
}
