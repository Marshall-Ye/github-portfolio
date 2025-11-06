import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{maxWidth:900,margin:"40px auto",padding:"0 16px",fontFamily:"system-ui"}}>
      <h1>Marshall Ye — Portfolio</h1>
      <p>Choose a track:</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
        <Link to="/logistics" style={cardStyle}>Logistics & Automation</Link>
        <Link to="/games" style={cardStyle}>Video Game Projects</Link>
      </div>
    </main>
  );
}

const cardStyle = {
  display:"block",padding:"18px",border:"1px solid #eaeaea",borderRadius:12,
  textDecoration:"none",color:"#111",fontWeight:700,textAlign:"center"
};
