import { useEffect, useState } from 'react';
import { fetchUserProfile } from '../../api/userApi'; // si lo colocaste ahí
import Head from '../head'; // Asegúrate de tener instalado next/head si usas Next.js
const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getProfile();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!profile) return <p>Cargando perfil...</p>;

  return (
    <div>
      <Head/>
      <h2>{profile.message}</h2>
      <p>Id : {profile.id}</p>
      <p>Usuario: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Rol: {profile.role}</p>
      <p>numero de contacto:{profile.phone_number}</p>
    </div>
  );
};

export default Profile;
