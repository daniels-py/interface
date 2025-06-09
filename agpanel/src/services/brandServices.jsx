export const createBrand = async (brandName) => {
  const token = localStorage.getItem("authToken");
  const response = await fetch("http://127.0.0.1:8000/core/marca/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nombre: brandName }), // <-- aquí el cambio
  });
  return response;
};



export const getBrands = async (token) => {
  const response = await fetch("http://127.0.0.1:8000/core/marca/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const deleteBrand = async (id, token) => {
  return fetch(`http://127.0.0.1:8000/core/marca/${id}/`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateBrand = async (id, nombre, token) => {
  return fetch(`http://127.0.0.1:8000/core/marca/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nombre }),
  });
};

// Ya tienes createBrand aquí si lo necesitas