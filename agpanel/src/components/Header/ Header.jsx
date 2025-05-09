import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="logo">A&G</div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/about" className="nav-link">Productos</Link>
        <Link to="/services" className="nav-link">Servicios</Link>
        <Link to="/contact" className="nav-link">Contacto</Link>
      </nav>

      <div className="actions">
        <Link to="/login" className="login-button">Acceder</Link>
        <div className="menu-toggle" onClick={toggleMenu}>☰</div>
      </div>
    </header>
  );
};

export default Header;
