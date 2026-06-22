import './Contactinfo.css';

const Contactinfo = () => {
  return (
    <section className="contactinfo-section" aria-labelledby="contactinfo-title">
     

      <div className="contact-cards">

        <article className="contact-card">
          <div className="contact-card-icon">
            <svg viewBox="0 0 24 24">
              <path d="M13 2a9 9 0 0 1 9 9" />
              <path d="M13 6a5 5 0 0 1 5 5" />
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a1 1 0 0 0-.8 1.6l-.468.351a14 14 0 0 0 6.392 6.384" />
            </svg>
          </div>

          <p className="contact-card-title">Numéro téléphonique</p>

          <div className="contact-card-details">
            <p className="contact-details-line">
              <span className="contact-details-label">Téléphone : (+216) 71559636</span>
            </p>

            <p className="contact-details-line">
              <span className="contact-details-label">Fax : (+216) 71559320</span>
            </p>
          </div>
        </article>

        <article className="contact-card">
          <div className="contact-card-icon">
            <svg viewBox="0 0 24 24">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>

          <p className="contact-card-title">Email</p>

          <div className="contact-card-details">
            <p className="contact-details-line">
              <span className="contact-details-label">Adresse e-mail :</span>
              <a href="mailto:contact@cofisac.tn"> contact@cofisac.tn</a>
            </p>
          </div>
        </article>

        <article className="contact-card">
          <div className="contact-card-icon">
            <svg viewBox="0 0 24 24">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

          <p className="contact-card-title">Adresse</p>

          <div className="contact-card-details">
            <p className="contact-details-line">
              <span className="contact-details-label">Localisation :</span>
              <span> Tunis, Tunisie</span>
            </p>
          </div>
        </article>

        <article className="contact-card">
          <div className="contact-card-icon">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="16" rx="3" />
              <path d="M8 3v4" />
              <path d="M16 3v4" />
              <path d="M3 9h18" />
            </svg>
          </div>

          <p className="contact-card-title">Jours ouvrables</p>

          <div className="contact-card-details">
            <p className="contact-details-line">
              <span className="contact-details-label">Lun au Vend - 08:00 à 17:30</span>
              <span className="contact-details-label">et Samedi</span>
              <span className="contact-details-label">08:00 à 14:00</span>
            </p>

        
          </div>
        </article>

      </div>
    </section>
  );
};

export default Contactinfo;