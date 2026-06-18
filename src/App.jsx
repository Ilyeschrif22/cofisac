import './App.css';
import AboutUs from './components/AboutUs';
import Certification from './components/Certifications/Certification';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ProcessusFabrication from './components/ProcessusFabrication';
import PourquoiNousChoisir from './components/PourquoiNousChoisir';
import Produits from './components/Produits';

function App() {
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
    </div>
  );
}

export default App;
