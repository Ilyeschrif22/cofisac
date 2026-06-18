import './Certification.css';

const Certification = () => {
    return (
        <div className='cetifications-section'>
            <div className='cetification-texts'>
                <p className="certifications-label">
                    <span className="number">04.</span>
                    <span className="text">CERTIFICATIONS</span>
                </p>
                <h2 className="certifications-title">
                    Des standards de qualité reconnus pour garantir des produits fiables.
                </h2>
            </div>


            <div className='iso-cetifications'>
                <div className="iso-cetification-image">
                    <img
                        src="https://cofisac.sn/wp-content/uploads/2026/02/ISO-9001.jpg"
                        alt="ISO 9001 Certification"
                    />
                </div>

                <div className='iso-certification-content'>
                </div>


            </div>

        </div>
    );
};

export default Certification;
