import './Certification.css';

const Certification = () => {
    return (
        <div className='cetifications-section'>
            <div className="certifications-inner">
                <div className="certification-texts">
                    <p className="certifications-label">
                        <span className="number">04.</span>
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
                            COFISAC a procédé en 2018 à la transition de la Certification ISO 9001 version 2018 pour la version 2015, et à travers sa politique de qualité, elle s’est engagée à oeuvrer pour la satisfaction du client et le respect des exigences légales et réglementaires.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification;
