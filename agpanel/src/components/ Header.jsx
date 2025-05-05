import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#f8d7da' }}>
      <h1>Distribuidora de Belleza</h1>
      <Link to="/login">
        <button style={{ marginTop: '1rem' }}>Acceder</button>
      </Link>
    </header>
  );
};

export default Header;
