import React, { useState } from 'react';
import { Link, useNavigate, Navigate   } from 'react-router-dom';
import '../css/signin.css';
import { Helmet } from 'react-helmet';
import axios from 'axios'; // Import axios
import Header from './components/header';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [userRole, setUserRole] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();

    // if (loggedIn) {
    //   if (userRole === 'Buyer') {
    //     return <Navigate to="/homepage" />;
    //   } else if (userRole === 'Seller') {
    //     return <Navigate to="/seller" />;
    //   } else if (userRole === 'Admin') {
    //     return <Navigate to="/homepage" />;
    //   } else {
    //     // Handle other roles or unexpected scenarios
    //     return <div>Unknown user role</div>;
    //   }
    // }

    if (username.trim() === '' && password.trim() === '') {
      setError('Please enter both username and password.');
      return;
    }

    if (username.trim() === '') {
      setError('Please enter your username.');
      return;
    }

    if (password.trim() === '') {
      setError('Please enter your password.');
      return;
    }

    axios.post('http://localhost:8080/api/users/login', {
      username: username,
      password: password,
    })
    .then(response => {
      console.log(response.data);
      setError('');
      if(response.data === "Buyer"){
      navigate('/buyer');
      }
      else if(response.data === "Seller"){
        navigate('/seller');
      }
      else if(response.data === "Admin"){
        navigate('/admin');
      }
    })
    .catch(error => {
      setError('Incorrect username or password. Please check your credentials and try again.');
    });
  };

  return (    
    <div className="app-container">
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="img/favicon.png" />
        <link rel="apple-touch-icon" href="img/favicon.png" />
        <title>Auction Platform - SignIn</title>
      </Helmet>
      <h1 className="title">Auction Platform</h1>

      <div className="sign-in-container">
        <h2 className="sign-in-heading">Sign In</h2>
        <form className="sign-in-form" onSubmit={handleSignIn}>
           <label htmlFor="username"><strong>Username:</strong></label>
           <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

           <label htmlFor="password"><strong>Password:</strong></label>
           <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

           {error && <p className="error-message">{error}</p>}

           <div className="form-links">
             <Link to="/forgetpassword">Forgot Password?</Link>
             <span className="separator">|</span>
             <Link to="/signup">Sign Up</Link>
           </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>

      <div className="footer">
        <p>&copy; 2024 Done by <strong>Kaliraj M & Sridhar R</strong>. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SignInPage;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../css/signin.css';
// import { Helmet } from 'react-helmet';

// const SignInPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [reenterPassword, setReenterPassword] = useState(''); 
//   const [email, setEmail] = useState(''); 
//   const [role, setRole] = useState('Buyer');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     if (username.trim() === '' && password.trim() === '') {
//       setError('Please enter both username and password.');
//       return;
//     }

//     if (username.trim() === '') {
//       setError('Please enter your username.');
//       return;
//     }

//     if (password.trim() === '') {
//       setError('Please enter your password.');
//       return;
//     }

//     if (username === 'user123' && password === 'Demo@123') {
//       console.log('Signing in...');
//       setError('');
//       navigate('/homepage'); 
//     } else {
//       setError('Incorrect username or password. Please check your credentials and try again.');
//     }
    
//   };

//   return (
//     <div className="app-container">
//             <Helmet>
//         <meta charset="utf-8" />
//         <link rel="icon" href="img/favicon.png" />
//         <link rel="apple-touch-icon" href="img/favicon.png" />
//         <title>Auction Platform - SignIn</title>
//       </Helmet>
//       <h1 className="title">Auction Platform</h1>

//       <div className="sign-in-container">
//         <h2 className="sign-in-heading">Sign In</h2>
//         <form className="sign-in-form" onSubmit={handleSignIn}>
//           <label htmlFor="username"><strong>Username:</strong></label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           <label htmlFor="password"><strong>Password:</strong></label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           {error && <p className="error-message">{error}</p>}

//           <div className="form-links">
//             <Link to="/forgetpassword">Forgot Password?</Link>
//             <span className="separator">|</span>
//             <Link to="/signup">Sign Up</Link>
//           </div>
//           <button type="submit" className="sign-in-button">
//             Sign In
//           </button>
//         </form>
//       </div>

//       <div className="footer">
//         <p>&copy; 2024 Done by <strong>Kaliraj M & Sridhar R</strong>. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;
