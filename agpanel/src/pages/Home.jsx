import Header from "../components/ Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Ubicacion from "../components/Ubicacion"; // Asegúrate que esté bien la ruta




import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <main className="home-main">
        <h2 className="welcome-title">Bienvenido a nuestra distribuidora de belleza</h2>

        <section className="grid-section">
          <Card title="Producto 1" description="Descripción del producto 1" />
          <Card title="Producto 2" description="Descripción del producto 2" />
          <Card title="Producto 3" description="Descripción del producto 3" />
          <Card title="Producto 4" description="Descripción del producto 4" />
        </section>
      </main>
      <Ubicacion /> {/* Sección justo arriba del footer */}
      <Footer />
    </div>
  );
};

export default Home;