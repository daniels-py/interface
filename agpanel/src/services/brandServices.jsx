export const crearMarca = async (nombreMarca) => {
  const token = localStorage.getItem("authToken");
  const respuesta = await fetch("http://127.0.0.1:8000/core/marca/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nombre: nombreMarca }),
  });
  return respuesta;
};


export const obtenerMarcas = async (token) => {
  const respuesta = await fetch("http://127.0.0.1:8000/core/marca/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return respuesta.json();
};

export const eliminarMarca = async (id, token) => {
  return fetch(`http://127.0.0.1:8000/core/marca/${id}/`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const actualizarMarca = async (id, nombre, token) => {
  return fetch(`http://127.0.0.1:8000/core/marca/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nombre }),
  });
};

// Ya tienes crearMarca aquí si lo necesitas