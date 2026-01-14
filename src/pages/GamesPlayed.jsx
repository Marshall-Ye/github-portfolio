import { Link } from 'react-router-dom';
import './Games.css';

export default function GamesPlayed() {
  return (
    <main className="games-main">
      <section className="games-played-section">
        <div className="games-played-container">
          <div className="games-played-header">
            <Link to="/games" className="back-link">← Back to Game Projects</Link>
            <h1>Games I've Played</h1>
            <p className="games-played-intro">
              A curated collection of games I've played and analyzed. This section highlights 
              notable games that have influenced my design thinking and gameplay understanding.
            </p>
          </div>
          
          <div className="games-played-content">
            <p>Content coming soon...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
