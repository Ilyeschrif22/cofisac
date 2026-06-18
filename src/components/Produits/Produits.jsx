import './Produits.css';

const products = [
    {
        title: 'Sacs PP tissés',
        description: 'Sacs utilisés pour le conditionnement industriel et agricole.',
        image: '/images/sac-pp.jpg',
    },
    {
        title: 'Sacs laminés',
        description: 'Idéal pour les produits nécessitant une protection supplémentaire.',
        image: '/images/sac-pp.jpg',
    },
    {
        title: 'Big Bags',
        description: 'Solutions pour le stockage et le transport de grandes quantités.',
        image: '/images/sac-pp.jpg',
    },
    {
        title: 'Sacs alimentaires',
        description: 'Conçus pour les produits alimentaires comme le blé, le sucre et la farine.',
        image: '/images/sac-pp.jpg',
    },
    {
        title: 'Sacs agricoles',
        description: 'Adaptés aux besoins agricoles et au stockage des récoltes.',
        image: '/images/sac-pp.jpg',
    },
    {
        title: 'Sacs personnalisés',
        description: 'Impression et dimensions adaptées selon vos besoins.',
        image: '/images/sac-pp.jpg',
    },
];

const Produits = () => {
    return (
        <section className="produits-section" aria-labelledby="nos-produits-title">
            <div className="produits-header">
                <p className="nos-produits-title" id="nos-produits-title">
                    <span className="number">02.</span>
                    <span className="text">Nos produits</span>
                </p>
                <h2 className="produits-heading">Une gamme pensée pour l’industrie,<br /> l’agriculture et l’alimentaire.</h2>
                <p className="produits-intro">
                    Des solutions robustes, personnalisables et adaptées aux besoins de conditionnement les plus exigeants.
                </p>
            </div>

            <div className="card-container">
                {products.map((product) => (
                    <article className="card" key={product.title}>
                        <div className="card-thumbnail">
                            <img src={product.image} alt={product.title} />
                        </div>

                        <div className="card-content">
                            <span className="card-category">Produit</span>
                            <h3 className="card-title">{product.title}</h3>
                            <p className="card-description">{product.description}</p>
                            <span className="card-read-more" role="link" tabIndex="0" aria-label={`Voir plus sur ${product.title}`}>
                                Voir plus
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                </svg>
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Produits;
