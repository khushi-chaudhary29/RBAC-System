/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from 'react';

// Create Context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [users, setUsers] = useState([]); // Correctly defined state

  // Methods to manage roles, users, and permissions
  const addRole = (role) => setRoles([...roles, role]);
  const addUser = (user) => setUsers([...users, user]); // Correct usage of setUsers
  const assignPermissions = (roleId, rolePermissions) => {
    setPermissions(prev => [...prev, { roleId, permissions: rolePermissions }]);
  };

  return (
    <UserContext.Provider value={{ roles, addRole, users, setUsers, addUser, assignPermissions }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUserContext = () => useContext(UserContext);
