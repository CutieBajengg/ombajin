import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Jayrus Adante Ombajin</div>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg className="icon" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="nav-links desktop">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={`nav-links mobile ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Inline Style */}
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          background-color: #111;
          color: #fff;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
          font-family: 'Segoe UI', sans-serif;
        }

        .navbar-container {
          max-width: 1200px;
          margin: auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.6rem;
          font-weight: bold;
          color: #66ccff;
        }

        .menu-toggle {
          background: none;
          border: none;
          color: #ccc;
          display: none;
          cursor: pointer;
        }

        .icon {
          width: 28px;
          height: 28px;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: #ccc;
          font-size: 0.95rem;
          padding-bottom: 2px;
          border-bottom: 2px solid transparent;
          transition: color 0.3s, border-bottom 0.3s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #66ccff;
          border-bottom: 2px solid #66ccff;
        }

        .desktop {
          display: flex;
        }

        .mobile {
          display: none;
          flex-direction: column;
          padding: 0 1rem 1rem;
          background-color: #1a1a1a;
        }

        .mobile.open {
          display: flex;
        }

        @media screen and (max-width: 768px) {
          .desktop {
            display: none;
          }

          .menu-toggle {
            display: block;
          }
        }
      `}
      </style>
    </>
  );
}

export default Navbar;
