import React, { useState, useEffect, useRef } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisibility(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/auctions/list');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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
          <a href="/homepage" style={styles.navLink}>
            Home
          </a>
          <a href="/contact" style={styles.navLink}>
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
      <section style={styles.banner}>
        <h2 style={styles.bannerText}>Welcome to Auction Platform - Your Destination for Exciting Bidding!</h2>
      </section>

      {/* Product Listing */}
      <section style={styles.productListing}>
        {products.map(product => (
          <div style={styles.productCard} key={product.id}>
            <img src= "img/iphone.png" alt={product.name} style={styles.productImage} />
            <h3 style={styles.productTitle}>{product.itemName}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.bidPrice}><strong>Price: ${product.startingPrice}</strong></p>
            {/* <Link to={`/product/${product.id}`} style={styles.navLink}>
              <button style={styles.bidButton}>Bid Now</button>
            </Link> */}
           <Link to="/product" style={styles.navLink}>
             <button style={styles.bidButton}>Bid Now</button>
           </Link>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>Auction Hub &copy; 2024</p>
        <p style={styles.footerText}><strong>Kaliraj M & Sridhar R</strong></p>
      </footer>
    </div>
  );
};










// import React, { useState, useEffect, useRef } from 'react';
// import { VscAccount } from 'react-icons/vsc';
// import { Link, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

// const ContactUs = () => {
//   const [isDropdownVisible, setDropdownVisibility] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const toggleDropdown = () => {
//     setDropdownVisibility(!isDropdownVisible);
//   };

//   const closeDropdown = () => {
//     setDropdownVisibility(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         closeDropdown();
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isDropdownVisible]);

//   const handleLogout = () => {
//     navigate('/');
//   };

//   return (
//     <div>
//       <Helmet>
//         <meta charset="utf-8" />
//         <link rel="icon" href="img/favicon.png" />
//         <link rel="apple-touch-icon" href="img/favicon.png" />
//         <title>Auction Platform</title>
//       </Helmet>
//       {/* Header */}
//       <header style={styles.header}>
//         <div style={styles.logoContainer}>
//           <h1 style={styles.logo}>Auction Platform</h1>
//         </div>
//         <div style={styles.userContainer}>
//           <nav style={styles.nav}>
//             <a href="/homepage" style={styles.navLink}>
//               Home
//             </a>
//             <a href="/contact" style={styles.navLink}>
//               Contact Us
//             </a>
//             <a href="/sellerhome" style={styles.navLink}>
//               Sell
//             </a>
//           </nav>
//           <div style={styles.userIconContainer} onClick={toggleDropdown} ref={dropdownRef}>
//           <VscAccount style={styles.userIcon} />
//           {isDropdownVisible && (
//             <div style={styles.dropdown}>
//               <span
//                 style={styles.dropdownItem}
//                 onMouseOver={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
//                 onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
//               >
//                 Settings
//               </span>
//               <span
//               style={styles.dropdownItem}
//               onMouseOver={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
//               onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
//               onClick={handleLogout} // Add onClick to handle logout
//             >
//               Logout
//             </span>
//             </div>
//           )}
//         </div>
//         </div>
//       </header>
//       {/* Banner */}
//     <section style={styles.banner}>
//         <h2 style={styles.bannerText}>Welcome to Auction Platform - Your Destination for Exciting Bidding!</h2>
//       </section>

//     <div>
//       {/* Product Listing */}
//       <section style={styles.productListing}>
//         {/* Product Cards */}
//         <div style={styles.productCard}>
//           <img src="img/camera.jpg" alt="camera" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Luxury Watch</h3>
//           <p style={styles.productDescription}>Elegant timepiece with advanced features.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         <div style={styles.productCard}>
//           <img src="img/iphone.png" alt="iPhone" style={styles.productImage} />
//           <h3 style={styles.productTitle}>Tech Gadgets Bundle</h3>
//           <p style={styles.productDescription}>Stay up-to-date with the latest tech gadgets.</p>
//           <p style={styles.bidPrice}><strong>Price: $500</strong></p>
//           <Link to="/product" style={styles.navLink}>
//             <button style={styles.bidButton}>Bid Now</button>
//           </Link>
//         </div>

//         {/* Add more product cards as needed */}
//       </section>
//       </div>
//       <div>
//       {/* Footer */}
//       <footer style={styles.footer}>
//         <p style={styles.footerText}>Auction Hub &copy; 2024</p>
//         <p style={styles.footerText}><strong>Kaliraj M & Sridhar R</strong></p>
//       </footer>
//       </div>
//     </div>
//   );
// };

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

  banner: {
    backgroundColor: '#4285f4',
    textAlign: 'center',
    color: '#fff',
    padding: '70px 0', 
    marginTop: '150px',
  },

  productListing: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    marginTop: '30px',
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
    minWidth: '200px',
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
  footer: {
    backgroundColor: '#1a237e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    // position: 'fixed',
    // bottom: 0,
  },
  footerText: {
    margin: 0,
    color: "#fff",
    fontSize: '14px',
  },

  bannerText: {
    fontSize: '24px',
    margin: 0,
  },
};

export default HomePage;
