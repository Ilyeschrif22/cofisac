import './PourquoiNousChoisir.css';

const reasons = [
    {
        icon: 'shield',
        title: 'Expertise éprouvée',
        description: 'Plus de 47 ans d’expérience dans la fabrication de sacs en polypropylène tissés.',
    },
    {
        icon: 'sliders',
        title: 'Solutions sur mesure',
        description: 'Formats, impression et finitions adaptés aux besoins industriels, agricoles et alimentaires.',
    },
    {
        icon: 'check',
        title: 'Qualité constante',
        description: 'Un contrôle rigoureux pour garantir des produits fiables, résistants et homogènes.',
    },
    {
        icon: 'support',
        title: 'Accompagnement client',
        description: 'Une équipe réactive pour vous conseiller et vous aider à choisir la meilleure solution.',
    },
];

const iconPaths = {
    shield: (
        <>
            <path d="M12 3l7 3v5c0 4.7-2.9 8.9-7 10-4.1-1.1-7-5.3-7-10V6l7-3z" />
            <path d="M9.5 12.2l1.9 1.9 3.9-4" />
        </>
    ),
    sliders: (
        <>
            <path d="M4 6h7" />
            <path d="M4 12h11" />
            <path d="M4 18h14" />
            <circle cx="14" cy="6" r="2" />
            <circle cx="9" cy="12" r="2" />
            <circle cx="16" cy="18" r="2" />
        </>
    ),
    check: (
        <>
            <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3z" />
            <path d="M9.5 15.5L7.9 21l4.1-2.1L16.1 21l-1.6-5.5" />
        </>
    ),
    support: (
        <>
            <path d="M4 12a8 8 0 0 1 16 0" />
            <path d="M4 12v3a2 2 0 0 0 2 2h1v-5H4z" />
            <path d="M20 12v3a2 2 0 0 1-2 2h-1v-5h3z" />
            <path d="M12 19c0 1.7 1.3 3 3 3h1" />
        </>
    ),
};

const ReasonIcon = ({ name }) => (
    <svg
        className="why-us-icon"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        focusable="false"
    >
        {iconPaths[name]}
    </svg>
);

const PourquoiNousChoisir = () => {
    return (
        <section className="why-us-section" aria-labelledby="why-us-title">
            <div className="why-us-header">
                <p className="why-us-label">
                    <span className="number">04.</span>
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
                    <article className="why-us-card" key={reason.title}>
                        <ReasonIcon name={reason.icon} />
                        <h3 className="why-us-card-title">{reason.title}</h3>
                        <p className="why-us-card-text">{reason.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PourquoiNousChoisir;
