import React, { useState } from 'react';
import './MarcaCard.css';
import ModalVerMarca from './ModalVerMarca';
import ModalEditarMarca from './ModalEditarMarca';
import ModalEliminarMarca from './ModalEliminarMarca';
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

import { MdEdit, MdDeleteOutline } from "react-icons/md"; // <-- Agrega estos imports

const MarcaCard = ({ marca }) => {
  const [modal, setModal] = useState(null);

  return (
    <>
      <div className="card-marca">
        <div className="estado-activa">Activa</div>
        <div className="imagen-placeholder" />
        <h3 className="nombre-marca">{marca.nombre}</h3>
        <p className="descripcion-marca">{marca.descripcion}</p>
        <p className="pais"><strong>País:</strong> {marca.pais}</p>
        <p className="productos">
          <strong>Productos:</strong> <span className="cantidad">{marca.cantidadProductos}</span>
        </p>

      <div className="botones">
        <button className="btn-ver" onClick={() => setModal('ver')}>
          <IoEyeOutline /> Ver
        </button>
        <button className="btn-editar" onClick={() => setModal('editar')}>
          <MdEdit /> Editar
        </button>
        <button className="btn-eliminar" onClick={() => setModal('eliminar')}>
          <AiOutlineDelete />
        </button>
      </div>

      </div>

      {modal === 'ver' && <ModalVerMarca marca={marca} onClose={() => setModal(null)} />}
      {modal === 'editar' && <ModalEditarMarca marca={marca} onClose={() => setModal(null)} />}
      {modal === 'eliminar' && <ModalEliminarMarca marca={marca} onClose={() => setModal(null)} />}
    </>
  );
};

export default MarcaCard;