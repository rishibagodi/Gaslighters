import { useState, useCallback } from 'react';

import Navbar          from './components/Navbar';
import Scanner         from './components/Scanner';
import ResultCard      from './components/ResultCard';
import Dashboard       from './components/Dashboard';
import IrrigationForm  from './components/IrrigationForm';
import IrrigationResult from './components/IrrigationResult';
import { planIrrigation } from './logic/irrigationPlanner';
import { getHistory, saveResult } from './storage/historyStore';

/* ═══════════════════════════════════════════════════════ */

export default function App() {
  const [page,              setPage]              = useState('scanner');
  const [scanResult,        setScanResult]        = useState(null);
  const [irrigationResult,  setIrrigationResult]  = useState(null);
  const [irrigationLoading, setIrrigationLoading] = useState(false);
  const [irrigationError,   setIrrigationError]   = useState(null);
  const [history,           setHistory]           = useState(getHistory);

  /* ── Scan handler ───────────────────────────────────── */
  const handleScanResult = useCallback((result) => {
    const entry = saveResult(result);
    setHistory(getHistory());

    setScanResult(entry);
  }, []);

  /* ── Irrigation handler ─────────────────────────────── */
  const handleIrrigationSubmit = useCallback(async (formValues) => {
    const moistureToPercent = {
      Dry: 20,
      Moist: 50,
      Wet: 80,
    };

    setIrrigationLoading(true);
    setIrrigationError(null);
    setIrrigationResult(null);

    try {
      const plan = await planIrrigation({
        crop: formValues.crop,
        stage: formValues.stage,
        soilMoisture: (moistureToPercent[formValues.soilMoisture] ?? 50) / 100,
        lat: Number(formValues.lat),
        lon: Number(formValues.lon),
      });

      setIrrigationResult(plan);
      setIrrigationError(null);
      return plan;
    } catch (err) {
      console.error('[App] Irrigation planning failed:', err);
      setIrrigationError(err instanceof Error ? err.message : 'Failed to generate irrigation plan.');
      return null;
    } finally {
      setIrrigationLoading(false);
    }
  }, []);

  /* ── Page titles ────────────────────────────────────── */
  const PAGE_TITLE = {
    scanner:    'Scan Crop',
    dashboard:  'Health Dashboard',
    irrigation: 'Irrigation Advisor',
  };

  /* ── Render ─────────────────────────────────────────── */
  return (
    <div className="app-shell theme-earthy">

      {/* ── Header ───────────────────────────────────── */}
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-header__logo" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 100 Q100 30 180 100 Q100 170 20 100 Z"
                stroke="#2E7D32" strokeWidth="4" fill="none"/>
              <circle cx="100" cy="100" r="35" fill="#A5D6A7"/>
              <path d="M100 70 C120 80, 130 110, 100 130 C70 110, 80 80, 100 70 Z"
                fill="#2E7D32"/>
              <line x1="100" y1="75" x2="100" y2="125"
                stroke="#A5D6A7" strokeWidth="2"/>
              <path d="M60 100 Q100 60 140 100"
                stroke="#66BB6A" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
              <path d="M60 100 Q100 140 140 100"
                stroke="#66BB6A" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
            </svg>
          </div>
          <div className="app-header__text">
            <h1 className="app-header__title">Agri-Netra</h1>
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
          </>
        )}

        {/* Irrigation page */}
        {page === 'irrigation' && (
          <>
            <IrrigationForm onSubmit={handleIrrigationSubmit} loading={irrigationLoading} />
            {irrigationError && (
              <p className="scan-error" role="alert">⚠ {irrigationError}</p>
            )}
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
