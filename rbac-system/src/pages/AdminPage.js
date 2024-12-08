/* eslint-disable no-unused-vars */
import React from 'react';
import { useUserContext } from '../context/UserContext';
import RoleManagement from '../components/RoleManagement';
import '../styles/Admin.css';

function AdminPage() {
  const { users, setUsers, roles, addRole, permissions, assignPermissions } = useUserContext();

  const handleRoleChange = (userId, role) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, role } : user
    );
    setUsers(updatedUsers); // Correctly using setUsers from context
  };

  const handleEditUser = (userId) => {
    const newName = prompt('Enter new name for the user:');
    if (newName) {
      const updatedUsers = users.map(user =>
        user.id === userId ? { ...user, name: newName } : user
      );
      setUsers(updatedUsers); // Update users correctly using setUsers
    }
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(user => user.id !== userId);
      setUsers(updatedUsers); // Correct usage of setUsers
    }
  };

  // Handle changing the status of the user
  const handleStatusChange = (userId, newStatus) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers); // Update users correctly using setUsers
  };

  // Handle editing a role
  const handleEditRole = (roleId) => {
    const newRoleName = prompt('Enter new name for the role:');
    if (newRoleName) {
      // Update the existing role
      const updatedRoles = roles.map(role =>
        role.id === roleId ? { ...role, name: newRoleName } : role
      );
      addRole(updatedRoles); // Assuming addRole will update roles correctly
    }
  };
  
  const handleDeleteRole = (roleId) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      // Remove the role from the list
      const updatedRoles = roles.filter(role => role.id !== roleId);
      addRole(updatedRoles); // Assuming addRole will update roles correctly
    }
  };
  
  

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin page where you can manage users, roles, and permissions.</p>

      <div className="user-management">
        <h2>User Management</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  <select
                    value={user.role || ''} // Ensure user.role is defined
                    onChange={e => handleRoleChange(user.id, e.target.value)}
                  >
                    <option value="" disabled>Select Role</option> {/* Placeholder option */}
                    {roles.map(role => (
                      <option key={role.id} value={role.name}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleStatusChange(user.id, user.status === 'Active' ? 'Inactive' : 'Active')
                    }
                  >
                    {user.status}
                  </button>
                </td>
                <td>
                  <button className="btn-edit" onClick={() => handleEditUser(user.id)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="role-management">
        <h2>Role Management</h2>
        {/* Update the RoleManagement component and pass roles and addRole */}
        <RoleManagement roles={roles} addRole={addRole} />

        {/* Role Table */}
        <table className="role-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map(role => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>
                  {/* Display permissions, check if they exist */}
                  {role.permissions && role.permissions.length > 0
                    ? role.permissions.join(', ') // Join permissions into a string
                    : 'No Permissions'}
                </td>
                <td>
                  <button className="btn-edit" onClick={() => handleEditRole(role.id)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDeleteRole(role.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;
