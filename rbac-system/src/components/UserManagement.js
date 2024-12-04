import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';

const UserManagement = () => {
  const { addUser, roles } = useUserContext();  // Accessing addUser and roles from context
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { userName, role };
    addUser(newUser);
    setUserName('');
    setRole('');
  };

  return (
    <div className="user-management">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter User Name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="role">Assign Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserManagement;
