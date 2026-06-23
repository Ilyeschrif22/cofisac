import { useEffect, useState } from 'react';
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

  const navigateTo = (href) => {
    if (typeof window === 'undefined') {
      return;
    }

    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setMenuOpen(false);
    setHoveredMenu(null);
  };

  const handleLinkKeyDown = (event, href) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigateTo(href);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;

    if (menuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = previousOverflow;
    }

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

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
        <li className='nav-item'>
          <p
            className="nav-link"
            role="button"
            tabIndex="0"
            onClick={() => navigateTo('/')}
            onKeyDown={(event) => handleLinkKeyDown(event, '/')}
          >
            Accueil
          </p>
        </li>
        <li
          className='nav-item dropdown'
          onMouseEnter={() => setHoveredMenu('about')}
        >
          <p className="nav-link">À propos</p>
        </li>
        <li
          className='nav-item dropdown'
          onMouseEnter={() => setHoveredMenu('products')}
        >
          <p className="nav-link">Produits</p>
        </li>

        <li className='nav-item'>
          <p
            className="nav-link"
            role="button"
            tabIndex="0"
            onClick={() => navigateTo('/contact')}
            onKeyDown={(event) => handleLinkKeyDown(event, '/contact')}
          >
            Contact
          </p>
        </li>

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
                    <p
                      className="mega-link"
                      role="button"
                      tabIndex="0"
                      onClick={() => navigateTo(item.href)}
                      onKeyDown={(event) => handleLinkKeyDown(event, item.href)}
                    >
                      {item.label}
                    </p>
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
                    <p
                      className="mega-link"
                      role="button"
                      tabIndex="0"
                      onClick={() => navigateTo(item.href)}
                      onKeyDown={(event) => handleLinkKeyDown(event, item.href)}
                    >
                      {item.label}
                    </p>
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

        <p
          className='demander-un-devis-button'
          role="button"
          tabIndex="0"
          onClick={() => navigateTo('/contact')}
          onKeyDown={(event) => handleLinkKeyDown(event, '/contact')}
        >
          Demander un devis
        </p>
      </div>

      
      {menuOpen && <div className="drawer-overlay" onClick={toggleMenu} aria-hidden="true" />}

      <aside
        className={`nav-drawer${menuOpen ? ' is-open' : ''}`}
        id="nav-drawer"
        aria-hidden={!menuOpen}
      >
        <div className="drawer-header">
          <img src="/images/cofisac-logo.png" alt="Cofisac Logo" className="drawer-logo-image" />
          <button type="button" className="drawer-close" onClick={toggleMenu} aria-label="Fermer le menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="drawer-nav">
          <div className="drawer-link-item">
            <button
              type="button"
              className="drawer-link-button"
              onClick={() => navigateTo('/')}
            >
              <span className='drawer-span-item'>Accueil</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>

          <div className="drawer-link-item">
            <button
              type="button"
              className="drawer-link-button"
              onClick={() => navigateTo('/qui-sommes-nous')}
            >
              <span className='drawer-span-item'>À propos</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>

          <div className="drawer-link-item">
            <button
              type="button"
              className="drawer-link-button"
              onClick={() => navigateTo('/#products')}
            >
              <span className='drawer-span-item'>Nos produits</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>

          <div className="drawer-link-item">
            <button
              type="button"
              className="drawer-link-button"
              onClick={() => navigateTo('/contact')}
            >
              <span className='drawer-span-item'>Contact</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>


          <p className='drawer-email'>Email:<br /> info@cofisac.com</p>
          <p className='drawer-telephone'>Téléphone :<br /> (+216) 71559636 </p>
          <p className='drawer-fax'>Fax :<br/> (+216) 71559636

</p>

        </nav>
      </aside>

    </div>
  );
};

export default NavBar;
