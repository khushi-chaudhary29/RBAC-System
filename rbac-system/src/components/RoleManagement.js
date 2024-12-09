import React, { useState, useEffect } from 'react';
import '../styles/RoleManagement.css';

const RoleManagement = ({ addRole, roles: initialRoles = [] }) => {
  const [roleName, setRoleName] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [roles, setRoles] = useState(initialRoles);

  // Default permissions
  const defaultPermissions = ['Read', 'Write', 'Edit', 'Delete'];

  // Load roles from localStorage on component mount
  useEffect(() => {
    const savedRoles = localStorage.getItem('roles');
    if (savedRoles) {
      setRoles(JSON.parse(savedRoles));
    }
  }, []);

  // Save roles to localStorage whenever roles change
  useEffect(() => {
    if (roles.length > 0) {
      localStorage.setItem('roles', JSON.stringify(roles));
    }
  }, [roles]);

  // Handle form submission to add a new role
  const handleSubmit = (e) => {
    e.preventDefault();
    if (roleName.trim()) {
      const newRole = {
        id: roles.length + 1,  // Or generate a unique ID
        name: roleName.trim(),
        permissions: selectedPermissions, // Save selected permissions
      };

      // Update roles in parent component or local state
      if (addRole) {
        addRole(newRole); // Propagate to parent if `addRole` is provided
      } else {
        setRoles((prevRoles) => [...prevRoles, newRole]); // Update local state if no parent function
      }

      // Clear form inputs
      setRoleName('');
      setSelectedPermissions([]);
    }
  };

  // Handle role editing
  const handleEditRole = (roleId) => {
    const newRoleName = prompt('Enter new role name:');
    if (newRoleName?.trim()) {
      const updatedRoles = roles.map((role) =>
        role.id === roleId ? { ...role, name: newRoleName.trim() } : role
      );
      setRoles(updatedRoles); // Update local state with edited role
    }
  };

  // Handle role deletion
  const handleDeleteRole = (roleId) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      const updatedRoles = roles.filter((role) => role.id !== roleId);
      setRoles(updatedRoles); // Update local state
      localStorage.setItem('roles', JSON.stringify(updatedRoles)); // Update localStorage
    }
  };  

  // Handle permission selection
  const handlePermissionChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedPermissions(selected); // Update selected permissions
  };

  return (
    <div className="role-management">
      <h3 className="role-title">Manage Roles</h3>

      {/* Add New Role Form */}
      <form onSubmit={handleSubmit} className="role-form">
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          placeholder="Enter Role Name"
          className="role-input"
        />

        {/* Permission Dropdown */}
        <select
          multiple
          value={selectedPermissions}
          onChange={handlePermissionChange}
          className="permission-dropdown"
        >
          {defaultPermissions.map((permission) => (
            <option key={permission} value={permission}>
              {permission}
            </option>
          ))}
        </select>

        <button type="submit" className="role-btn">
          Add Role
        </button>
      </form>

      {/* Existing Roles Table */}
      <h3 className="role-title">Existing Roles</h3>
      <div className="role-table">
        {roles && roles.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Role Name</th>
                <th>Permissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.name}</td>
                  <td>
                    {role.permissions.length > 0 ? (
                      <ul>
                        {role.permissions.map((permission) => (
                          <li key={permission}>{permission}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No permissions assigned</p>
                    )}
                  </td>
                  <td className="role-actions">
                    <button
                      className="btn-edit"
                      onClick={() => handleEditRole(role.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteRole(role.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No roles available</p>
        )}
      </div>
    </div>
  );
};

export default RoleManagement;
