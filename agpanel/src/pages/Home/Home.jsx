import Header from "../../components/Header/ Header";
import Footer from "../../components/Footer/Footer";
import Ubicacion from "../../components/Ubicacion/Ubicacion"; // Asegúrate que esté bien la ruta
import HeroBanner from "../../components/Herobanner/HeroBanner";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton"; // Importa el botón
import PaymentMethodsSlider from "../../components/PaymentMethodsSlider/PaymentMethodsSlider";
import ProductContainer from "../../components/ProductContainer/ProductContainer"; // Asegúrate de que la ruta sea correcta




import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroBanner /> {/* Banner dinámico y centrado */}

      <main className="home-main">
      <ProductContainer />
      </main>
      <PaymentMethodsSlider /> {/* Carrusel de logos */}
      <Ubicacion /> {/* Sección justo arriba del footer */}
      <WhatsAppButton /> {/* Botón de WhatsApp */}
      <Footer />
    </div>
  );
};

export default Home;