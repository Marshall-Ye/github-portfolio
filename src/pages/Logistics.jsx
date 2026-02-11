import './Logistics.css';
import brokerHelperImg from '../assets/broker helper 1.png';

export default function Logistics() {
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
      backgroundColor: "#0a0a0a",
      fontFamily: "system-ui, -apple-system, sans-serif",
      scrollBehavior: "smooth"
    }}>
      {/* Section 01 - WIP */}
      <section className="logistics-section" style={{
        width: "100%",
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
          textAlign: "center",
          maxWidth: "800px"
        }}>
          <h1 style={{
            fontSize: "3em",
            fontWeight: 700,
            color: "#3d3d3d",
            margin: 0,
            marginBottom: "24px",
            letterSpacing: "-1px"
          }}>
            Work In Progress
          </h1>
          <p style={{
            fontSize: "1.2em",
            color: "#5a5a5a",
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.6
          }}>
            This section is under construction. Check back soon!
          </p>
        </div>
      </section>

      {/* Section 02 */}
      <section className="logistics-section" style={{
        width: "100%",
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "80px 60px 80px 0px",
        boxSizing: "border-box",
        backgroundColor: "#faf9f7"
      }}>
        <div className="logistics-section-grid" style={{ alignItems: "flex-start", maxWidth: "1400px", marginLeft: "300px", gap: "120px" }}>
          {/* Left: Media */}
          <div style={{
            backgroundColor: "transparent",
            borderRadius: "40px",
            padding: "20px",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            overflow: "visible",
            marginLeft: "0"
          }}>
            <img 
              src={brokerHelperImg} 
              alt="Broker Helper" 
              style={{
                width: "100%",
                maxWidth: "none",
                height: "auto",
                objectFit: "contain",
                transform: "scale(1.5)",
                filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))",
                borderRadius: "32px"
              }}
            />
          </div>

          {/* Right: Text */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginLeft: "100px",
            zIndex: 10,
            position: "relative"
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
        width: "100%",
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
        boxSizing: "border-box",
        backgroundColor: "#faf9f7"
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
  