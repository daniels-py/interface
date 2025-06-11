import React from 'react';
import './Modal.css';

const ModalVerMarca = ({ marca, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Detalles de la Marca</h2>
        <p><strong>Nombre:</strong> {marca.nombre}</p>
        <p><strong>Descripción:</strong> {marca.descripcion || 'Sin descripción'}</p>
        <p><strong>País:</strong> {marca.pais || 'Desconocido'}</p>
        <p><strong>Productos:</strong> {marca.cantidadProductos || 0}</p>
        <div className='modal-actions'>
          <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalVerMarca;
