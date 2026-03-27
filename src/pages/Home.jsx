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
              Hello there! Thanks for stopping by!<br />A guy called Marshall Ye spent a month building this :)
            </p>
            <p className="home-intro">
              I'm <span className="home-highlight-name">Marshall Ye</span> — a Technical Product Manager in logistics, building systems and tools by day, and games by night.
            </p>
            <p className="home-body-text">
              By day, I work in logistics, turning messy air, ocean, customs, and warehouse workflows into software and automation that actually help operators get work done. I hold a B.S. in Technology & Information Management from <span className="home-highlight-school">UC Santa Cruz</span>, and I focus on using technology to reduce friction, automate document processes, enable digital workflows, eliminate human error, and improve efficiency as operations scale.
            </p>
            <p className="home-body-text">
              That focus has pushed me to build internal tools, WMS systems, and automation platforms that live directly inside real operational pain points.
            </p>
            <p className="home-body-text">
              <span className="home-highlight-games">By night, I build video games.</span>
            </p>
            <p className="home-body-text">
              I've always been passionate about games — action, RPGs, MOBAs, you name it. I explore all parts of game development, but I'm especially drawn to <span className="home-highlight-combat">combat design</span>: Boss fights that feel challenging but also fair and fun. I regularly participate in game jams and work on my own projects. The Monster Hunter series is my all-time favorite, and it's the kind of complex, memorable combat experience I hope to create one day.
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
