import "./Ubicacion.css";

const Ubicacion = () => {
  return (
    <section className="ubicacion-wrapper">
      <div className="ubicacion-container">
        <div className="ubicacion-text">
          <h2 className="ubicacion-title">Encuéntranos en Funza</h2>
          <p className="ubicacion-description">
            Nuestra tienda se encuentra en una zona estratégica de Mosquera, cerca de los principales puntos de interés y con fácil acceso a transporte público.
          </p>
          <em>Cra. 12 #17-70, Funza, Cundinamarca</em>
        </div>
        <div className="ubicacion-map">
          <iframe
            title="Ubicación Bogotá"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14169.981447669246!2d-74.20494836956863!3d4.714937812053985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f83004d724327%3A0x5ed8172f845262bd!2sCasa%20de%20belleza%20A%26G!5e0!3m2!1ses!2sco!4v1746636195868!5m2!1ses!2sco" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;

