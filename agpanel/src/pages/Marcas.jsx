import React, { useEffect, useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import CrearMarca from "../components/crear";
import ListaMarcas from "../components/listar";
import { obtenerMarcas } from "../services/brandServices";
import "./Marcas.css"; // Asegúrate de que los estilos estén aquí

const Marcas = () => {
  const [marcas, setMarcas] = useState([]);
  const token = localStorage.getItem("authToken");

  const cargarMarcas = async () => {
    try {
      const data = await obtenerMarcas(token);
      setMarcas(data);
    } catch (error) {
      alert("Error al cargar marcas");
    }
  };

  useEffect(() => {
    cargarMarcas();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Marcas</h2>
      <p>¡Bienvenido al panel de marcas!</p>

      {/* Botón de crear marca arriba de la cuadrícula */}
      <div className="crear-marca-wrapper">
        <CrearMarca onMarcaCreada={cargarMarcas} />
      </div>

      <div className="contenedor-marcas">
        <ListaMarcas marcas={marcas} />
      </div>

      <Sidebar />
    </div>
  );
};

export default Marcas;
