// Header.js
import React, { useState, useEffect, useRef } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Header = ({ username }) => { // Accept username as a prop
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisibility(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownVisible]);

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>Auction Platform</h1>
      </div>
      <div style={styles.userContainer}>
        <nav style={styles.nav}>
          <a href="/homepage" style={styles.navLink}>
            Home
          </a>
          <a href="/contact" style={styles.navLink}>
            Contact Us
          </a>
          <a href="/sellerhome" style={styles.navLink}>
            Sell
          </a>
        </nav>
        <div style={styles.userIconContainer} onClick={toggleDropdown} ref={dropdownRef}>
          <VscAccount style={styles.userIcon} />
          {username && <span>{username}</span>} {/* Render username if available */}
          {isDropdownVisible && (
            <div style={styles.dropdown}>
              <span
                style={styles.dropdownItem}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
              >
                Settings
              </span>
              <span
                style={styles.dropdownItem}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                onClick={handleLogout} // Add onClick to handle logout
              >
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
    
    header: {
      backgroundColor: '#1a237e',
      padding: '15px',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      margin: 0,
      fontSize: '24px',
      color: "#fff",
    },
    nav: {
      display: 'flex',
    },
    navLink: {
      color: '#fff',
      margin: '0 15px',
      textDecoration: 'none',
      fontSize: '16px',
    },
  
    userIconContainer: {
      position: 'relative',
      cursor: 'pointer',
    },
  
    userIcon: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      margin: '0 15px',
    },
  
    dropdown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      padding: '8px',
      zIndex: 1000,
      textAlign: 'right',
    },
  
    dropdownItem: {
      display: 'block',
      textDecoration: 'none',
      color: '#333',
        cursor: 'pointer',
        padding: '8px',
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
    },
  
    dropdownItemHover: {
      backgroundColor: '#f0f0f0',
    },
  
    userContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  };
export default Header;
