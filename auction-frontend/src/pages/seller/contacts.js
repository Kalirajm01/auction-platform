import React, { useState, useEffect, useRef } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import '../../css/contact.css';
import { Helmet } from 'react-helmet';

const ContactUs1 = () => {
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
      navigate('/');
    };
  return (
    <div className="contact-us-container">
            <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="img/favicon.png" />
        <link rel="apple-touch-icon" href="img/favicon.png" />
        <title>Auction Platform</title>
      </Helmet>
            {/* Header */}
            <header style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>Auction Platform</h1>
        </div>
        <div style={styles.userContainer}>
          <nav style={styles.nav}>
            <a href="/sellerhome" style={styles.navLink}>
              Home
            </a>
          </nav>
          <div style={styles.userIconContainer} onClick={toggleDropdown} ref={dropdownRef}>
          <VscAccount style={styles.userIcon} />
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
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>

        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

            {/* Location Map */}
            <div className="location-map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125309.77379437635!2d76.96384866097553!3d11.043842809391139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582ef9523359%3A0xa1ebf8112c5c931a!2sPsg%20Institute%20Of%20Technology%20And%20Applied%20Research!5e0!3m2!1sen!2sin!4v1706593797644!5m2!1sen!2sin"
          width="1650"
          height="330"
          style={{ border: 0 }}
          allowFullScreen="yes"
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>Auction Hub &copy; 2024</p>
        <p style={styles.footerText}><strong>Kaliraj M & Sridhar R</strong></p>
      </footer>

    </div>
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
    footer: {
      backgroundColor: '#1a237e',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
      // position: 'fixed',
      // bottom: 0,
      width: '1650',
    },
    footerText: {
      margin: 0,
      color: "#fff",
      fontSize: '14px',
    },
    
      locationMap: {
        flex: '2', 
        marginLeft: '20px', 
      },
  };

export default ContactUs1;
