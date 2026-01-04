import { useEffect } from "react";
import { Link } from "react-router-dom";
import logisticsBg from '../assets/logistics-bg.jpg';
import marshallPhoto from '../assets/marshall-photo.jpg';
import fourBlocks from '../assets/four blocks.png';
import blueArrow from '../assets/blue arrow 1.png';
import './Home.css';

export default function Home() {
  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
  }, []);

  return (
    <main style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: "scroll",
      overflowX: "hidden",
      scrollSnapType: "y mandatory",
      scrollBehavior: "smooth",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      {/* Section 1 - About Me */}
      <section className="home-about-section" style={{
        width: "100%",
        minHeight: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 40px",
        boxSizing: "border-box",
        backgroundColor: "#faf9f7",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          maxWidth: "1400px",
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(250px, 400px) 1fr minmax(200px, 300px)",
          gap: "50px",
          alignItems: "stretch"
        }}>
          {/* Left: Personal photo */}
          <div className="home-image-left" style={{
            height: "100%",
            display: "flex"
          }}>
            <img 
              src={marshallPhoto} 
              alt="Marshall Ye"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
              }}
            />
          </div>

          {/* Center: Text content */}
          <div className="home-text-content" style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "center",
            height: "100%",
            minHeight: 0
          }}>
            {/* Greeting - soft, conversational aside */}
            <p style={{
              fontSize: "1.05em",
              fontWeight: 700,
              color: "#6b8fa3",
              margin: 0,
              marginBottom: "4px",
              lineHeight: 1.6,
              fontStyle: "italic"
            }}>
              Hello there! Thanks for stopping by. A guy called Marshall Ye spent half a month building this!
            </p>

            {/* Introduction */}
            <p style={{
              fontSize: "1.15em",
              color: "#3d3d3d",
              lineHeight: 1.75,
              margin: 0,
              fontWeight: 400
            }}>
              I'm <span style={{ color: "#d35f2d", fontWeight: 600 }}>Marshall Ye</span> — a Technical Product Manager working in logistics by day, and a builder of systems, tools, and games by habit.
            </p>

            {/* Professional section */}
            <p style={{
              fontSize: "1.05em",
              color: "#3d3d3d",
              lineHeight: 1.75,
              margin: 0,
              fontWeight: 400
            }}>
              Professionally, I work at <span style={{ color: "#c75a2a", fontWeight: 600 }}>Golden Arcus</span>, where I turn messy air, ocean, customs, and warehouse workflows into software and automation that actually help operators get work done. I hold a B.S. in Technology & Information Management from <span style={{ color: "#b8942a", fontWeight: 600 }}>UC Santa Cruz</span>, and my focus has always been the same: using technology to reduce friction, surface clarity, and scale operations without adding unnecessary complexity.
            </p>

            {/* Technology paragraph */}
            <p style={{
              fontSize: "1.05em",
              color: "#3d3d3d",
              lineHeight: 1.75,
              margin: 0,
              fontWeight: 400
            }}>
              Whether it's automation and robotics on the warehouse floor, or software and AI streamlining documentation, customs exams, and decision-making, industries don't fail because they're complicated — they fail because they adapt too slowly. That belief is what pushed me to build internal tools, WMS systems, and automation platforms that sit directly inside real operational pain points.
            </p>

            {/* Games section */}
            <p style={{
              fontSize: "1.05em",
              color: "#3d3d3d",
              lineHeight: 1.75,
              margin: 0,
              fontWeight: 400
            }}>
              Outside of logistics, I also build video games. While the domains look different on the surface, the mindset is the same: systems thinking, iteration, user experience, and making complex mechanics feel intuitive. Games are where I explore design, storytelling, and interaction — and logistics is where I apply those same instincts to real-world systems.
            </p>
          </div>

          {/* Right: Four blocks - professional/creative domains */}
          <div className="home-image-right" style={{
            height: "100%",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img 
              src={fourBlocks} 
              alt="Logistics, programming, and games"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: 0.85
              }}
            />
            {/* Handwritten labels with arrows */}
            <div className="four-blocks-labels">
              {/* Top-left: UCSC */}
              <div className="label-top-left">
                <span>This is where I studied</span>
                <img src={blueArrow} alt="" className="arrow arrow-tl" />
              </div>
              
              {/* Top-right: Python */}
              <div className="label-top-right">
                <span>My favorite language to build with</span>
                <img src={blueArrow} alt="" className="arrow arrow-tr" />
              </div>
              
              {/* Bottom-left: Logistics */}
              <div className="label-bottom-left">
                <span>The industry I work in by day</span>
                <img src={blueArrow} alt="" className="arrow arrow-bl" />
              </div>
              
              {/* Bottom-right: Games */}
              <div className="label-bottom-right">
                <span>What I build at night</span>
                <img src={blueArrow} alt="" className="arrow arrow-br" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="home-scroll-indicator" style={{
          position: "absolute",
          bottom: "48px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#4a4a4a"
        }}>
          <span style={{ 
            fontSize: "0.95em", 
            fontWeight: 400, 
            fontStyle: "italic",
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>Scroll to explore</span>
          <span style={{ fontSize: "1em" }}>↓</span>
        </div>
      </section>

      {/* Section 2 - Split Homepage (existing design) */}
      <section className="home-split-section" style={{
        width: "100vw",
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        margin: 0,
        padding: 0,
        position: "relative"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 0,
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0
        }}>
          {/* Left Section - Logistics */}
          <Link to="/logistics" style={{
            backgroundImage: `url(${logisticsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            textDecoration: "none",
            border: "none",
            position: "relative"
          }}>
            <span style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "12px 24px",
              borderRadius: 8,
              color: "#111",
              fontWeight: 700,
              fontSize: "1.2em",
              textTransform: "uppercase",
              letterSpacing: "2px"
            }}>LOGISTIC &<br/>AUTOMATION</span>
          </Link>

          {/* Middle Section - Name */}
          <div className="home-split-middle" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderLeft: "2px solid #000",
            borderRight: "2px solid #000",
            padding: "0 20px",
            writingMode: "vertical-rl",
            textOrientation: "mixed"
          }}>
            <h1 style={{
              margin: 0,
              fontSize: "2em",
              fontWeight: 700,
              color: "#000",
              letterSpacing: "4px",
              fontFamily: "system-ui",
              lineHeight: "1.2"
            }}>Marshall Ye's Portfolio</h1>
          </div>

          {/* Right Section - Video Games */}
          <Link to="/games" style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            textDecoration: "none",
            border: "none"
          }}>
            <span style={{
              color: "#111",
              fontWeight: 700,
              fontSize: "1.2em",
              textTransform: "uppercase",
              letterSpacing: "2px"
            }}>VIDEO GAMES</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  display:"block",padding:"18px",border:"1px solid #eaeaea",borderRadius:12,
  textDecoration:"none",color:"#111",fontWeight:700,textAlign:"center"
};
