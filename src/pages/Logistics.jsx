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
        <div style={{
          maxWidth: "1400px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "0.4fr 0.6fr",
          gap: "80px",
          alignItems: "center"
        }}>
          {/* Left: Ambient Media */}
          <div style={{
            backgroundColor: "#151515",
            borderRadius: "20px",
            padding: 0,
            aspectRatio: "4/5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #1f1f1f",
            opacity: 0.6
          }}>
          </div>

          {/* Right: Text */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px"
          }}>
            <div className="logistics-section-number" style={{
              fontSize: "100px",
              fontWeight: 700,
              color: "#151515",
              lineHeight: 1,
              letterSpacing: "-3px",
              fontFamily: "system-ui",
              marginBottom: "-10px"
            }}>01</div>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px"
            }}>
              {/* Prominent Intro Line */}
              <p style={{
                fontSize: "1.8em",
                color: "#fff",
                lineHeight: 1.4,
                margin: 0,
                fontWeight: 400,
                letterSpacing: "-0.3px"
              }}>
                Hello there! Thanks for actually clicking the button this guy called Marshall Ye probably spent an hour building.
              </p>

              {/* Normal Body Paragraph */}
              <p style={{
                fontSize: "1.15em",
                color: "#d0d0d0",
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 300
              }}>
                I'm a Technical Product Manager working in logistics at Golden Arcus. I hold a B.S. in Technology & Information Management from UC Santa Cruz, and I spend most of my time turning messy air, ocean, customs, and warehouse workflows into systems and automation that actually help operators.
              </p>

              {/* Softer Philosophy Paragraph */}
              <p style={{
                fontSize: "1.1em",
                color: "#999",
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 300
              }}>
                I believe technology is the main driving force behind the future of logistics. Whether it's robotics and automation on the warehouse floor, or AI and software streamlining documentation and decision-making, progress comes from adopting better tools and using them well. I'm especially passionate about building practical automation that helps teams adapt faster, work smarter, and scale without unnecessary complexity.
              </p>

              {/* Closing Note */}
              <p style={{
                fontSize: "1em",
                color: "#777",
                lineHeight: 1.6,
                margin: 0,
                fontStyle: "italic",
                fontWeight: 300,
                marginTop: "8px"
              }}>
                And if you're curious about the other side of me—yes, I also build video games. You can find that part of my work in the Video Games section.
              </p>
            </div>
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
  