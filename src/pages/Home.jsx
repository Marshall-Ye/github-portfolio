import { Link } from "react-router-dom";
import logisticsBg from '../assets/logistics-bg.jpg';

export default function Home() {
  return (
    <main style={{
      width:"100vw",
      margin:0,
      padding:0,
      fontFamily:"system-ui",
      position:"fixed",
      top:0,
      left:0,
      right:0,
      bottom:0,
      overflow:"hidden"
    }}>
      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr auto 1fr",
        gap:0,
        width:"100vw",
        height:"100vh",
        margin:0,
        padding:0
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
        <div style={{
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
    </main>
  );
}

const cardStyle = {
  display:"block",padding:"18px",border:"1px solid #eaeaea",borderRadius:12,
  textDecoration:"none",color:"#111",fontWeight:700,textAlign:"center"
};
