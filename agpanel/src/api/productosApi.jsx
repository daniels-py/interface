// src/api/productosApi.js

const API_URL = "http://127.0.0.1:8000/products/productos/"; // Cambia si es necesario

export const obtenerProductos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error en obtenerProductos:", error);
    return [];
  }
};
