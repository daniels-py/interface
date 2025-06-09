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