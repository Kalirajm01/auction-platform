import React, { useState, useEffect, useRef } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AdminHomePage = () => {
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
    <div>
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
            <a href="/admin" style={styles.navLink}>
              Home
            </a>
            <a href="/contacta" style={styles.navLink}>
              Contact Us
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

    {/* Banner */}
    {/* <section style={styles.banner}>
        <h2 style={styles.bannerText}>Welcome to Auction Platform - You can Sell your Products!</h2>
      </section> */}

      {/* Seller Home Content */}
      <section style={styles.sellerContent}>
        <div style={styles.sellerContainer}>
          <h2 style={styles.sellerTitle}>Become a Seller</h2>
          <p style={styles.sellerDescription}>
            Start selling your items on our platform. Follow the steps below to list your item.
          </p>
          <Link to="/seller" style={styles.navLink}>
          <button style={styles.listItemButton}>List Your Item</button>
          </Link>
        </div>

{/* Product Listing */}
<section style={styles.productListing}>
        {/* Steps Cards */}
        <div style={{ ...styles.stepCard, backgroundColor: '#4CAF50' }}>
          <p>Step 1</p>
          <p>Create an Account</p>
        </div>

        <div style={{ ...styles.stepCard, backgroundColor: '#2196F3' }}>
          <p>Step 2</p>
          <p>Verify Your Identity</p>
        </div>

        <div style={{ ...styles.stepCard, backgroundColor: '#FFC107' }}>
          <p>Step 3</p>
          <p>List Your Item</p>
        </div>

        <div style={{ ...styles.stepCard, backgroundColor: '#FF5722' }}>
          <p>Step 4</p>
          <p>Set Your Price</p>
        </div>

        <div style={{ ...styles.stepCard, backgroundColor: '#9C27B0' }}>
          <p>Step 5</p>
          <p>Add Images to attract</p>
        </div>

        <div style={{ ...styles.stepCard, backgroundColor: '#E91E63' }}>
          <p>Step 6</p>
          <p>Give a Description</p>
        </div>

        <div style={{ ...styles.stepCard, backgroundColor: '#673AB7' }}>
          <p>Step 7</p>
          <p>Ready to Sell</p>
        </div>

        <div style={{ ...styles.stepCard, backgroundColor: '#FF9800' }}>
          <p>Step 8</p>
          <p>Close your Item</p>
        </div>
      </section>

        {/* <div style={styles.sellerSteps}>
          <div style={{ ...styles.step, backgroundColor: '#4CAF50' }}>
            <p>Step 1</p>
            <p>Create an Account</p>
          </div>
          <div style={{ ...styles.step, backgroundColor: '#2196F3' }}>
            <p>Step 2</p>
            <p>Verify Your Identity</p>
          </div>
          <div style={{ ...styles.step, backgroundColor: '#FFC107' }}>
            <p>Step 3</p>
            <p>List Your Item</p>
          </div>
          <div style={{ ...styles.step, backgroundColor: '#FF5722' }}>
            <p>Step 4</p>
            <p>Set Your Price</p>
          </div>
          <div style={{ ...styles.step, backgroundColor: '#9C27B0' }}>
            <p>Step 5</p>
            <p>Ready to Sell!</p>
          </div>
          <div style={{ ...styles.step, backgroundColor: '#E91E63' }}>
            <p>Step 6</p>
            <p>Another Step</p>
          </div>
          <div style={{ ...styles.step, backgroundColor: '#673AB7' }}>
            <p>Step 7</p>
            <p>Yet Another Step</p>
          </div>
          <div style={{ ...styles.step, backgroundColor: '#FF9800' }}>
            <p>Step 8</p>
            <p>Final Step</p>
          </div>
        </div> */}
      </section>

      {/* Guidelines Section */}
      <section style={styles.guidelines}>
        <h2 style={styles.guidelinesTitle}>Guidelines</h2>
        <ul style={styles.guidelinesList}>
          <li>Follow our platform rules and policies.</li>
          <li>Upload the images with good Quality.</li>
          <li>Provide accurate information about your listed items.</li>
          <li>Ensure your identity verification for secure transactions.</li>
          <li>Set a fair and competitive price for your items.</li>
          <li>Contact us for any assistance or inquiries.</li>
        </ul>
      </section>

      <div>
        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>Auction Hub &copy; 2024</p>
          <p style={styles.footerText}><strong>Kaliraj M & Sridhar R</strong></p>
        </footer>
      </div>
    </div>
  );
};

const styles = {
  
  body: {
    margin: 0,
    padding: 0,
  },

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
    color: '#fff',
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

  stepCard: {
    flex: 1,
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px',
    borderRadius: '8px',
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
  
  sellerContent: {
    padding: '80px 20px',
    backgroundColor: '#f4f4f4',
    marginTop: '70px',
    textAlign: 'center',
  },

  sellerContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },

  sellerTitle: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },

  sellerDescription: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '40px',
  },

  listItemButton: {
    backgroundColor: '#1a237e',
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s ease-in-out',
  },

  sellerSteps: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
  },

  step: {
    flex: 1,
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  },

  guidelines: {
    backgroundColor: '#e0e0e0',
    padding: '40px 20px',
    marginLeft: "30%",
    marginRight: "30%",

  },

  guidelinesTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },

  guidelinesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '16px',
    color: '#555',
  },

  footer: {
    backgroundColor: '#1a237e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    width: '100%',
  },
  footerText: {
    margin: 0,
    color: '#fff',
    fontSize: '14px',
  },
  
  banner: {
    backgroundColor: '#4285f4',
    textAlign: 'center',
    color: '#fff',
    padding: '70px 0', 
    marginTop: '530px', 
  },

  productListing: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    marginTop: '30px',
  },
  
  productCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
    padding: '15px',
    maxWidth: '300px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  productTitle: {
    marginTop: '10px',
    marginBottom: '5px',
    fontSize: '18px',
  },
  productDescription: {
    color: '#555',
    fontSize: '14px',
  },
  bidButton: {
    backgroundColor: '#1a237e',
    color: '#fff',
    padding: '8px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '14px',
    transition: 'background-color 0.3s ease-in-out',
  },
  bidButtonHover: {
    backgroundColor: '#3949ab',
  },

  bannerText: {
    fontSize: '24px',
    margin: 0,
  },
};

export default AdminHomePage;
