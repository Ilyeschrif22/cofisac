import AboutUs from '../../components/AboutUs';
import Certification from '../../components/Certifications/Certification';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';
import ProcessusFabrication from '../../components/ProcessusFabrication';
import PourquoiNousChoisir from '../../components/PourquoiNousChoisir';
import Produits from '../../components/Produits';

const HomePage = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutUs />
      <Produits />
      <ProcessusFabrication />
      <PourquoiNousChoisir />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
