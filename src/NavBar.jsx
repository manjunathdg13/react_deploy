import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ userId, onLogout }) => (
  <nav style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    gap: 16,
    padding: 16,
    background: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  }}>
    <div style={{ display: 'flex', gap: 16 }}>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <div>
      {userId ? (
        <>
          <span style={{ marginRight: 12 }}>User: {userId}</span>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  </nav>
);

export default NavBar;
