/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/Admin.css';
// import RoleManagement from '../components/RoleManagement';

function AdminPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);

  const handleRoleChange = (userId, role) => {
    setUsers(
      users.map(user =>
        user.id === userId ? { ...user, role: role } : user
      )
    );
  };

  const handleStatusChange = (userId, status) => {
    setUsers(
      users.map(user =>
        user.id === userId ? { ...user, status: status } : user
      )
    );
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
                    value={user.role}
                    onChange={e => handleRoleChange(user.id, e.target.value)}
                  >
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
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="role-management">
        <h2>Role Management</h2>
        <table className="role-table">
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map(role => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>
                  {role.permissions.map(permission => (
                    <span key={permission} className="permission">
                      {permission}
                    </span>
                  ))}
                </td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
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
