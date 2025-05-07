import "./Ubicacion.css";

const Ubicacion = () => {
  return (
    <section className="ubicacion-wrapper">
      <div className="ubicacion-container">
        <div className="ubicacion-text">
          <h2 className="ubicacion-title">Encuéntranos en Bogotá</h2>
          <p className="ubicacion-description">
            Nuestra tienda se encuentra en una zona exclusiva de la ciudad, donde el lujo y la elegancia se encuentran con la sofisticación de nuestras fragancias.
          </p>
          <em>Carrera 7 # 72 - 64, Bogotá D.C., Colombia</em>
        </div>
        <div className="ubicacion-map">
          <iframe
            title="Ubicación Bogotá"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8795316788987!2d-74.05834808467688!3d4.666896343054518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b3f40f5d4a1%3A0x5df4cc76fd650a03!2sAv.%20Chile%20(Calle%2072)!5e0!3m2!1ses!2sco!4v1683072200410!5m2!1ses!2sco"
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
