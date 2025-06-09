import React, { useState } from "react";
import CreateButton from "../components/CreateButton";
import { createBrand } from "../services/brandServices";

import ListaMarcas from "../components/ListBrand";


const Brands = () => {
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!brandName.trim()) {
      alert("El nombre de la marca no puede estar vacío");
      return;
    }

    setLoading(true);

    try {
      const response = await createBrand(brandName);

      if (response.ok) {
        alert("Marca creada correctamente");
        setBrandName("");
        // Puedes cerrar el modal aquí si es necesario
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Error al crear la marca");
      }
    } catch (error) {
      alert("Error de red o del servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Marcas</h2>
      <p>¡Bienvenido al panel de marcas!</p>
      <CreateButton label="Marca">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nombre de la marca"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </form>
      </CreateButton>
      <ListaMarcas />

    </div>
  );
};

export default Brands;