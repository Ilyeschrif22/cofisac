import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">

      <div className="cofisac-footer-content">
        <img src='/images/cofisac-logo.png' className='footer-logo' alt="Cofisac Logo" />
        <p className='cofisac-footer-description'>
          COFISAC (Compagnie de Filature et de Sacherie) est une unité industrielle sénégalaise spécialisée dans la fabrication de sacs en polypropylène tissé pour le conditionnement de produits agro-industriels. Forte de près de 47 ans d'expérience, elle accompagne les acteurs agricoles et industriels avec des solutions d'emballage de qualité.
        </p>
      </div>

      <div className='cofisac-footer-navigation-container'>
        <div className='footer-nav-col'>
          <h4 className='footer-col-title'>Liens rapide</h4>
          <ul className='footer-nav-list'>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className='footer-nav-col'>
          <h4 className='footer-col-title'>Produits</h4>
          <ul className='footer-nav-list'>
            <li><a href="#">Sacs en Polypropylène Tissé</a></li>
            <li><a href="#">Sacs laminés</a></li>
            <li><a href="#">Sacs imprimés</a></li>
            <li><a href="#">Sacs alimentaires</a></li>
            <li><a href="#">Sacs agricoles</a></li>
          </ul>
        </div>

        <div className='footer-nav-col'>
          <h4 className='footer-col-title'>Contact</h4>
          <ul className='footer-contact-list'>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2a9 9 0 0 1 9 9" />
                <path d="M13 6a5 5 0 0 1 5 5" />
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              (+216) 71 559 636
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              contact@cofisac.tn
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Tunis, Tunisie
            </li>
          </ul>
          <a href="/contact" className='footer-devis-btn'>
            Demander un devis
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
            </svg>
          </a>
        </div>

    
      </div>

          <div className="footer-bottom">
      <p>© {new Date().getFullYear()} COFISAC. Tous droits réservés.</p>
    </div>

    </div>
  );
};

export default Footer;