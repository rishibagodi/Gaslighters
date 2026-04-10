export default async function handler(req, res) {
  const apiKey =
    process.env.OPENWEATHER_API_KEY ||
    process.env.VITE_OPENWEATHERMAP_API_KEY ||
    process.env.OPENWEATHERMAP_API_KEY;

  console.log('[api/weather] OPENWEATHER_API_KEY configured:', !!process.env.OPENWEATHER_API_KEY);
  console.log('[api/weather] VITE_OPENWEATHERMAP_API_KEY configured:', !!process.env.VITE_OPENWEATHERMAP_API_KEY);
  console.log('[api/weather] Effective weather key configured:', !!apiKey);

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { lat, lon } = req.query ?? {};
  const parsedLat = Number(lat);
  const parsedLon = Number(lon);

  if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLon)) {
    res.status(400).json({ error: 'Invalid lat/lon query parameters' });
    return;
  }

  if (!apiKey) {
    res.status(500).json({
      error: 'Server weather key is not configured',
      message: 'Set OPENWEATHER_API_KEY in the server runtime environment.',
    });
    return;
  }

  const url =
    'https://api.openweathermap.org/data/2.5/weather' +
    `?lat=${encodeURIComponent(parsedLat)}` +
    `&lon=${encodeURIComponent(parsedLon)}` +
    '&units=metric' +
    `&appid=${encodeURIComponent(apiKey)}`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok) {
      const upstreamMessage = json?.message || `HTTP ${response.status}`;
      console.error('[api/weather] OpenWeatherMap error:', {
        status: response.status,
        message: upstreamMessage,
      });

      res.status(response.status).json({
        error: 'OpenWeatherMap API error',
        message: upstreamMessage,
        details: json,
      });
      return;
    }

    res.status(200).json(json);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const cause = error instanceof Error && error.cause ? String(error.cause) : null;
    console.error('[api/weather] Weather proxy request failed:', message);
    res.status(502).json({
      error: 'Weather proxy request failed',
      message,
      cause,
    });
  }
}

