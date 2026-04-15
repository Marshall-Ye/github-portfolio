import { useEffect } from "react";
import { Link } from "react-router-dom";
import logisticsBg from '../assets/logistics-bg.jpg';
import marshallPhoto from '../assets/marshall-photo.jpg';
import fourBlocks from '../assets/four blocks.png';
import blueArrow from '../assets/blue arrow 1.png';
import cyberCityBg from '../assets/cyber city background.png';
import './Home.css';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
  }, []);

  return (
    <main className="home-main">
      {/* Section 1 - About Me */}
      <section className="home-about-section">
        <div className="home-about-grid">
          {/* Left: Personal photo */}
          <div className="home-image-left">
            <img src={marshallPhoto} alt="Marshall Ye" />
          </div>

          {/* Center: Text content */}
          <div className="home-text-content">
            <p className="home-greeting">
              Hello there! Thanks for stopping by.
            </p>
            <p className="home-intro">
              Hi, I'm <span className="home-highlight-name">Marshall Ye</span>.
            </p>
            <p className="home-body-text">
              I build things that make complex systems work better. At <span className="home-highlight-school">UC Santa Cruz</span> I studied Technology & Information Management, and since then I've split my focus between two fields that both demand the same skill: understanding how the pieces fit, and making them fit better.
            </p>
            <p className="home-body-text">
              Whether that's a <span className="home-highlight-logistics">logistics automation tool</span> that eliminates human error at scale, or a <span className="home-highlight-combat">boss fight</span> that feels brutal but fair — the design challenge is the same. I'm drawn to systems that reward careful thinking.
            </p>
          </div>

          {/* Right: Four blocks - professional/creative domains */}
          <div className="home-image-right">
            <img src={fourBlocks} alt="Logistics, programming, and games" />
            <div className="four-blocks-labels">
              <div className="label-top-left">
                <span>This is where I studied</span>
                <img src={blueArrow} alt="" className="arrow arrow-tl" />
              </div>
              <div className="label-top-right">
                <span>My favorite language to build with</span>
                <img src={blueArrow} alt="" className="arrow arrow-tr" />
              </div>
              <div className="label-bottom-left">
                <span>The industry I work in by day</span>
                <img src={blueArrow} alt="" className="arrow arrow-bl" />
              </div>
              <div className="label-bottom-right">
                <span>What I build at night</span>
                <img src={blueArrow} alt="" className="arrow arrow-br" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="home-scroll-indicator">
          <span className="home-scroll-text">Scroll to explore</span>
          <span>↓</span>
        </div>
      </section>

      {/* Section 2 - Split Homepage */}
      <section className="home-split-section">
        <div className="home-split-grid">
          {/* Left Section - Logistics */}
          <Link
            to="/logistics"
            className="home-split-link"
            style={{ backgroundImage: `url(${logisticsBg})` }}
          >
            <span className="home-split-label">LOGISTIC &<br />AUTOMATION</span>
          </Link>

          {/* Middle Section - Name */}
          <div className="home-split-middle">
            <h1>Marshall Ye's Portfolio</h1>
          </div>

          {/* Right Section - Video Games */}
          <Link
            to="/games"
            className="home-split-link"
            style={{ backgroundImage: `url(${cyberCityBg})` }}
          >
            <span className="home-split-label">VIDEO GAMES</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
