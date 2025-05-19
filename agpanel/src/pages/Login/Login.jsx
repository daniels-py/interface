import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import googleLogo from '../../assets/google1.svg';
import gitLogo from '../../assets/git1.svg';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/users/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }

      const data = await response.json();
      const token = data.access;  // Dependiendo de cómo respondas en el backend, ajusta esto
      localStorage.setItem('authToken', token); // Guardas el token en localStorage o en donde prefieras
      navigate('/dashboard'); // Rediriges al usuario a su dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="container-form">
        <img src={gitLogo} alt="Home" className="form-logo" />
        <h2>Iniciar Sesión</h2>
        {error && <div className="error-message">{error}</div>} {/* Muestra mensaje de error */}
        <form onSubmit={handleLogin}>
          <input
            name="email"
            placeholder="Correo electrónico"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="forgot-password">
            <a href="">¿Has olvidado la contraseña?</a>
          </div>
          <input
            name="password"
            placeholder="Contraseña"
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        <div className="social-login">
          <button className="social-btn google-btn">
            <img src={googleLogo} alt="Google" className="social-icon" />
            Iniciar con Google
          </button>
          <button className="social-btn github-btn">
            <img src={gitLogo} alt="GitHub" className="social-icon" />
            Iniciar con GitHub
          </button>
          <div className="create-account">
            <a href="">Crear cuenta</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
