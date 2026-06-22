import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar';
import '../../components/AboutUs/AboutUs.css';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="App">
      <NavBar />
      <section className="about-us-section about-page-hero" id="about">
        <div className="about-us-image-container about-page-image" />

        <div className="about-us-content">
          <p className="about-us-title">
            <span className="number">01.</span>
            <span className="text">Qui sommes nous</span>
          </p>

          <p className="about-us-sub-title">
            <span className="cofisac">COFISAC </span>
            est le leader du marché de l’emballage Polypropylène Tissé en Tunisie.
          </p>

          <p className="about-us-text">
            COFISAC est créée en 1979 par Mr MOHAMED EL EUCH. À l’époque, la matière première utilisée était une fibre naturelle, le jute brut, transformée en filasses, fils, toiles et sacs.
            <br />
            <br />
            En 2002, l’entreprise a développé sa gamme de produits en introduisant les sacs tissés laminés soudés en polypropylène pour l’emballage du ciment, du plâtre, des produits chimiques et alimentaires.
            <br />
            <br />
            Le succès de COFISAC repose sur une offre de produits de qualité, fruit des dernières technologies en matière d’extrusion, de tissage, de confection et d’impression.
          </p>

          <ul className="about-us-list">
            <li className="about-us-list-item">
              <div className="about-us-list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              À la confection de sacs sur mesure,
            </li>
            <li className="about-us-list-item">
              <div className="about-us-list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              À la disponibilité du stock,
            </li>
            <li className="about-us-list-item">
              <div className="about-us-list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              À la personnalisation de l’impression,
            </li>
            <li className="about-us-list-item">
              <div className="about-us-list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              Au professionnalisme de ses équipes,
            </li>
            <li className="about-us-list-item">
              <div className="about-us-list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              À ses valeurs: professionnalisme, ownership, intégrité, respect et efficacité.
            </li>
          </ul>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
