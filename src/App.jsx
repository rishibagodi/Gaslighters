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
  const [history,           setHistory]           = useState(getHistory);

  /* ── Scan handler ───────────────────────────────────── */
  const handleScanResult = useCallback((result) => {
    const entry = saveResult(result);
    setHistory(getHistory());

    setScanResult(entry);
  }, []);

  /* ── Irrigation handler ─────────────────────────────── */
  const handleIrrigationSubmit = useCallback(async (formValues) => {
    setIrrigationLoading(true);
    setIrrigationResult(null);

    try {
      const plan = await planIrrigation({
        crop: formValues.crop,
        stage: formValues.stage,
        soilMoisture: Math.max(0, Math.min(100, Number(formValues.soilMoisture))) / 100,
        lat: Number(formValues.lat),
        lon: Number(formValues.lon),
      });

      setIrrigationResult(plan);
      return plan;
    } catch (err) {
      console.error('[App] Irrigation planning failed:', err);
      throw err;
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
            <IrrigationForm onSubmit={handleIrrigationSubmit} loading={irrigationLoading} />
            {irrigationResult && (
              <IrrigationResult result={irrigationResult} />
            )}
          </>
        )}

        {/* Irrigation page */}
        {page === 'irrigation' && (
          <>
            <IrrigationForm onSubmit={handleIrrigationSubmit} loading={irrigationLoading} />
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
