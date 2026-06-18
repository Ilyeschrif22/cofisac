import './ProcessusFabrication.css';

const steps = [
    {
        icon: 'extrusion',
        title: 'Extrusion',
        description: 'Le polypropylène est fondu puis transformé en film ou en rubans selon le type de sac à produire.',
        image: '/images/extrusion.webp',
    },
    {
        icon: 'weaving',
        title: 'Tissage',
        description: 'Les rubans sont tissés pour créer une base solide, résistante et adaptée aux usages industriels.',
        image: '/images/tissage.jpg',
    },
    {
        icon: 'printing',
        title: 'Impression',
        description: 'Les sacs reçoivent les visuels, logos et informations demandés par le client.',
        image: '/images/impression.jpg',
    },
    {
        icon: 'lamination',
        title: 'Laminage',
        description: 'Une couche protectrice est appliquée pour améliorer la finition et la résistance.',
        image: '/images/laminage.jpg',
    },
    {
        icon: 'cutting',
        title: 'Découpe',
        description: 'Les rouleaux sont découpés aux dimensions prévues pour chaque format de sac.',
        image: '/images/decoupage.webp',
    },
    {
        icon: 'sewing',
        title: 'Couture',
        description: 'Les éléments sont assemblés avec précision pour garantir une bonne tenue dans le temps.',
        image: '/images/couture.jpg',
    },
    {
        icon: 'quality',
        title: 'Contrôle qualité',
        description: 'Chaque lot est vérifié afin d’assurer la conformité, la régularité et la fiabilité du produit final.',
        image: '/images/qualite.webp',
    },
];

const iconPaths = {
    extrusion: (
        <>
            <path d="M5 12h14" />
            <path d="M7 8h3v8H7z" />
            <path d="M15 7l4 5-4 5" />
        </>
    ),
    weaving: (
        <>
            <path d="M6 6l12 12" />
            <path d="M10 6l8 8" />
            <path d="M6 10l8 8" />
            <path d="M6 14l4 4" />
        </>
    ),
    printing: (
        <>
            <path d="M7 8h10v6H7z" />
            <path d="M9 4h6v4H9z" />
            <path d="M9 14v6h6v-6" />
            <path d="M9 18h6" />
        </>
    ),
    lamination: (
        <>
            <path d="M5 17l7-12 7 12H5z" />
            <path d="M9 13h6" />
        </>
    ),
    cutting: (
        <>
            <path d="M6 6l12 12" />
            <path d="M6 18L18 6" />
            <circle cx="6" cy="6" r="1.5" />
            <circle cx="18" cy="18" r="1.5" />
        </>
    ),
    sewing: (
        <>
            <path d="M8 4v16" />
            <path d="M12 4v16" />
            <path d="M16 4v16" />
            <path d="M6 8h12" />
            <path d="M6 16h12" />
        </>
    ),
    quality: (
        <>
            <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3z" />
            <path d="M9.5 15.5L7.9 21l4.1-2.1L16.1 21l-1.6-5.5" />
        </>
    ),
};

const StepIcon = ({ name }) => (
    <svg className="process-step-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {iconPaths[name]}
    </svg>
);

const ProcessusFabrication = () => {
    return (
        <section className="process-section" aria-labelledby="process-title">
            <div className="process-header">
                <p className="process-label">
                    <span className="number">03.</span>
                    <span className="text">Processus de fabrication</span>
                </p>
                <h2 id="process-title" className="process-title">
                    Très utile pour l’industrie.
                </h2>
                <p className="process-description">
                    Un enchaînement clair d’étapes pour transformer la matière première en sacs fiables, réguliers et adaptés aux besoins du client.
                </p>
            </div>

            <div className="process-grid">
                {steps.map((step, index) => (
                    <article
                        className={`process-card ${step.image ? 'process-card--featured' : ''}`}
                        key={step.title}
                        style={step.image ? { backgroundImage: `linear-gradient(180deg, rgba(17, 17, 17, 0.18), rgba(17, 17, 17, 0.62)), url(${step.image})` } : undefined}
                    >
                        <div className="process-card-top">
                            <StepIcon name={step.icon} />
                            <span className="process-step-number">0{index + 1}</span>
                        </div>
                        <h3 className="process-card-title">{step.title}</h3>
                        <p className="process-card-text">{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProcessusFabrication;
