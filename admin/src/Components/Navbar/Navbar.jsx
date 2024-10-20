import React from 'react';
import './Navbar.css';
import adminLogo from '../../assets/adminProfile.png';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={adminLogo} alt="" className="nav-logo-img" />
        <div className="nav-text">
          <p className="artisan-text">ARTISAN</p>
          <p className="admin-panel-text">Admin Panel</p>
        </div>
      </div>

      {/* Conditionally render the Logout button */}
      {isAuthenticated && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
