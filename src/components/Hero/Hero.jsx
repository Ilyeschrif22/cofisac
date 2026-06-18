import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="cofisac-hero-text">COFISAC Tunisie</div>

                <div className="cofisac-hero-subtext">Leader dans la production de sacs en Polypropylène <br /> tissés avec des emballages sur mesure adapté à vos besoins.</div>
                <div className='en-savoir-plus-btn'>En savoir plus <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></div>
            </div>
        </section>
    );
};

export default Hero;