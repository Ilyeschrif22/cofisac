import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
            <div className="contact-layout">
                <div className="contact-copy">
                    <p className="contact-label">
                        <span className="number">06.</span>
                        <span className="text">RESTONS EN CONTACT</span>
                    </p>
                    <h2 className="contact-title" id="contact-title">
                        Contactez-nous et venez nous rendre visite !
                    </h2>
                    <p className="contact-description">
                        Envoyez-nous vos besoins, nous vous répondrons rapidement avec une solution adaptée à votre activité.
                    </p>
                    
                
                </div>

                <div className="contact-right">
                    <form className="contact-form">
                        <div className="contact-field-row">
                            <label className="contact-field">
                                <span>Nom complet</span>
                                <input type="text" name="name" placeholder="Votre nom" />
                            </label>
                            <label className="contact-field">
                                <span>Email</span>
                                <input type="email" name="email" placeholder="Votre email" />
                            </label>
                        </div>

                        <div className="contact-field-row">
                            <label className="contact-field">
                                <span>Société</span>
                                <input type="text" name="company" placeholder="Nom de votre société" />
                            </label>
                            <label className="contact-field">
                                <span>Téléphone</span>
                                <input type="tel" name="phone" placeholder="+216 ..." />
                            </label>
                        </div>

                        <label className="contact-field contact-field-full">
                            <span>Message</span>
                            <textarea name="message" rows="6" placeholder="Décrivez votre besoin, les quantités ou le type de sac recherché." />
                        </label>

                        <button type="submit" className="contact-submit">
                            Envoyer le message
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M7 7h10v10" />
                                <path d="M7 17 17 7" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            <aside className="contact-map-card" aria-label="Carte de localisation de Cofisac">
                <div className="contact-map-wrapper">
                    <iframe
                        title="Carte Cofisac"
                        src="https://www.google.com/maps?q=Cofisac%20Tunisie&z=15&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </aside>
        </section>
    );
};

export default Contact;
