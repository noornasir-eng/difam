import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
        <li><button onClick={() => setCurrentPage('login')}>Login</button></li>
        <li><button onClick={() => setCurrentPage('signup')}>Signup</button></li>
        <li><button onClick={() => setCurrentPage('dashboard')}>Dashboard</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
