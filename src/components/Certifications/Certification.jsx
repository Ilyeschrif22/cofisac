import './Certification.css';

const Certification = () => {
    return (
        <div className='cetifications-section'>
            <div className="certifications-inner">
                <div className="certification-texts">
                    <p className="certifications-label">
                        <span className="number">05.</span>
                        <span className="text">CERTIFICATIONS</span>
                    </p>
                    <h2 className="certifications-title">
                        Des standards de qualité reconnus pour garantir des produits fiables.
                    </h2>
                    <p className="certifications-summary">
                        COFISAC s'engage dans une démarche continue d'amélioration et de conformité pour offrir des produits maîtrisés et durables.
                    </p>
                </div>

                <div className='iso-cetifications'>
                    <div className="iso-cetification-image">
                        <img
                            src="https://cofisac.sn/wp-content/uploads/2026/02/ISO-9001.jpg"
                            alt="ISO 9001 Certification"
                        />
                    </div>

                    <div className='iso-certification-content-card'>
                        <p className="iso-card-kicker">Engagement</p>
                        <h3 className="iso-card-title">Qualité</h3>
                        <p className="iso-card-text">
                            COFISAC est certifiée SGS ISO 9001 version 2015 pour la transformation et la vente de sacs en polypropylène tissé.
                        </p>
                        <p className="iso-card-text">
                            Cette certification confirme notre engagement pour la qualité, l’organisation et la satisfaction client.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification;
