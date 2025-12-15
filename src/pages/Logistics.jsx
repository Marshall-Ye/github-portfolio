import './Logistics.css';

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
      {/* Section 01 */}
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
            <div className="logistics-section-number" style={{
              fontSize: "120px",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1,
              letterSpacing: "-4px",
              fontFamily: "system-ui"
            }}>01</div>
            <h2 className="logistics-section-title" style={{
              fontSize: "3.5em",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-1px"
            }}>Section Title</h2>
            <p className="logistics-section-subtitle" style={{
              fontSize: "1.3em",
              color: "#aaa",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "600px"
            }}>Section subtitle or brief description goes here. This provides context for the content.</p>
          </div>
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
  