import React, { useState } from 'react';
import '../styles/RoleManagement.css';

const RoleManagement = ({ addRole, roles = [] }) => {
  const [roleName, setRoleName] = useState('');

  // Handle form submission to add a new role
  const handleSubmit = (e) => {
    e.preventDefault();
    if (roleName) {
      addRole(roleName);
      setRoleName('');
    }
  };

  return (
    <div className="role-management">
      <h3 className="role-title">Add New Role</h3>
      <form onSubmit={handleSubmit} className="role-form">
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          placeholder="Enter Role Name"
          className="role-input"
        />
        <button type="submit" className="role-btn">
          Add Role
        </button>
      </form>

      <h4>Existing Roles</h4>
      <div className="role-list">
        {roles && Array.isArray(roles) && roles.length > 0 ? (
          <ul>
            {roles.map((role) => (
              <li key={role.id}>{role.name}</li>
            ))}
          </ul>
        ) : (
          <p>No roles available</p>
        )}
      </div>
    </div>
  );
};

export default RoleManagement;
