import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav style={{ marginBottom: '2rem' }}>
      <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> |{' '}
      <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </nav>
  );
};
