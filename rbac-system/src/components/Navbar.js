import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/admin" className="navbar-link">Admin Page</Link></li>
        <li className="navbar-item"><Link to="/role-management" className="navbar-link">Role Management</Link></li>
        <li className="navbar-item"><Link to="/user-management" className="navbar-link">User Management</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
