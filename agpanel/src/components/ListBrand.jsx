import React, { useEffect, useState } from "react";
import { getBrands, deleteBrand, updateBrand } from "../services/brandServices";
import Modal from "./Modal"; // Ahora es modal genérico

function ListaMarcas() {
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalEliminar, setModalEliminar] = useState({ visible: false, marca: null });
  const [modalActualizar, setModalActualizar] = useState({ visible: false, marca: null, nuevoNombre: "" });

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    getBrands(token).then((data) => {
      setMarcas(data);
      setLoading(false);
    });
  }, [token]);

  const eliminarMarca = async (id) => {
    await deleteBrand(id, token);
    setMarcas(marcas.filter((marca) => marca.id !== id));
    setModalEliminar({ visible: false, marca: null });
  };

  const actualizarMarca = async () => {
    const { marca, nuevoNombre } = modalActualizar;
    await updateBrand(marca.id, nuevoNombre, token);
    setMarcas(
      marcas.map((m) => (m.id === marca.id ? { ...m, nombre: nuevoNombre } : m))
    );
    setModalActualizar({ visible: false, marca: null, nuevoNombre: "" });
  };

  if (loading) return <p>Cargando marcas...</p>;

  return (
    <div>
      {/* Modal Eliminar */}
      {modalEliminar.visible && modalEliminar.marca && (
        <Modal
          titulo="¿Eliminar marca?"
          mensaje="Esta acción no se puede deshacer. La marca será eliminada permanentemente junto con toda su información."
          onConfirmar={() => eliminarMarca(modalEliminar.marca.id)}
          onCancelar={() => setModalEliminar({ visible: false, marca: null })}
          textoConfirmar="Eliminar marca"
          textoCancelar="Cancelar"
        >
          <div>
            <strong>{modalEliminar.marca.nombre}</strong>
            <h1>La marca registrada es: {modalEliminar.marca.nombre}</h1>
            <span className="modal-chip">{modalEliminar.marca.nombre}</span>
          </div>
        </Modal>
      )}

      {/* Modal Actualizar */}
      {modalActualizar.visible && (
        <Modal
          titulo="Actualizar marca"
          onConfirmar={actualizarMarca}
          onCancelar={() => setModalActualizar({ visible: false, marca: null, nuevoNombre: "" })}
          textoConfirmar="Guardar"
          textoCancelar="Cancelar"
        >
          <input
            value={modalActualizar.nuevoNombre}
            onChange={(e) =>
              setModalActualizar((prev) => ({ ...prev, nuevoNombre: e.target.value }))
            }
            style={{ padding: "0.5rem", width: "100%", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </Modal>
      )}

      {/* Lista de marcas */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {marcas.map((marca) => (
          <div
            key={marca.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              minWidth: "150px",
              boxShadow: "2px 2px 8px #eee",
            }}
          >
            <h3>{marca.nombre}</h3>
            <button
              onClick={() => setModalEliminar({ visible: true, marca })}
              style={{ marginRight: "0.5rem" }}
            >
              Eliminar
            </button>
            <button
              onClick={() =>
                setModalActualizar({ visible: true, marca, nuevoNombre: marca.nombre })
              }
            >
              Actualizar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaMarcas;
