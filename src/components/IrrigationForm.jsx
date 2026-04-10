import { useState } from 'react';

/* ── Option lists ──────────────────────────────────────── */
const CROPS  = ['Tomato', 'Potato', 'Maize', 'Rice', 'Wheat', 'Cotton'];
const STAGES = ['Early', 'Mid', 'Late'];
const SOILS  = ['Sandy', 'Loam', 'Clay'];

const INITIAL = { crop: '', stage: '', soil: '', lat: '', lon: '', soilMoisture: '' };

/**
 * IrrigationForm
 *
 * @param {{
 *   onSubmit: (values: { crop: string, stage: string, soil: string, lat: string, lon: string, soilMoisture: string }) => void,
 *   loading:  boolean,
 * }} props
 */
export default function IrrigationForm({ onSubmit, loading = false }) {
  const [values, setValues] = useState(INITIAL);
  const [touched, setTouched] = useState({});
  const [locating, setLocating] = useState(false);
  const [locationMessage, setLocationMessage] = useState('Location not set.');

  const isComplete =
    values.crop &&
    values.stage &&
    values.soil &&
    values.lat.trim() &&
    values.lon.trim() &&
    values.soilMoisture !== '';

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isComplete || loading) return;
    onSubmit?.(values);
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage('Geolocation is not supported on this device/browser.');
      return;
    }

    setLocating(true);
    setLocationMessage('Fetching your location...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lon = position.coords.longitude.toFixed(6);

        setValues((prev) => ({ ...prev, lat, lon }));
        setTouched((prev) => ({ ...prev, lat: true, lon: true }));
        setLocationMessage('Location captured successfully.');
        setLocating(false);
      },
      (error) => {
        setLocationMessage(`Unable to get location: ${error.message}`);
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <form className="irr-form" onSubmit={handleSubmit} noValidate aria-label="Irrigation advisor form">

      {/* ── Section label ── */}
      <div className="irr-form__heading">
        <div className="irr-form__heading-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            <path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <div>
          <h2 className="irr-form__title">Irrigation Advisor</h2>
          <p className="irr-form__subtitle">Select crop details to get a recommendation</p>
        </div>
      </div>

      {/* ── Fields ── */}
      <div className="irr-form__fields">

        <SelectField
          id="irr-crop"
          label="Crop"
          icon={<CropIcon />}
          value={values.crop}
          onChange={handleChange('crop')}
          touched={touched.crop}
          placeholder="Select crop"
          options={CROPS}
        />

        <SelectField
          id="irr-stage"
          label="Growth Stage"
          icon={<StageIcon />}
          value={values.stage}
          onChange={handleChange('stage')}
          touched={touched.stage}
          placeholder="Select stage"
          options={STAGES}
        />

        <SelectField
          id="irr-soil"
          label="Soil Type"
          icon={<SoilIcon />}
          value={values.soil}
          onChange={handleChange('soil')}
          touched={touched.soil}
          placeholder="Select soil type"
          options={SOILS}
        />

        <details className="irr-advanced" open>
          <summary className="irr-advanced__summary">Advanced / Location</summary>
          <div className="irr-advanced__content">
            <button
              type="button"
              className="btn btn--secondary"
              onClick={handleUseMyLocation}
              disabled={loading || locating}
            >
              {locating ? 'Getting location...' : 'Use My Location'}
            </button>
            <p className="irr-field__error-msg" role="status">{locationMessage}</p>
          </div>
        </details>

        <InputField
          id="irr-soil-moisture"
          label="Current Soil Moisture (%)"
          icon={<SoilIcon />}
          value={values.soilMoisture}
          onChange={handleChange('soilMoisture')}
          touched={touched.soilMoisture}
          placeholder="e.g. 35"
          type="number"
          min="0"
          max="100"
          step="1"
        />

      </div>

      {/* ── Submit ── */}
      <button
        id="irr-submit"
        type="submit"
        className={`btn btn--primary irr-form__submit ${loading ? 'btn--loading' : ''}`}
        disabled={!isComplete || loading}
        aria-busy={loading}
        aria-label={loading ? 'Getting recommendation…' : 'Get irrigation recommendation'}
      >
        {loading ? (
          <>
            <span className="spinner spinner--sm" aria-hidden="true" />
            Getting recommendation…
          </>
        ) : (
          <>
            <svg className="irr-form__submit-icon" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Get Recommendation
          </>
        )}
      </button>

    </form>
  );
}

/* ─── Reusable select field ──────────────────────────────── */
function SelectField({ id, label, icon, value, onChange, touched, placeholder, options }) {
  const isError = touched && !value;

  return (
    <div className={`irr-field ${isError ? 'irr-field--error' : ''} ${value ? 'irr-field--filled' : ''}`}>
      <label className="irr-field__label" htmlFor={id}>{label}</label>
      <div className="irr-field__wrapper">
        <span className="irr-field__icon" aria-hidden="true">{icon}</span>
        <select
          id={id}
          className="irr-field__select"
          value={value}
          onChange={onChange}
          aria-invalid={isError}
          aria-describedby={isError ? `${id}-error` : undefined}
          required
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <span className="irr-field__chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </div>
      {isError && (
        <p id={`${id}-error`} className="irr-field__error-msg" role="alert">
          Please select a {label.toLowerCase()}.
        </p>
      )}
    </div>
  );
}

function InputField({ id, label, icon, value, onChange, touched, placeholder, type = 'text', step, min, max }) {
  const isError = touched && !String(value ?? '').trim();

  return (
    <div className={`irr-field ${isError ? 'irr-field--error' : ''} ${value ? 'irr-field--filled' : ''}`}>
      <label className="irr-field__label" htmlFor={id}>{label}</label>
      <div className="irr-field__wrapper">
        <span className="irr-field__icon" aria-hidden="true">{icon}</span>
        <input
          id={id}
          className="irr-field__select"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={isError}
          aria-describedby={isError ? `${id}-error` : undefined}
          step={step}
          min={min}
          max={max}
          required
        />
      </div>
      {isError && (
        <p id={`${id}-error`} className="irr-field__error-msg" role="alert">
          Please enter {label.toLowerCase()}.
        </p>
      )}
    </div>
  );
}

/* ─── Inline SVG icons ───────────────────────────────────── */
function CropIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 000 20A10 10 0 0012 2z"/>
      <path d="M12 8c-2 4-2 8 0 12M12 8c2 4 2 8 0 12"/>
    </svg>
  );
}

function StageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  );
}

function SoilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17h18M3 12h18M3 7h18"/>
    </svg>
  );
}

