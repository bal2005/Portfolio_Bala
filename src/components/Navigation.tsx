import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Logo here */}
      </div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/certifications">Certifications</NavLink>
        {/* other links */}
      </div>
    </nav>
  );
}

export default Navbar;