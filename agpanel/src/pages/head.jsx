import React, { useState, useRef, useEffect } from 'react';
import './head.css';
import { BiMenu, BiUser, BiCog, BiBookmark, BiLogOut } from 'react-icons/bi';
import { fetchUserProfile } from '../api/userApi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState(null); // Nuevo estado para el perfil
  const profileRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(e.target) &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // Cargar el perfil del usuario
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setProfile(data);
      } catch (err) {
        console.error('Error al cargar el perfil:', err.message);
      }
    };

    loadProfile();
  }, []);

  return (
    <header className="header" id="header">
      <div className="header__toggle">
        <BiMenu id="header-toggle" />
      </div>

      <div
        className={`header__img ${menuOpen ? 'active' : ''}`}
        id="profileButton"
        ref={profileRef}
        onClick={toggleMenu}
      >
        <div className="profile-container">
          <div className="n">D</div>
          <div
            className={`dropdown-menu ${menuOpen ? 'active' : ''}`}
            id="dropdownMenu"
            ref={menuRef}
          >
            <div className="profile-email">
              <p className="email-text">{profile ? profile.email : ''}</p>
            </div>
            <a href="#" className="dropdown-item">
              <BiUser className="nav__icon" /> Mi perfil
            </a>
            <a href="#" className="dropdown-item">
              <BiCog /> Configuración
            </a>
            <a href="#" className="dropdown-item">
              <BiBookmark className="nav__icon" /> Planes
            </a>
            <a href="#" className="dropdown-item">
              <BiLogOut className="nav__icon" /> Cerrar sesión
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
