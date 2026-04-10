import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts';

/* ─── helpers ──────────────────────────────────────────── */
const normalize = (v) => (v ?? '').toString().toLowerCase().trim();

function healthColor(score) {
  if (score >= 70) return '#4ade80';   // green
  if (score >= 40) return '#facc15';   // yellow
  return '#f87171';                    // red
}

function severityBadgeClass(severity) {
  const s = normalize(severity);
  if (s === 'low')      return 'badge--green';
  if (s === 'moderate') return 'badge--yellow';
  return 'badge--red';
}

function formatTime(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/* ─── Custom tooltip for recharts ────────────────────── */
function ChartTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="dash-tooltip">
      <p className="dash-tooltip__disease">{d.disease}</p>
      <p className="dash-tooltip__conf">{d.confidence}% confidence</p>
    </div>
  );
}

/* ─── Empty state ────────────────────────────────────── */
function EmptyState({ message }) {
  return (
    <div className="dash-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <p>{message}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Dashboard
   history item shape:
     { disease, confidence, severity, timestamp }
═══════════════════════════════════════════════════════ */
/**
 * @param {{ history: Array<{
 *   disease:    string,
 *   confidence: number,
 *   severity:   'low'|'moderate'|'high',
 *   timestamp?: number|string,
 * }> }} props
 */
export default function Dashboard({ history = [] }) {

  /* ── Health score ── */
  const healthScore = history.length
    ? Math.round(
        (history.filter((h) => normalize(h.severity) === 'low').length / history.length) * 100
      )
    : null;

  const scoreColor  = healthScore != null ? healthColor(healthScore) : '#94a3b8';
  const scoreLabel  =
    healthScore == null ? 'No data yet' :
    healthScore >= 70   ? 'Healthy'     :
    healthScore >= 40   ? 'At Risk'     : 'Critical';

  /* ── Chart data — last 7 scans ── */
  const chartData = history
    .slice(-7)
    .map((h, i) => ({
      scan:       `#${history.length - Math.min(7, history.length) + i + 1}`,
      confidence: h.confidence ?? 0,
      disease:    h.disease ?? 'Unknown',
    }));

  /* ── Recent list — last 5 scans (newest first) ── */
  const recentScans = [...history].reverse().slice(0, 5);

  /* ── Render ── */
  return (
    <section className="dashboard" aria-label="Crop health dashboard">

      {/* ── Header ─────────────────────────────── */}
      <div className="dash-header">
        <div className="dash-header__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <div>
          <h2 className="dash-header__title">Health Dashboard</h2>
          <p className="dash-header__sub">{history.length} total scan{history.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      {/* ── Health score card ───────────────────── */}
      <div className="dash-score-card">
        <div className="dash-score-card__left">
          <p className="dash-score-card__label">Crop Health Score</p>
          <p className="dash-score-card__value" style={{ color: scoreColor }}>
            {healthScore != null ? `${healthScore}%` : '—'}
          </p>
          <span
            className="dash-score-card__status"
            style={{ color: scoreColor, borderColor: `${scoreColor}40`, background: `${scoreColor}18` }}
          >
            {scoreLabel}
          </span>
        </div>

        {/* Mini donut */}
        <div className="dash-score-card__donut" aria-hidden="true">
          {healthScore != null ? (
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="26"
                fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8"/>
              <circle cx="32" cy="32" r="26"
                fill="none"
                stroke={scoreColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(healthScore / 100) * 163.4} 163.4`}
                transform="rotate(-90 32 32)"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="26"
                fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8"/>
            </svg>
          )}
        </div>
      </div>

      {/* ── Confidence trend chart ──────────────── */}
      <div className="dash-card">
        <h3 className="dash-card__title">Confidence Trend — Last 7 Scans</h3>
        {chartData.length < 2 ? (
          <EmptyState message="Need at least 2 scans to show a trend." />
        ) : (
          <div className="dash-chart-wrap" role="img" aria-label="Confidence trend line chart">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="conf-line-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="#16a34a"/>
                    <stop offset="100%" stopColor="#84cc16"/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                <XAxis
                  dataKey="scan"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)' }}/>
                <ReferenceLine y={70} stroke="#4ade8040" strokeDasharray="4 4" />
                <Line
                  type="monotone"
                  dataKey="confidence"
                  stroke="url(#conf-line-grad)"
                  strokeWidth={2.5}
                  dot={{ fill: '#16a34a', stroke: '#0f172a', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#84cc16' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* ── Recent scans list ───────────────────── */}
      <div className="dash-card">
        <h3 className="dash-card__title">Recent Scans</h3>
        {recentScans.length === 0 ? (
          <EmptyState message="No scans yet. Use the Scanner to get started." />
        ) : (
          <ul className="dash-scan-list" aria-label="Last 5 scans">
            {recentScans.map((scan, i) => (
              <li key={i} className="dash-scan-item">
                <div className="dash-scan-item__left">
                  <p className="dash-scan-item__disease">{scan.disease ?? 'Unknown'}</p>
                  {scan.timestamp && (
                    <p className="dash-scan-item__time">{formatTime(scan.timestamp)}</p>
                  )}
                </div>
                <div className="dash-scan-item__right">
                  <span className={`result-badge ${severityBadgeClass(scan.severity)}`}>
                    {scan.severity ?? '—'}
                  </span>
                  {scan.confidence != null && (
                    <span className="dash-scan-item__conf">{scan.confidence}%</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </section>
  );
}
