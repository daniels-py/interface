import React from "react";
import { FaTag } from "react-icons/fa";
import "./MarcaCard.css"; // Asegúrate de que los estilos estén aquí

const ListaMarcas = ({ marcas }) => {
  return (
    <div>
      <h3>Marcas Registradas</h3>
      <div className="contenedor-marcas">
        {marcas.map((marca) => (
          <div className="card-marca" key={marca.id}>
            <div className="estado-activa">Activa</div>
            <div className="imagen-placeholder">
              <FaTag className="icon-placeholder" />
            </div>
            <h3 className="nombre-marca">{marca.nombre}</h3>
            {marca.descripcion && (
              <p className="descripcion-marca">{marca.descripcion}</p>
            )}
            {marca.pais && (
              <p className="pais">
                <strong>País:</strong> {marca.pais}
              </p>
            )}
            {marca.cantidadProductos !== undefined && (
              <p className="productos">
                <strong>Productos:</strong>{" "}
                <span className="cantidad">{marca.cantidadProductos}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaMarcas;
