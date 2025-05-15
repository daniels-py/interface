import { useNavigate } from 'react-router-dom';


import './Login.css';

import googleLogo from '../assets/google1.svg'
import gitLogo from '../assets/git1.svg'



const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="container-form">
      <img src={gitLogo} alt="Home" className="form-logo" />
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            name="email"
            placeholder="Correo electrónico"
            className="input-field"
          />
          <div className="forgot-password">
            <a href="">¿Has olvidado la contraseña?</a>
          </div>
          <input
            name="password"
            placeholder="Contraseña"
            type="password"
            className="input-field"
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