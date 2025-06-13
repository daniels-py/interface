import React, { useState } from "react";
import { crearMarca } from "../services/brandServices";
import "./crear.css"; // Asegúrate de importar el archivo con los estilos
import "./modal.css"; // Asegúrate de importar los estilos del modal
const CrearMarca = ({ onMarcaCreada }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nombreMarca, setNombreMarca] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCrear = async () => {
    if (!nombreMarca.trim()) return;

    setLoading(true);
    try {
      const respuesta = await crearMarca(nombreMarca);
      if (respuesta.ok) {
        const nuevaMarca = await respuesta.json();
        if (onMarcaCreada) onMarcaCreada(nuevaMarca);
        setMostrarModal(false);
        setNombreMarca("");
      } else {
        alert("Error al crear la marca");
      }
    } catch (error) {
      alert("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="btn-nueva-marca" onClick={() => setMostrarModal(true)}>
        + Nueva Marca
      </button>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-content modal-crear">
            <div className="modal-header">
              <h2>Crear Marca</h2>
              <p className="subtitulo">En el siguiente campo podras ingresar el nombre de la marca</p>
              <button className="modal-close" onClick={() => setMostrarModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                id="nombre"
                value={nombreMarca}
                onChange={(e) => setNombreMarca(e.target.value)}
                placeholder="Ej: Lehit"
                disabled={loading}
              />
            </div>
            <div className="modal-actions">
              <button className="btn-cancelar" onClick={() => setMostrarModal(false)} disabled={loading}>
                Cancelar
              </button>
              <button className="btn-guardar" onClick={handleCrear} disabled={loading}>
                {loading ? "Guardando..." : "Guardar Cambios"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CrearMarca;
