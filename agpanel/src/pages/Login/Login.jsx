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
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/users/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Correo o contraseña incorrectos');
      }

      const data = await response.json();
      const token = data.access;
      localStorage.setItem('authToken', token);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container-form">
        <img src={gitLogo} alt="Logo" className="form-logo" />
        <h2>Iniciar Sesión</h2>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />

          <div className="forgot-password">
            <a href="#">¿Has olvidado la contraseña?</a>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Ingresando...' : 'Entrar'}
          </button>
        </form>

        <div className="social-login">
          <button className="social-btn google-btn" disabled={loading}>
            <img src={googleLogo} alt="Google" className="social-icon" />
            Iniciar con Google
          </button>
          <button className="social-btn github-btn" disabled={loading}>
            <img src={gitLogo} alt="GitHub" className="social-icon" />
            Iniciar con GitHub
          </button>
        </div>

        <div className="create-account">
          <a href="#">Crear cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
