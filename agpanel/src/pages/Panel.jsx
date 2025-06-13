import { useEffect, useState } from 'react';
import {
  obtenerMarcas,
  crearMarca,
  eliminarMarca,
  actualizarMarca,
} from '../services/brandServices';

const Panel = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [marcas, setMarcas] = useState([]);
  const [nuevaMarca, setNuevaMarca] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [editandoNombre, setEditandoNombre] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No autenticado');
        const res = await fetch('http://127.0.0.1:8000/users/api/profile/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Error al obtener el perfil');
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchMarcas = async () => {
      const token = localStorage.getItem('authToken');
      const data = await obtenerMarcas(token);
      setMarcas(data);
    };

    fetchProfile();
    fetchMarcas();
  }, []);

  const handleCrearMarca = async (e) => {
    e.preventDefault();
    if (!nuevaMarca.trim()) return;
    await crearMarca(nuevaMarca);
    setNuevaMarca('');
    const token = localStorage.getItem('authToken');
    setMarcas(await obtenerMarcas(token));
  };

  const handleEliminar = async (id) => {
    const token = localStorage.getItem('authToken');
    await eliminarMarca(id, token);
    setMarcas(await obtenerMarcas(token));
  };

  const handleEditar = (id, nombre) => {
    setEditandoId(id);
    setEditandoNombre(nombre);
  };

  const handleActualizar = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    await actualizarMarca(editandoId, editandoNombre, token);
    setEditandoId(null);
    setEditandoNombre('');
    setMarcas(await obtenerMarcas(token));
  };

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Cargando...</p>;

  return (
    <div>
      <h1>hola mundo</h1>
      <h2>Bienvenido, {profile.username}</h2>
      <p>Email: {profile.email}</p>
      <p>Rol: {profile.role}</p>
      <p>Teléfono: {profile.phone_number}</p>

      <hr />
      <h3>CRUD de Marcas</h3>
      <form onSubmit={handleCrearMarca}>
        <input
          type="text"
          value={nuevaMarca}
          onChange={(e) => setNuevaMarca(e.target.value)}
          placeholder="Nueva marca"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {marcas.map((marca) => (
          <li key={marca.id}>
            {editandoId === marca.id ? (
              <form onSubmit={handleActualizar} style={{ display: 'inline' }}>
                <input
                  value={editandoNombre}
                  onChange={(e) => setEditandoNombre(e.target.value)}
                />
                <button type="submit">Guardar</button>
                <button type="button" onClick={() => setEditandoId(null)}>
                  Cancelar
                </button>
              </form>
            ) : (
              <>
                {marca.nombre}{' '}
                <button onClick={() => handleEditar(marca.id, marca.nombre)}>
                  Editar
                </button>
                <button onClick={() => handleEliminar(marca.id)}>
                  Eliminar
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Panel;