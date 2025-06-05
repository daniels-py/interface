import React, { useEffect, useState } from 'react';
import { obtenerProductos } from '../../../api/productosApi';
import './ProductContainer.css';

const ProductContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (err) {
        setError('Error al cargar productos');
        console.error(err);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  if (cargando) {
    return <div className="cargando">Cargando productos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section className="products-wrapper">
      <div className="products-container">
        <h2>Productos Destacados</h2>
        
        <div className="product-grid">
          {productos.length > 0 ? (
            productos.map(producto => (
              <div className="product-card" key={producto.id}>
                <div className="image-container">
                  <img
                    src={producto.imagen || '/imagen-placeholder.jpg'}
                    alt={producto.nombre}
                    className="product-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/imagen-placeholder.jpg';
                    }}
                  />
                </div>

                <div className="product-info">
                  <button>ejemplo</button>
                  <h3>{producto.nombre}</h3>
                  <p className="product-description">{producto.descripcion}</p>
                  <p className="product-price">${producto.precio.toLocaleString()}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No hay productos disponibles</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
