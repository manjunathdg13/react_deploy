import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import TodoList from './TodoList';
import Login from './Login';
import About from './About';
import Contact from './Contact';

const AppRouter = () => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

  const handleLogin = (id) => {
    setUserId(id);
    localStorage.setItem('userId', id);
  };
  const handleLogout = () => {
    setUserId('');
    localStorage.removeItem('userId');
  };

  return (
    <Router>
      <NavBar userId={userId} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={userId ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={userId ? <TodoList /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
