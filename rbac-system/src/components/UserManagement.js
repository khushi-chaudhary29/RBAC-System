import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext'; 
import '../styles/UserManagement.css';

const UserManagement = () => {
  const { users, addUser, roles } = useUserContext(); // Access users, addUser, and roles from context
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('active');
  const [permissions, setPermissions] = useState([]);
  const [message, setMessage] = useState('');

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    const selectedRoleObj = roles.find((r) => r.name === selectedRole);
    if (selectedRoleObj) {
      setPermissions(selectedRoleObj.permissions);
    } else {
      setPermissions([]);
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name: userName, role, status, permissions };
    addUser(newUser);  // Add user to the global state
    setMessage('User added successfully!');
    setUserName('');
    setRole('');
    setStatus('active');
    setPermissions([]);
  };

  return (
    <div className="user-management">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter User Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Assign Role</label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            required
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role.name} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Permissions</label>
          <div className="permissions">
            {permissions.length > 0 ? (
              permissions.map((permission) => (
                <label key={permission} className="permission-checkbox">
                  <input type="checkbox" disabled checked />
                  {permission}
                </label>
              ))
            ) : (
              <p>No permissions available</p>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={handleStatusChange}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="add-user-btn">Add User</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default UserManagement;
