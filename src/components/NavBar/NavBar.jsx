import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <li className='nav-item'><a href="/">Accueil</a></li>
        <li className='nav-item'><a href="/about">À propos</a></li>

        <li className="nav-item dropdown">
          <a href="/services" className="dropdown-link">
            Produits
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>

          <ul className="dropdown-menu">
            <li><a href="#">Sacs PP tissés</a></li>
            <li><a href="#">Sacs laminés</a></li>
            <li><a href="#">Sacs imprimés</a></li>
            <li><a href="#">Big Bags</a></li>
            <li><a href="#">Sacs alimentaires</a></li>
            <li><a href="#">Sacs agricoles</a></li>
          </ul>
        </li>

        <li className='nav-item'><a href="/certifications">Certifications</a></li>
        <li className='nav-item'><a href="/contact">Contact</a></li>

      </ul>

      <div className='nav-contact-section'>
        <div className='phone-number'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2a9 9 0 0 1 9 9" />
            <path d="M13 6a5 5 0 0 1 5 5" />
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          (+216) 71559636
        </div>

        <div className='demander-un-devis-button'>
          Demander un devis <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </div>
      </div>

      <div className={`nav-drawer${menuOpen ? ' is-open' : ''}`} id="nav-drawer" aria-hidden={!menuOpen} />

    </div>
  );
};

export default NavBar;
