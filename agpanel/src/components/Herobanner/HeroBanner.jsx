import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Bienvenido a Nuestra Página</h1>
        <p>Explora nuestros productos y descubre lo mejor en belleza y cuidado personal.</p>
        <a href="#productos" className="hero-button">Saber Más</a>
      </div>
    </section>
  );
};

export default HeroBanner;
