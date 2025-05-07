import Header from "../components/ Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Ubicacion from "../components/Ubicacion"; // Asegúrate que esté bien la ruta
import HeroBanner from "../components/HeroBanner";



import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroBanner /> {/* Banner dinámico y centrado */}

      <main className="home-main">

      </main>

      <Ubicacion /> {/* Sección justo arriba del footer */}
      <Footer />
    </div>
  );
};

export default Home;