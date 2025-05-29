import Header from "../../components/layouts/Header/ Header";
import Footer from "../../components/layouts/Footer/Footer";
import Ubicacion from "../../components/layouts/Ubicacion/Ubicacion"; // Asegúrate que esté bien la ruta
import HeroBanner from "../../components/home/Herobanner/HeroBanner";
import WhatsAppButton from "../../components/layouts/WhatsAppButton/WhatsAppButton"; // Importa el botón
import PaymentMethodsSlider from "../../components/layouts/PaymentMethodsSlider/PaymentMethodsSlider";
import ProductContainer from "../../components/home/ProductContainer/ProductContainer"; // Asegúrate de que la ruta sea correcta




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