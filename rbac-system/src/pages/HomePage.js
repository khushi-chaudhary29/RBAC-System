import React from 'react';
import '../styles/HomePage.css'; // Import the updated HomePage CSS

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to the RBAC System</h1>
        <p className="hero-description">Seamlessly manage users, roles, and permissions with enhanced security.</p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="features-section">
        <div className="feature">
          <h2>User Management</h2>
          <p>Efficiently manage all your users with advanced permissions and roles.</p>
        </div>
        <div className="feature">
          <h2>Role Management</h2>
          <p>Create and assign roles to users based on various needs.</p>
        </div>
        <div className="feature">
          <h2>Permissions Control</h2>
          <p>Grant or revoke permissions to ensure robust data security.</p>
        </div>
      </div>

      <div className="footer">
        <p>RBAC System - Your trusted role-based access control solution.</p>
      </div>
    </div>
  );
};

export default HomePage;
