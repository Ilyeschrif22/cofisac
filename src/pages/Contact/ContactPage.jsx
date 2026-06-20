import Contact from '../../components/Contact';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar';
import PageHeader from '../../components/PageHeader';

const ContactPage = () => {
  return (
    <div className="App">
      <NavBar />
      <PageHeader
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Contact', href: null },
        ]}
        eyebrow="Restons en contact"
        title="Contact"
        description="Besoin d’un devis, d’informations techniques ou d’un accompagnement sur vos besoins en emballage ? Nous sommes là pour vous répondre rapidement."
        imageSrc="/images/qualite.webp"
        imageAlt="Contrôle qualité Cofisac"
        details={[
          { label: 'Téléphone', value: '(+216) 71 559 636', href: 'tel:+21671559636' },
          { label: 'Email', value: 'contact@cofisac.tn', href: 'mailto:contact@cofisac.tn' },
          { label: 'Localisation', value: 'Tunis, Tunisie' },
        ]}
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
