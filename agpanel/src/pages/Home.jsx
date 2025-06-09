import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAcceder = () => {
    navigate('/login');
  };

  return (
    <div>
        <h1>hola esta es el acceso</h1>
      <button onClick={handleAcceder}>Acceder</button>
    </div>
  );
};
console.log("Home cargado");


export default Home;