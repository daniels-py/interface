import React, { useEffect, useState } from 'react';
import { obtenerMarcas } from '../services/brandServices';
import MarcaCard from '../components/MarcaCard';
import ModalVerMarca from '../components/ModalVerMarca';
import ModalEditarMarca from '../components/ModalEditarMarca';
import ModalEliminarMarca from '../components/ModalEliminarMarca';
import './Marcas.css'; // Asegúrate de tener un archivo CSS para estilos

const Marcas = () => {
  const [marcas, setMarcas] = useState([]);
  const [modalActual, setModalActual] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  // 👇 Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const marcasPorPagina = 6;

  const indexUltimaMarca = paginaActual * marcasPorPagina;
  const indexPrimeraMarca = indexUltimaMarca - marcasPorPagina;
  const marcasActuales = marcas.slice(indexPrimeraMarca, indexUltimaMarca);

  const totalPaginas = Math.ceil(marcas.length / marcasPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
  };

  useEffect(() => {
    const cargarMarcas = async () => {
      const token = localStorage.getItem('authToken');
      const data = await obtenerMarcas(token);
      setMarcas(data);
    };
    cargarMarcas();
  }, []);

  const abrirModal = (tipo, marca) => {
    setMarcaSeleccionada(marca);
    setModalActual(tipo);
  };

  const cerrarModal = () => {
    setModalActual(null);
    setMarcaSeleccionada(null);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Marcas</h2>
      <p>¡Bienvenido al panel de marcas!</p>

      <div className="contenedor-marcas">
        {marcasActuales.map((marca) => (
          <MarcaCard
            key={marca.id}
            marca={marca}
            onVer={() => abrirModal('ver', marca)}
            onEditar={() => abrirModal('editar', marca)}
            onEliminar={() => abrirModal('eliminar', marca)}
          />
        ))}
      </div>

      {/* PAGINADOR */}
      {totalPaginas > 1 && (
        <div className="paginador">
          {[...Array(totalPaginas).keys()].map((n) => (
            <button
              key={n + 1}
              onClick={() => cambiarPagina(n + 1)}
              className={paginaActual === n + 1 ? 'activo' : ''}
            >
              {n + 1}
            </button>
          ))}
        </div>
      )}

      {/* MODALES */}
      {modalActual === 'ver' && (
        <ModalVerMarca marca={marcaSeleccionada} onClose={cerrarModal} />
      )}
      {modalActual === 'editar' && (
        <ModalEditarMarca marca={marcaSeleccionada} onClose={cerrarModal} />
      )}
      {modalActual === 'eliminar' && (
        <ModalEliminarMarca marca={marcaSeleccionada} onClose={cerrarModal} />
      )}
    </div>
  );
};

export default Marcas;
