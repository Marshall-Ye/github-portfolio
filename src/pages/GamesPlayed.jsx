import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

const CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTZ7f9GQ_d3ku8kSqDlNQ-pLgqJeKFNonj7ZUYxHaQJAowvBQgL1Xrz5DMrIArLbkDmeM6TGruEwqIu/pub?output=csv';

function splitCSVLine(line) {
  const cells = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      cells.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  cells.push(current.trim());
  return cells;
}

function parseCSV(text) {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = splitCSVLine(lines[0]).map(h => h.replace(/:$/, ''));
  const categories = headers.map(name => ({ name, games: [] }));

  for (let i = 1; i < lines.length; i++) {
    const cells = splitCSVLine(lines[i]);
    cells.forEach((game, colIdx) => {
      if (game && categories[colIdx]) {
        categories[colIdx].games.push(game);
      }
    });
  }

  return categories;
}

export default function GamesPlayed() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(CSV_URL)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.text();
      })
      .then(text => {
        setCategories(parseCSV(text));
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load game list. Try again later.');
        setLoading(false);
      });
  }, []);

  const totalGames = categories.reduce((sum, c) => sum + c.games.length, 0);

  return (
    <main className="games-main">
      <section className="games-played-section">
        <div className="games-played-container">
          <div className="games-played-header">
            <Link to="/games" className="back-link">← Back to Game Projects</Link>
            <h1>Games I've Played</h1>
            <p className="games-played-intro">
              A living list that updated whenever I finish something new.
              {!loading && !error && (
                <span className="games-played-count"> {totalGames} games and counting.</span>
              )}
            </p>
          </div>

          <div className="games-played-content">
            {loading && <p className="games-status">Loading...</p>}
            {error && <p className="games-status games-error">{error}</p>}
            {!loading && !error && (
              <div className="games-category-grid">
                {categories.map(cat => (
                  <div key={cat.name} className="games-category-card">
                    <h2 className="games-category-title">{cat.name}</h2>
                    <ul className="games-list">
                      {cat.games.map((game, i) => (
                        <li key={i} className="games-list-item">{game}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
