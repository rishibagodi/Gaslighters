import { useState, useCallback } from 'react';

import Navbar          from './components/Navbar';
import Scanner         from './components/Scanner';
import ResultCard      from './components/ResultCard';
import Dashboard       from './components/Dashboard';
import IrrigationForm  from './components/IrrigationForm';
import IrrigationResult from './components/IrrigationResult';

/* ── localStorage helpers ──────────────────────────────── */
const LS_KEY = 'farmsense_history';

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(history));
  } catch { /* storage quota; silently ignore */ }
}

/* ═══════════════════════════════════════════════════════ */

export default function App() {
  const [page,              setPage]              = useState('scanner');
  const [scanResult,        setScanResult]        = useState(null);
  const [irrigationResult,  setIrrigationResult]  = useState(null);
  const [history,           setHistory]           = useState(loadHistory);

  /* ── Scan handler ───────────────────────────────────── */
  const handleScanResult = useCallback((result) => {
    const entry = { ...result, timestamp: Date.now() };

    setHistory((prev) => {
      const updated = [...prev, entry];
      saveHistory(updated);
      return updated;
    });

    setScanResult(entry);
  }, []);

  /* ── Irrigation handler ─────────────────────────────── */
  const handleIrrigationSubmit = useCallback((formValues) => {
    const et0 = 4.8;
    const stageKc = {
      Early: 0.7,
      Mid: 1.0,
      Late: 0.85,
    };
    const soilFactor = {
      Sandy: 1.15,
      Loam: 1.0,
      Clay: 0.9,
    };

    const kc = stageKc[formValues.stage] ?? 1.0;
    const factor = soilFactor[formValues.soil] ?? 1.0;
    const mockPlan = {
      crop: formValues.crop,
      stage: formValues.stage,
      et0,
      kc,
      water_needed_mm: Number((et0 * kc * factor).toFixed(1)),
      weather_cached: true,
    };

    setIrrigationResult(mockPlan);
    return mockPlan;
  }, []);

  /* ── Page titles ────────────────────────────────────── */
  const PAGE_TITLE = {
    scanner:    'Scan Crop',
    dashboard:  'Health Dashboard',
    irrigation: 'Irrigation Advisor',
  };

  /* ── Render ─────────────────────────────────────────── */
  return (
    <div className="app-shell">

      {/* ── Header ───────────────────────────────────── */}
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-header__logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.5 9 4 13.5 4 16a8 8 0 0016 0c0-2.5-2.5-7-8-14z"/>
            </svg>
          </div>
          <div className="app-header__text">
            <h1 className="app-header__title">FarmSense</h1>
            <p className="app-header__sub">{PAGE_TITLE[page]}</p>
          </div>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────── */}
      <main className="app-main" id="main-content">

        {/* Dashboard page */}
        {page === 'dashboard' && (
          <Dashboard history={history} />
        )}

        {/* Scanner page */}
        {page === 'scanner' && (
          <>
            <Scanner onResult={handleScanResult} />
            {scanResult && (
              <ResultCard result={{
                disease:    scanResult.label,
                confidence: scanResult.confidence,
                severity:   scanResult.severity   ?? 'moderate',
                treatment:  scanResult.treatment  ?? 'Consult an agronomist for treatment options.',
                prevention: scanResult.prevention ?? 'Monitor crops regularly and maintain field hygiene.',
              }} />
            )}
            <IrrigationForm onSubmit={handleIrrigationSubmit} />
            {irrigationResult && (
              <IrrigationResult result={irrigationResult} />
            )}
          </>
        )}

        {/* Irrigation page */}
        {page === 'irrigation' && (
          <>
            <IrrigationForm onSubmit={handleIrrigationSubmit} />
            {irrigationResult && (
              <IrrigationResult result={irrigationResult} />
            )}
          </>
        )}

      </main>

      {/* ── Bottom nav ───────────────────────────────── */}
      <Navbar page={page} setPage={setPage} />

    </div>
  );
}
