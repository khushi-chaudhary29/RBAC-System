import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoleManagement from './components/RoleManagement';
import UserManagement from './components/UserManagement';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/role-management" element={<RoleManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
