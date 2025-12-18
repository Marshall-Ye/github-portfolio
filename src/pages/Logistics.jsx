import './Logistics.css';
import marshallPhoto from '../assets/about me.png';

export default function Logistics() {
  return (
    <main style={{
      width: "100vw",
      height: "100vh",
      overflowY: "scroll",
      scrollSnapType: "y mandatory",
      backgroundColor: "#0a0a0a",
      fontFamily: "system-ui, -apple-system, sans-serif",
      scrollBehavior: "smooth"
    }}>
      {/* Section 01 - Editorial Style */}
      <section className="logistics-section" style={{
        width: "100vw",
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 80px",
        boxSizing: "border-box",
        backgroundColor: "#faf9f7",
        position: "relative"
      }}>
        <div style={{
          maxWidth: "1300px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "0.35fr 0.65fr",
          gap: "60px",
          alignItems: "center"
        }}>
          {/* Left: Illustrated Image - kept exactly as-is */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img 
              src={marshallPhoto} 
              alt="Marshall Ye"
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                display: "block",
                borderRadius: "12px"
              }}
            />
          </div>

          {/* Right: Text - Story-driven narrative */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0"
          }}>
            {/* Large expressive headline */}
            <h2 style={{
              fontSize: "2.2em",
              color: "#1f1f1f",
              lineHeight: 1.3,
              margin: 0,
              marginBottom: "32px",
              fontWeight: 600,
              letterSpacing: "-0.5px",
              fontFamily: "Georgia, 'Times New Roman', serif"
            }}>
              Hello there! Thanks for clicking the button this guy called <span style={{ color: "#d35f2d" }}>Marshall Ye</span> spent an hour building.
            </h2>

            {/* Body copy - readable, warm */}
            <p style={{
              fontSize: "1.1em",
              color: "#3d3d3d",
              lineHeight: 1.9,
              margin: 0,
              marginBottom: "28px",
              fontWeight: 400
            }}>
              I'm a <span style={{ color: "#c75a2a", fontWeight: 600 }}>Technical Product Manager</span> working in logistics at Golden Arcus. I hold a B.S. in Technology & Information Management from <span style={{ color: "#b8942a", fontWeight: 600 }}>UC Santa Cruz</span>, and I spend most of my time turning messy air, ocean, customs, and warehouse workflows into systems and automation that actually help operators.
            </p>

            {/* Pull quote - elevated emphasis */}
            <blockquote style={{
              fontSize: "1.15em",
              color: "#d35f2d",
              lineHeight: 1.6,
              margin: "0 0 28px 0",
              padding: "16px 0 16px 24px",
              borderLeft: "3px solid #e8a87c",
              fontStyle: "italic",
              fontWeight: 500,
              background: "linear-gradient(90deg, rgba(232, 168, 124, 0.08) 0%, transparent 100%)"
            }}>
              "I believe technology is the main driving force behind the future of logistics."
            </blockquote>

            {/* Secondary paragraph - softer */}
            <p style={{
              fontSize: "1.05em",
              color: "#5a5a5a",
              lineHeight: 1.85,
              margin: 0,
              marginBottom: "24px",
              fontWeight: 400
            }}>
              Whether it's robotics and automation on the warehouse floor, or AI and software streamlining documentation and decision-making, progress comes from adopting better tools and using them well.
            </p>

          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
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
          }}>Scroll to see what I've built</span>
          <span style={{ fontSize: "1em" }}>↓</span>
        </div>
      </section>

      {/* Section 02 */}
      <section className="logistics-section" style={{
        width: "100vw",
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
        boxSizing: "border-box"
      }}>
        <div className="logistics-section-grid">
          {/* Left: Media */}
          <div style={{
            backgroundColor: "#1a1a1a",
            borderRadius: "24px",
            padding: "40px",
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #2a2a2a"
          }}>
            <div style={{
              color: "#666",
              fontSize: "1.1em",
              textAlign: "center"
            }}>Media Placeholder</div>
          </div>

          {/* Right: Text */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}>
            <div style={{
              fontSize: "120px",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1,
              letterSpacing: "-4px",
              fontFamily: "system-ui"
            }}>02</div>
            <h2 style={{
              fontSize: "3.5em",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-1px"
            }}>Section Title</h2>
            <p style={{
              fontSize: "1.3em",
              color: "#aaa",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "600px"
            }}>Section subtitle or brief description goes here. This provides context for the content.</p>
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section className="logistics-section" style={{
        width: "100vw",
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
        boxSizing: "border-box"
      }}>
        <div className="logistics-section-grid">
          {/* Left: Media */}
          <div style={{
            backgroundColor: "#1a1a1a",
            borderRadius: "24px",
            padding: "40px",
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #2a2a2a"
          }}>
            <div style={{
              color: "#666",
              fontSize: "1.1em",
              textAlign: "center"
            }}>Media Placeholder</div>
          </div>

          {/* Right: Text */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}>
            <div style={{
              fontSize: "120px",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1,
              letterSpacing: "-4px",
              fontFamily: "system-ui"
            }}>03</div>
            <h2 style={{
              fontSize: "3.5em",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-1px"
            }}>Section Title</h2>
            <p style={{
              fontSize: "1.3em",
              color: "#aaa",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "600px"
            }}>Section subtitle or brief description goes here. This provides context for the content.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
  