import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/users/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Credenciales incorrectas');

      const data = await response.json();
      localStorage.setItem('authToken', data.access);
      navigate('/Panel'); // Redirige a la página de marcas después del inicio de sesión exitoso
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};


export default Login;
