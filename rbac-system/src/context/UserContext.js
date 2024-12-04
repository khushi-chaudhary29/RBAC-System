import React, { createContext, useState, useContext } from 'react';

// Create Context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [setPermissions] = useState();
  const [users, setUsers] = useState([]);

  // Methods to manage roles, users, and permissions
  const addRole = (role) => setRoles([...roles, role]);
  const addUser = (user) => setUsers([...users, user]);
  const assignPermissions = (roleId, permissions) => {
    // Assign permissions to a role
    setPermissions(prev => [...prev, { roleId, permissions }]);
  };

  return (
    <UserContext.Provider value={{ roles, addRole, users, addUser, assignPermissions }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUserContext = () => useContext(UserContext);
