import React, { useState } from 'react';
import './Crear.css';
import { crearMarca } from '../services/brandServices'; // Asegúrate de la ruta

const ModalCrearMarca = ({ onClose, onGuardar }) => {
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGuardar = async () => {
    if (nombre.trim() === '') return;
    setLoading(true);
    try {
      const respuesta = await crearMarca(nombre);
      if (respuesta.ok) {
        if (onGuardar) onGuardar({ nombre }); // Opcional: puedes pasar la marca creada
        onClose();
      } else {
        // Maneja el error aquí si lo deseas
        alert('Error al crear la marca');
      }
    } catch (error) {
      alert('Error de red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-crear">
        <div className="modal-header">
          <h2>Crear Marca</h2>
          <p className="subtitulo">Agrega una nueva marca al sistema</p>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <label htmlFor="nombre">Nombre de la marca</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Lehit"
            disabled={loading}
          />
        </div>
        <div className="modal-actions">
          <button className="btn-cancelar" onClick={onClose} disabled={loading}>Cancelar</button>
          <button className="btn-guardar" onClick={handleGuardar} disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCrearMarca;