// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No autenticado');

        const res = await fetch('http://127.0.0.1:8000/users/api/profile/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Error al obtener el perfil');
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Cargando...</p>;

  return (
    <div>

      <h1>hola mundo</h1>
      <h2>Bienvenido, {profile.username}</h2>
      <p>Email: {profile.email}</p>
      <p>Rol: {profile.role}</p>
      <p>Teléfono: {profile.phone_number}</p>
    </div>
  );
};

console.log('Dashboard component loaded');

export default Dashboard;
