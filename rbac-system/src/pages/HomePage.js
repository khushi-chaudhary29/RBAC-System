import React, { useState } from 'react';
import '../styles/HomePage.css'; // Import the updated HomePage CSS

const HomePage = () => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to the RBAC System</h1>
        <p className="hero-description">
          Seamlessly manage users, roles, and permissions with enhanced security.
        </p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="section-header">
        <h2 className="section-title">Key Features of RBAC</h2>
        <p className="section-description">
          Explore the core functionalities of our system designed to simplify role-based access control.
        </p>
      </div>

      <div className="features-section">
        <div className="feature">
          <h2>User Management</h2>
          <p>Efficiently manage all your users with advanced permissions and roles, ensuring smooth access control.</p>
        </div>
        <div className="feature">
          <h2>Role Management</h2>
          <p>Create and assign roles to users based on various needs and access levels across the system.</p>
        </div>
        <div className="feature">
          <h2>Permissions Control</h2>
          <p>Grant or revoke permissions to ensure robust data security and compliance with your policies.</p>
        </div>
      </div>

      {/* Toggle Button for Additional Info */}
      <div className="toggle-button-section">
        <button className="toggle-button" onClick={handleToggleInfo}>
          {showAdditionalInfo ? 'Hide Additional Info' : 'Show Additional Info'}
        </button>
      </div>

      {/* Conditional Rendering for Additional Info */}
      {showAdditionalInfo && (
        <div className="features-section">
          <div className="feature">
            <h2>Advanced User Insights</h2>
            <p>Gain detailed insights into user behavior, activities, and access patterns for better security management.</p>
          </div>
          <div className="feature">
            <h2>Role-Based Reporting</h2>
            <p>Generate comprehensive reports based on roles and permissions, helping you track and audit access controls.</p>
          </div>
          <div className="feature">
            <h2>Customizable Settings</h2>
            <p>Tailor the system’s user, role, and permission settings to meet the unique needs of your organization.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;