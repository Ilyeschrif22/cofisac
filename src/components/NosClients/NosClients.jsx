import './NosClients.css';

const clients = [
  { name: 'Client partenaire', label: 'Logo client' },
  { name: 'Client partenaire', label: 'Logo client' },
  { name: 'Client partenaire', label: 'Logo client' },
  { name: 'Client partenaire', label: 'Logo client' },
  { name: 'Client partenaire', label: 'Logo client' },
  { name: 'Client partenaire', label: 'Logo client' },
];

const NosClients = () => {
  return (
    <section className="clients-section" aria-labelledby="clients-title">
      <div className="clients-header">
        <p className="clients-label">
          <span className="number">06.</span>
          <span className="text">Nos clients</span>
        </p>
        <h2 id="clients-title" className="clients-title">
          Ils nous font confiance.
        </h2>
        <p className="clients-description">
          Une sélection de logos clients à mettre en avant sur la page d’accueil pour montrer vos partenaires et références.
        </p>
      </div>

      <div className="clients-grid" aria-label="Logos des clients">
        {clients.map((client, index) => (
          <article className="client-card" key={`${client.name}-${index}`}>
            <div className="client-logo-mark" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="client-logo-name">{client.name}</p>
            <p className="client-logo-label">{client.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NosClients;
