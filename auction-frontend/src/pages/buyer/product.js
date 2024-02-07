import React, { useState, useEffect, useRef } from 'react';
import { VscAccount } from 'react-icons/vsc';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import Helmet from "react-helmet";

const ProductDetailsPage = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [bidders, setBidders] = useState([
    { name: 'Bidder 1', amount: 550 },
    { name: 'Bidder 2', amount: 600 },
    { name: 'Bidder 3', amount: 650 },
  ]);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisibility(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const MINIMUM_BID_AMOUNT = 500;
  const [displayWarning, setDisplayWarning] = useState(false); 

  const handleBid = () => {
    const enteredAmount = parseInt(bidAmount);

    // Check if the entered amount is below the minimum bid amount
    if (enteredAmount < MINIMUM_BID_AMOUNT) {
      // Display a warning message
      setDisplayWarning(true);

      // Hide the warning message after a delay (e.g., 5 seconds)
      const warningTimeout = setTimeout(() => {
        setDisplayWarning(false);
      }, 5000);

      // Stop further execution
      return;
    }

    // Update the list of bidders with the new bid
    const newBidder = { name: 'You', amount: enteredAmount };
    setBidders([newBidder, ...bidders]);
    // You can also send the bid to the server or perform other actions as needed
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownVisible]);

  useEffect(() => {
    let warningTimeout;

    if (displayWarning) {
      // Hide the warning message after a delay
      warningTimeout = setTimeout(() => {
        setDisplayWarning(false);
      }, 5000); // Adjust the delay time as needed
    }

    // Cleanup the timeout on component unmount or when displayWarning changes
    return () => clearTimeout(warningTimeout);
  }, [displayWarning]);
  

  const calculateTimeRemaining = () => {
    const closingDate = new Date('2024-02-10T00:00:00'); // Replace with your actual closing date
    const currentDate = new Date();

    const timeDifference = closingDate - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const renderTimeRemaining = () => {
    const { days, hours, minutes, seconds } = calculateTimeRemaining();
    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  };
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <a href="/homepage" style={styles.navLink}>
              Home
            </a>
            <a href="contact" style={styles.navLink}>
              Contact Us
            </a>
            <a href="/sellerhome" style={styles.navLink}>
              Sell
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
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

            {/* Product Details */}
            <section style={styles.productDetails}>
        <div style={styles.productImages}>
          <div style={styles.imageContainer}>
            {/* Include product images here */}
            <img src="img/camera.jpg" alt="camera1" style={styles.productImage} />
            <img src="img/camera.jpg" alt="camera2" style={styles.productImage} />
            <img src="img/camera.jpg" alt="camera3" style={styles.productImage} />
            {/* Add more images as needed */}
          </div>
        </div>
        <div style={styles.productInfo}>
          <h2 style={styles.productTitle}>Luxury Watch</h2>
          <p style={styles.productDescription}>Elegant timepiece with advanced features.</p>
          <p style={styles.minBid}><strong>Minimum Bid:</strong> $500</p>
          <p style={styles.closingDate}><strong>Closing Date:</strong> February 10, 2024</p>
          <p style={styles.remainingTime}><strong>Time Remaining:</strong> {renderTimeRemaining()}</p>
          {/* Add bid option and form here */}
          <form style={styles.bidForm} onSubmit={handleBid}>
            <label htmlFor="bidAmount">Your Bid:</label>
            <input
              type="text"
              id="bidAmount"
              name="bidAmount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
            />
            <button style={styles.placeBidButton} type="submit">
              Place Bid
            </button>
          </form>
        </div>
      </section>

      {/* All Bidders */}
      <section style={styles.allBidders}>
        <h3 style={styles.biddersTitle}>All Bidders</h3>
        {/* Display a list of all bidders and their bid prices */}
        <ul style={styles.biddersList}>
          {bidders.map((bidder, index) => (
            <li key={index}>{`${bidder.name} - $${bidder.amount}`}</li>
          ))}
        </ul>
      </section>

      {/* Warning Overlay */}
    {displayWarning && (
      <div style={styles.warningOverlay}>
        <div style={styles.warningMessage}>
          <span style={styles.closeIcon} onClick={() => setDisplayWarning(false)}>
            &times;
          </span>
          Bid amount must be at least ${MINIMUM_BID_AMOUNT}
        </div>
      </div>
    )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>Auction Hub &copy; 2024</p>
        <p style={styles.footerText}>
          <strong>Kaliraj M & Sridhar R</strong>
        </p>
      </footer>
    </div>
  );
};


const styles = {

  warningOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },

  warningMessage: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },

  closeIcon: {
    cursor: 'pointer',
    fontSize: '20px',
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#555',
  },

  imageContainer: {
    display: 'flex',
    overflowX: 'auto',
    gap: '10px',
  },

  header: {
    backgroundColor: '#1a237e',
    padding: '15px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed', 
    top: 0,
    width: '99%', 
    zIndex: 1000,
  },

  productDetails: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    marginTop: '70px',
  },

  productInfo: {
    flex: '1',
    marginLeft: '20px',
    textAlign: 'left', 
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
      top: 'calc(100% + 10px)',
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
    
      productImages: {
        flex: '1',
      },
    
      productImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
      },
    
      productTitle: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#333',
      },
    
      productDescription: {
        color: '#555',
        fontSize: '16px',
        marginBottom: '20px',
      },
    
      minBid: {
        fontSize: '18px',
        color: '#333',
        marginBottom: '10px',
      },
    
      closingDate: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '10px',
      },
    
      remainingTime: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '20px',
      },
    
      bidForm: {
        display: 'flex',
        flexDirection: 'column',
      },
    
      label: {
        fontSize: '16px',
        marginBottom: '5px',
      },
    
      input: {
        padding: '8px',
        marginBottom: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      },
    
      placeBidButton: {
        backgroundColor: '#1a237e',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease-in-out',
      },
    
      allBidders: {
        padding: '20px',
        backgroundColor: '#fff', 
      },
    
      biddersTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
      },
    
      biddersList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      },
    
      bidderItem: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '5px',
      },
  
    productListing: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px',
      marginTop: '70px',
    },
  
    userContainer: {
      display: 'flex',
      alignItems: 'center',
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
    footer: {
      backgroundColor: '#1a237e',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
    footerText: {
      margin: 0,
      color: "#fff",
      fontSize: '14px',
    },
    banner: {
      backgroundColor: '#4285f4',
      textAlign: 'center',
      color: '#fff',
      padding: '50px 0',
    },
    bannerText: {
      fontSize: '24px',
      margin: 0,
    },
  };

  export default ProductDetailsPage;