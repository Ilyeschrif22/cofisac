import './PourquoiNousChoisir.css';

const reasons = [
    {
        number: '01',
        title: 'Expertise éprouvée',
        description: 'Plus de 47 ans d’expérience dans la fabrication de sacs en polypropylène tissés.',
    },
    {
        number: '02',
        title: 'Solutions sur mesure',
        description: 'Formats, impression et finitions adaptés aux besoins industriels, agricoles et alimentaires.',
    },
    {
        number: '03',
        title: 'Qualité constante',
        description: 'Un contrôle rigoureux pour garantir des produits fiables, résistants et homogènes.',
    },
    {
        number: '04',
        title: 'Accompagnement client',
        description: 'Une équipe réactive pour vous conseiller et vous aider à choisir la meilleure solution.',
    },
];

const PourquoiNousChoisir = () => {
    return (
        <section className="why-us-section" aria-labelledby="why-us-title">
            <div className="why-us-header">
                <p className="why-us-label">
                    <span className="number">03.</span>
                    <span className="text">Pourquoi nous choisir ?</span>
                </p>
                <h2 id="why-us-title" className="why-us-title">
                    Un partenaire fiable pour des emballages solides et bien pensés.
                </h2>
                <p className="why-us-description">
                    COFISAC combine savoir-faire industriel, capacité d’adaptation et sens du service pour répondre aux exigences de vos projets.
                </p>
            </div>

            <div className="why-us-grid">
                {reasons.map((reason) => (
                    <article className="why-us-card" key={reason.number}>
                        <span className="why-us-number">{reason.number}</span>
                        <h3 className="why-us-card-title">{reason.title}</h3>
                        <p className="why-us-card-text">{reason.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PourquoiNousChoisir;
