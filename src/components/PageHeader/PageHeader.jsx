import './PageHeader.css';

const PageHeader = ({
  breadcrumb = [
    { label: 'Accueil', href: '/' },
    { label: 'Contact', href: null },
  ],
  eyebrow = 'COFISAC',
  title = 'Contactez-nous',
  description = 'Retrouvez nos coordonnées, notre localisation et les informations utiles pour nous joindre rapidement.',
  imageSrc = '/images/tissage.jpg',
  imageAlt = 'Atelier Cofisac',
  details = [],
}) => {
  return (
    <section className="page-header" aria-labelledby="page-header-title">
      <div className="page-header__inner">
        <div className="page-header__content">
          <nav className="page-header__breadcrumb" aria-label="Fil d’Ariane">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;

              return (
                <span className="page-header__breadcrumb-item" key={`${item.label}-${index}`}>
                  {item.href && !isLast ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
                  )}
                  {!isLast && <span className="page-header__breadcrumb-separator">{" >"}</span>}
                </span>
              );
            })}
          </nav>

          <p className="page-header__eyebrow">{eyebrow}</p>
          <h1 className="page-header__title" id="page-header-title">
            {title}
          </h1>
          <p className="page-header__description">{description}</p>

        
        </div>

      </div>
    </section>
  );
};

export default PageHeader;
