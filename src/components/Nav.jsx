import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="site-nav">
      <Link to="/" className={`site-nav-link${pathname === '/' ? ' site-nav-link--active' : ''}`}>
        Home
      </Link>
      <span className="site-nav-divider">|</span>
      <Link to="/logistics" className={`site-nav-link${pathname === '/logistics' ? ' site-nav-link--active' : ''}`}>
        Logistics
      </Link>
      <span className="site-nav-divider">|</span>
      <Link to="/games" className={`site-nav-link${pathname.startsWith('/games') ? ' site-nav-link--active' : ''}`}>
        Games
      </Link>
    </nav>
  );
}
