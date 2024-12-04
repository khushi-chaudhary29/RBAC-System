import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';

const RoleManagement = () => {
  const { addRole } = useUserContext();
  const [roleName, setRoleName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRole(roleName);
    setRoleName('');
  };

  return (
    <div>
      <h3>Add New Role</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          placeholder="Enter Role Name"
        />
        <button type="submit">Add Role</button>
      </form>
    </div>
  );
};

export default RoleManagement;
