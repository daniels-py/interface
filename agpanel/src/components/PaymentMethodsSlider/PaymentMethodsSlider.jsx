import React from 'react';
import './PaymentMethodsSlider.css';

import bancolombia from '../../assets/bancolombia.svg';
import daviplata from '../../assets/daviplata.svg';
import nequi from '../../assets/nequi-2.svg';
import mastercard from '../../assets/mastercard-4.svg';

const logos = [
  { src: bancolombia, alt: 'Bancolombia' },
  { src: daviplata, alt: 'Daviplata' },
  { src: nequi, alt: 'Nequi' },
  { src: mastercard, alt: 'Mastercard' },
];

export default function PaymentMethodsSlider() {
  // Duplicamos 3 veces para asegurar efecto infinito
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="slider-wrapper">
      <h2 className="slider-title">Contamos con métodos de Pago Seguros</h2>
      <div className="slider">
        <div className="slider-track">
          {repeatedLogos.map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
