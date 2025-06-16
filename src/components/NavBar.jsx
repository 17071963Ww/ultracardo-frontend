import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="px-4">Home</Link>
      <Link to="/anuncios" className="px-4">Anúncios</Link>
    </nav>
  );
}