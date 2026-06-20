import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='about-us-section' id="about">
      <div className='about-us-image-container'>

      </div>

      <div className='about-us-content'>
        <p className='about-us-title'>
          <span className="number">01.</span>
          <span className="text">À propos</span>
        </p>        

        <p className='about-us-sub-title'>
          <span className='cofisac'>COFISAC </span>est une entreprise<br />spécialisée dans la production de sacs en Polypropylène tissés.
        </p>
          
        <p className='about-us-text'>
Avec une expertise de plus de 47 ans, vous bénéficiez du savoir-faire d’un leader de l’industrie de l’emballage en Tunisie.<br /><br />COFISAC met à votre disposition une large gamme de produits, notamment des sacs laminés, des sacs imprimés, des Big Bags, des sacs alimentaires et des sacs agricoles, tous conçus pour répondre à vos besoins spécifiques.        </p>

        <ul className='about-us-list'>
          <li className='about-us-list-item'> <div className='about-us-list-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></div>À la confection de sacs sur mesure,</li>
          <li className='about-us-list-item'> <div className='about-us-list-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></div>À la disponibilité du stock,</li>
          <li className='about-us-list-item'> <div className='about-us-list-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></div>À la personnalisation de l’impression,</li>
          <li className='about-us-list-item'> <div className='about-us-list-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></div>Au professionnalisme de ses équipes.</li>
        </ul>


        <div className='voir-plus-btn'>
          Voir plus <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </div>
       

      </div>

    </div>
  );
};

export default AboutUs;
