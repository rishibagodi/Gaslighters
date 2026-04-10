/**
 * IrrigationResult
 * Displays the irrigation recommendation returned from the backend.
 *
 * @param {{
 *   result: {
 *     crop:            string,
 *     stage:           string,
 *     et0:             number,   // Reference evapotranspiration (mm/day)
 *     kc:              number,   // Crop coefficient
 *     water_needed_mm: number,   // Recommended irrigation depth (mm)
 *     weather_cached:  boolean,  // true = weather data is from cache
 *   }
 * }} props
 */
export default function IrrigationResult({ result }) {
  if (!result) return null;

  const { crop, stage, et0, kc, water_needed_mm, weather_cached, notes, weather } = result;

  /* Derived label colour for water amount */
  const waterLevel =
    water_needed_mm >= 8 ? 'high' :
    water_needed_mm >= 4 ? 'moderate' : 'low';

  const waterColour = {
    low:      '#4ade80',
    moderate: '#facc15',
    high:     '#f87171',
  }[waterLevel];

  return (
    <article className="irr-result" aria-label="Irrigation recommendation">

      {/* ── Cached weather warning ─────────────────── */}
      {weather_cached && (
        <div className="irr-result__warning" role="alert">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0
                     001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <span>
            Using <strong>cached weather data</strong> — live conditions may differ.
          </span>
        </div>
      )}

      {/* ── Header: crop + stage ───────────────────── */}
      <div className="irr-result__header">
        <div className="irr-result__meta">
          <span className="irr-result__tag">{crop}</span>
          <span className="irr-result__separator" aria-hidden="true">·</span>
          <span className="irr-result__tag irr-result__tag--muted">{stage} Stage</span>
        </div>
        <h2 className="irr-result__section-label">Irrigation Recommendation</h2>
      </div>

      {/* ── Advisory note ───────────────────────────── */}
      {notes && (
        <div className="irr-result__warning" role="note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <span>{notes}</span>
        </div>
      )}

      {/* ── Hero: water needed ─────────────────────── */}
      <div className="irr-result__hero">
        <div className="irr-result__hero-ring" style={{ '--ring-color': waterColour }} aria-hidden="true">
          <WaterDropIcon color={waterColour} />
        </div>
        <div className="irr-result__hero-text">
          <p className="irr-result__hero-value" style={{ color: waterColour }}>
            {water_needed_mm != null ? water_needed_mm.toFixed(1) : '—'}
            <span className="irr-result__hero-unit">mm</span>
          </p>
          <p className="irr-result__hero-label">Water Needed Today</p>
        </div>
      </div>

      {/* ── Divider ────────────────────────────────── */}
      <hr className="irr-result__divider" />

      {/* ── 2×2 metrics grid ───────────────────────── */}
      <div className="irr-result__grid" role="list">

        <MetricTile
          label="ET₀"
          value={et0 != null ? et0.toFixed(2) : '—'}
          unit="mm/day"
          description="Reference evapotranspiration"
          icon={<ET0Icon />}
        />

        <MetricTile
          label="Kc"
          value={kc != null ? kc.toFixed(2) : '—'}
          unit=""
          description="Crop coefficient for this stage"
          icon={<KcIcon />}
        />

        <MetricTile
          label="ETc"
          value={(et0 != null && kc != null) ? (et0 * kc).toFixed(2) : '—'}
          unit="mm/day"
          description="Crop evapotranspiration (ET₀ × Kc)"
          icon={<ETcIcon />}
        />

        <MetricTile
          label="Depth"
          value={water_needed_mm != null ? water_needed_mm.toFixed(1) : '—'}
          unit="mm"
          description="Recommended irrigation depth"
          icon={<DepthIcon />}
          highlight
        />

      </div>

      {/* ── Weather summary ────────────────────────── */}
      {weather && (
        <div className="irr-result__grid" role="list" aria-label="Current weather summary">
          <MetricTile
            label="Temp"
            value={weather.temp_c != null ? Number(weather.temp_c).toFixed(1) : '—'}
            unit="degC"
            description="Air temperature"
            icon={<ET0Icon />}
          />
          <MetricTile
            label="Humidity"
            value={weather.humidity != null ? Number(weather.humidity).toFixed(0) : '—'}
            unit="%"
            description="Relative humidity"
            icon={<KcIcon />}
          />
          <MetricTile
            label="Wind"
            value={weather.wind_ms != null ? Number(weather.wind_ms).toFixed(1) : '—'}
            unit="m/s"
            description="Wind speed"
            icon={<ETcIcon />}
          />
        </div>
      )}

    </article>
  );
}

/* ─── Metric tile ────────────────────────────────────────── */
function MetricTile({ label, value, unit, description, icon, highlight }) {
  return (
    <div
      className={`irr-tile ${highlight ? 'irr-tile--highlight' : ''}`}
      role="listitem"
      aria-label={`${label}: ${value}${unit ? ' ' + unit : ''}`}
    >
      <div className="irr-tile__icon" aria-hidden="true">{icon}</div>
      <div className="irr-tile__body">
        <p className="irr-tile__label">{label}</p>
        <p className="irr-tile__value">
          {value}
          {unit && <span className="irr-tile__unit"> {unit}</span>}
        </p>
        <p className="irr-tile__desc">{description}</p>
      </div>
    </div>
  );
}

/* ─── Inline icons ───────────────────────────────────────── */
function WaterDropIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill={color ?? 'currentColor'} aria-hidden="true">
      <path d="M12 2C6.5 9 4 13.5 4 16a8 8 0 0016 0c0-2.5-2.5-7-8-14z"
        opacity=".85"/>
    </svg>
  );
}

function ET0Icon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function KcIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 000 20A10 10 0 0012 2z"/>
      <path d="M12 8c-2 4-2 8 0 12M12 8c2 4 2 8 0 12"/>
    </svg>
  );
}

function ETcIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}

function DepthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20"/>
      <path d="M17 7l-5 5-5-5M7 17l5-5 5 5"/>
    </svg>
  );
}
