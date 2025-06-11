import React, { useState } from 'react';
import './Modal.css';
import { actualizarMarca } from '../services/brandServices';

const ModalEditarMarca = ({ marca, onClose }) => {
  const [nombre, setNombre] = useState(marca.nombre);
  const token = localStorage.getItem("authToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await actualizarMarca(marca.id, nombre, token);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h2>Editar Marca</h2>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de la marca"
        />
        <div className="modal-actions">
          <button type="button" onClick={onClose}>Cancelar</button>
          <button type="submit" className="btn-guardar">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default ModalEditarMarca;
