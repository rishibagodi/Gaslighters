const LS_KEY = 'farmsense_history';

export function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function saveToHistory(entry) {
  try {
    const history = getHistory();
    const updated = [...history, entry];
    localStorage.setItem(LS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return getHistory();
  }
}

