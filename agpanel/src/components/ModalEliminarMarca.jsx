import React from 'react';
import './Modal.css';
import { eliminarMarca } from '../services/brandServices';

const ModalEliminarMarca = ({ marca, onClose }) => {
  const token = localStorage.getItem("authToken");

  const handleDelete = async () => {
    await eliminarMarca(marca.id, token);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Eliminar Marca</h2>
        <p>¿Estás seguro de eliminar <strong>{marca.nombre}</strong>?</p>
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button className="btn-eliminar" onClick={handleDelete}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalEliminarMarca;
