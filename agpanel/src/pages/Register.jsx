import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro.
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre" required /><br />
        <input type="email" placeholder="Correo" required /><br />
        <input type="password" placeholder="Contraseña" required /><br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
