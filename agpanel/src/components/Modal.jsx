import React from "react";
import "./Modal.css";

const Modal = ({
  titulo,
  mensaje,
  children,
  onCancelar,
  onConfirmar,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">{titulo}</h2>
        {mensaje && <p className="modal-warning">{mensaje}</p>}

        <div className="modal-card">
          {children}
        </div>

        <div className="modal-actions">
          <button className="btn-cancelar" onClick={onCancelar}>
            {textoCancelar}
          </button>
          <button className="btn-eliminar" onClick={onConfirmar}>
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
