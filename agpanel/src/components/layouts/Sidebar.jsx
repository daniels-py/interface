import React, { useState } from "react";
import "./Sidebar.css";
import {
  BiMenu,
  BiCategory,
  BiPackage,
  BiCube,
  BiBarcode,
  BiClipboard,
  BiCart,
  BiMoney,
  BiLogOut,
  BiLayer,
  BiHome
} from "react-icons/bi";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleToggle = () => setShow(!show);
  const handleActive = (link) => setActiveLink(link);

  return (
    <>
      <header className={`header ${show ? "body-pd" : ""}`} id="header">
        <div className="header__toggle" onClick={handleToggle}>
          <BiMenu />
        </div>
        <div className="header__img">
          <img src="/assets/img/perfil.jpg" alt="profile" />
        </div>
      </header>

      <div className={`l-navbar ${show ? "show" : ""}`} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="nav__logo">
              <BiLayer className="nav__logo-icon" />
              <span className="nav__logo-name">Inventario</span>
            </a>

            <div className="nav__list">
              <a
                href="#"
                className={`nav__link ${activeLink === "dashboard" ? "active" : ""}`}
                onClick={() => handleActive("dashboard")}
              >
                <BiHome className="nav__icon" />
                <span className="nav__name">Dashboard</span>
              </a>

              <a
                href="#"
                className={`nav__link ${activeLink === "categorias" ? "active" : ""}`}
                onClick={() => handleActive("categorias")}
              >
                <BiCategory className="nav__icon" />
                <span className="nav__name">Categorías</span>
              </a>

              <a
                href="#"
                className={`nav__link ${activeLink === "marcas" ? "active" : ""}`}
                onClick={() => handleActive("marcas")}
              >
                <BiPackage className="nav__icon" />
                <span className="nav__name">Marcas</span>
              </a>

              <a
                href="#"
                className={`nav__link ${activeLink === "presentaciones" ? "active" : ""}`}
                onClick={() => handleActive("presentaciones")}
              >
                <BiCube className="nav__icon" />
                <span className="nav__name">Presentaciones</span>
              </a>

              <a
                href="#"
                className={`nav__link ${activeLink === "productos" ? "active" : ""}`}
                onClick={() => handleActive("productos")}
              >
                <BiBarcode className="nav__icon" />
                <span className="nav__name">Productos</span>
              </a>

              <a
                href="#"
                className={`nav__link ${activeLink === "inventario" ? "active" : ""}`}
                onClick={() => handleActive("inventario")}
              >
                <BiClipboard className="nav__icon" />
                <span className="nav__name">Inventario</span>
              </a>

              <a
                href="#"
                className={`nav__link ${activeLink === "compras" ? "active" : ""}`}
                onClick={() => handleActive("compras")}
              >
                <BiCart className="nav__icon" />
                <span className="nav__name">Compras</span>
              </a>

              <a
                href="#"
                className={`nav__link ${activeLink === "ventas" ? "active" : ""}`}
                onClick={() => handleActive("ventas")}
              >
                <BiMoney className="nav__icon" />
                <span className="nav__name">Ventas</span>
              </a>
            </div>
          </div>

          <a href="#" className="nav__link">
            <BiLogOut className="nav__icon" />
            <span className="nav__name">Cerrar sesión</span>
          </a>
        </nav>
      </div>

      <main>
        <h1>Contenido</h1>
      </main>
    </>
  );
}
