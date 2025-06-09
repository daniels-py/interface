import React, { useEffect, useState } from "react";

function ListaMarcas() {
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalEliminar, setModalEliminar] = useState({ visible: false, marca: null });
  const [modalActualizar, setModalActualizar] = useState({ visible: false, marca: null, nuevoNombre: "" });

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/core/marca/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMarcas(data);
        setLoading(false);
      });
  }, [token]);

  const eliminarMarca = async (id) => {
    await fetch(`http://127.0.0.1:8000/core/marca/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMarcas(marcas.filter((marca) => marca.id !== id));
    setModalEliminar({ visible: false, marca: null });
  };

  const actualizarMarca = async () => {
    const { marca, nuevoNombre } = modalActualizar;
    await fetch(`http://127.0.0.1:8000/core/marca/${marca.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ nombre: nuevoNombre }),
    });
    setMarcas(
      marcas.map((m) => (m.id === marca.id ? { ...m, nombre: nuevoNombre } : m))
    );
    setModalActualizar({ visible: false, marca: null, nuevoNombre: "" });
  };

  if (loading) return <p>Cargando marcas...</p>;

  return (
    <div>
      {/* Modal Eliminar */}
      {modalEliminar.visible && (
        <div style={modalStyle}>
          <p>¿Seguro que deseas eliminar la marca "{modalEliminar.marca.nombre}"?</p>
          <button onClick={() => eliminarMarca(modalEliminar.marca.id)}>Sí, eliminar</button>
          <button onClick={() => setModalEliminar({ visible: false, marca: null })}>Cancelar</button>
        </div>
      )}

      {/* Modal Actualizar */}
      {modalActualizar.visible && (
        <div style={modalStyle}>
          <p>Actualizar marca:</p>
          <input
            value={modalActualizar.nuevoNombre}
            onChange={(e) =>
              setModalActualizar((prev) => ({ ...prev, nuevoNombre: e.target.value }))
            }
          />
          <button onClick={actualizarMarca}>Guardar</button>
          <button onClick={() => setModalActualizar({ visible: false, marca: null, nuevoNombre: "" })}>Cancelar</button>
        </div>
      )}

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

// Estilo simple para el modal
const modalStyle = {
  background: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  padding: "2rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  zIndex: 1000,
  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
};

export default ListaMarcas;