import { useState } from 'react';
import './NavBar.css';

const productLinks = [
  { label: 'Sacs en Polypropylène Tissé', href: '/#products' },
  { label: 'Sacs laminés', href: '/#products' },
  { label: 'Sacs imprimés', href: '/#products' },
  { label: 'Sacs alimentaires', href: '/#products' },
  { label: 'Sacs agricoles', href: '/#products' },
  { label: 'Sacs personnalisés', href: '/#products' },
];

const aboutLinks = [
  { label: 'Qui sommes nous', href: '/qui-sommes-nous' },
  { label: 'Notre processus', href: '/#process' },
  { label: 'Certifications', href: '/#certifications' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <div className='nav-menu'>
      <img src="/images/cofisac-logo.png" alt="Cofisac Logo" className="cofisac-logo" />

      <button
        type="button"
        className="nav-toggle"
        aria-label={menuOpen ? 'Fermer le panneau' : 'Ouvrir le panneau'}
        aria-expanded={menuOpen}
        aria-controls="nav-drawer"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className="nav-links" id="nav-links">
        <li className='nav-item'><a href="/" className="dropdown-link">Accueil</a></li>
        <li
          className='nav-item dropdown'
          onMouseEnter={() => setHoveredMenu('about')}
        >
          <p  className="dropdown-link">À propos</p>
        </li>
        <li
          className='nav-item dropdown'
          onMouseEnter={() => setHoveredMenu('products')}
        >
          <p className="dropdown-link">Produits</p>
        </li>

        <li className='nav-item'><a href="/contact" className="dropdown-link">Contact</a></li>

      </ul>

      {hoveredMenu && (
        <div
          className="mega-panel"
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {hoveredMenu === 'products' && (
            <div className="mega-grid">
              <ul className='produtcts-list'>
                {productLinks.map((item) => (
                  <li className='product-item' key={item.label}>
                    <a href={item.href} className="mega-link">
                      {item.label}
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hoveredMenu === 'about' && (
            <div className="mega-grid">
              <ul className='produtcts-list'>
                {aboutLinks.map((item) => (
                  <li className='product-item' key={item.label}>
                    <a href={item.href} className="mega-link">
                      {item.label}
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className='nav-contact-section'>
        <div className='phone-number'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2a9 9 0 0 1 9 9" />
            <path d="M13 6a5 5 0 0 1 5 5" />
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          (+216) 71559636
        </div>

        <a href="/contact" className='demander-un-devis-button'>
          Demander un devis
        </a>
      </div>

      <div className={`nav-drawer${menuOpen ? ' is-open' : ''}`} id="nav-drawer" aria-hidden={!menuOpen} />

    </div>
  );
};

export default NavBar;
