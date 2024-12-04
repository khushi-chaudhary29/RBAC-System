import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the updated Navbar CSS

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/admin" className="navbar-link">Admin Page</Link></li>
        <li className="navbar-item"><Link to="/role-management" className="navbar-link">Role Management</Link></li>
        <li className="navbar-item"><Link to="/user-management" className="navbar-link">User Management</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
