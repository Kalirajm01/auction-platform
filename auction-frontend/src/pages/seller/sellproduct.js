import React, { useState } from 'react';
import '../../css/sellerform.css';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function SellerForm() {
  const [itemName, setItemName] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [auctionStartTime, setAuctionStartTime] = useState('');
  const [auctionEndTime, setAuctionEndTime] = useState('');
  const [bidIncrement, setBidIncrement] = useState('');
  const [productImage, setProductImage] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      itemName,
      startingPrice,
      auctionStartTime,
      auctionEndTime,
      bidIncrement,
      productImage,
      description
    };

    fetch('http://localhost:8080/api/auctions/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create auction');
      }
      return response.json();
    })
    .then(data => {
      console.log('Auction created successfully:', data);
      // Optionally, perform any additional actions after creating the auction
      navigate('/sellerhome'); // Redirect to success page or any other action
    })
    .catch(error => {
      console.error('Error creating auction:', error);
    });
  };

  return (
    <div>
      <h1>Create Auction</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Item Name:</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />

        <label>Starting Price:</label>
        <input type="number" value={startingPrice} onChange={(e) => setStartingPrice(e.target.value)} />

        <label>Auction Start Time:</label>
        <input type="datetime-local" value={auctionStartTime} onChange={(e) => setAuctionStartTime(e.target.value)} />

        <label>Auction End Time:</label>
        <input type="datetime-local" value={auctionEndTime} onChange={(e) => setAuctionEndTime(e.target.value)} />

        <label>Bid Increment:</label>
        <input type="number" value={bidIncrement} onChange={(e) => setBidIncrement(e.target.value)} />

        <label>Product Image URL:</label>
        <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
}

export default SellerForm;




// import React, { useState } from 'react';
// import '../../css/sellerform.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';


// function SellerForm() {
//   const [itemName, setItemName] = useState('');
//   const [startingPrice, setStartingPrice] = useState('');
//   const [auctionStartTime, setAuctionStartTime] = useState('');
//   const [auctionEndTime, setAuctionEndTime] = useState('');
//   const [bidIncrement, setBidIncrement] = useState('');
//   const [productImage, setProductImage] = useState('');
//   const [description, setDescription] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
  
//     const formData = new FormData();
//     formData.append('itemName', itemName);
//     formData.append('startingPrice', startingPrice);
//     formData.append('auctionStartTime', auctionStartTime);
//     formData.append('auctionEndTime', auctionEndTime);
//     formData.append('bidIncrement', bidIncrement);
//     formData.append('productImage', productImage);
//     formData.append('description', description);
  
//     fetch('http://localhost:8080/api/auctions/create', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to create auction');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Auction created successfully:', data);
//       // Optionally, perform any additional actions after creating the auction
//     })
//     .catch(error => {
//       console.error('Error creating auction:', error);
//     });
//   };

  

//   return (
//     <div>
//       <h1>Create Auction</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>Item Name:</label>
//         <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />

//         <label>Starting Price:</label>
//         <input type="number" value={startingPrice} onChange={(e) => setStartingPrice(e.target.value)} />

//         <label>Auction Start Time:</label>
//         <input type="datetime-local" value={auctionStartTime} onChange={(e) => setAuctionStartTime(e.target.value)} />

//         <label>Auction End Time:</label>
//         <input type="datetime-local" value={auctionEndTime} onChange={(e) => setAuctionEndTime(e.target.value)} />

//         <label>Bid Increment:</label>
//         <input type="number" value={bidIncrement} onChange={(e) => setBidIncrement(e.target.value)} />

//         <label>Product Image:</label>
//         <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />

//         <label>Description:</label>
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

//         <button type="submit">Create Auction</button>
//       </form>
//     </div>
//   );
// }

// export default SellerForm;


// const SellerForm = () => {
//   const navigate = useNavigate();

//   const [itemName, setItemName] = useState('');
//   const [startingPrice, setStartingPrice] = useState('');
//   const [auctionStartTime, setAuctionStartTime] = useState('');
//   const [auctionEndTime, setAuctionEndTime] = useState('');
//   const [bidinc, setbidinc] = useState('');
//   const [productImage, setProductImage] = useState(null);
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState('');

//   const handleListing = async (e) => {
//       e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/auctions/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             itemName,
//             startingPrice: parseFloat(startingPrice),
//             auctionStartTime,
//             auctionEndTime,
//             bidIncrement: parseFloat(bidinc),
//             productImage,
//             description
//         }),
//       });

//       if (response.ok) {
//         // Assume a successful added the auction after a short delay
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         // Redirect to the seller home page after successful adding the auction
//         navigate('/sellerhome');
//       } else {
//         const errorMessage = await response.text();
//         setError(`Error during signup: ${errorMessage}`);
//       }
//     } catch (error) {
//       setError('Error during signup. Please try again.');
//     }

//        // Add your logic to handle item listing, including the product image
//        console.log('Item listed successfully!');
//        console.log('Item Name:', itemName);
//        console.log('Starting Price:', startingPrice);
//        console.log('Bid Increament:', bidinc);
//        console.log('Auction Start Time:', auctionStartTime);
//        console.log('Auction End Time:', auctionEndTime);
//        console.log('Product Image:', productImage);
//        console.log('Description:', description);
//   };
    

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProductImage(file);
//   };

//   const handleBack = () => {
//     // Redirect to the home page
//     navigate('/sellerhome');
//   };

//   const handlestartingprice = (e) => {
//     const input = e.target.value;
//     // Check if input is a valid number (integer)
//     if (/^\d*$/.test(input)) {
//       setStartingPrice(input);
//     }
//   };

//   const handlebidinc = (e) => {
//     const input = e.target.value;
//     // Check if input is a valid number (integer)
//     if (/^\d*$/.test(input)) {
//       setbidinc(input);
//     }
//   };

//   return (
//     <div className="seller-form-wrapper">
//       <Helmet>
//         <meta charset="utf-8" />
//         <link rel="icon" href="img/favicon.png" />
//         <link rel="apple-touch-icon" href="img/favicon.png" />
//         <title>Auction Platform</title>
//       </Helmet>
//       <h1>Auction Platform Seller Dashboard</h1>
//       <button className="back-button" onClick={handleBack}>Back</button>
//       <div className="seller-form-container">
//         <h2>List Item</h2>
//         <label>Item Name:</label>
//         <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />

//         <label>Starting Price:</label>
//         <input type="tel" pattern="[0-9]*" value={startingPrice} onChange={handlestartingprice} />

//         <label>Auction Start Time:</label>
//         <input type="datetime-local" value={auctionStartTime} onChange={(e) => setAuctionStartTime(e.target.value)} />

//         <label>Auction End Time:</label>
//         <input type="datetime-local" value={auctionEndTime} onChange={(e) => setAuctionEndTime(e.target.value)} />

//         <label>Bid Increment: </label>
//         <input type="tel" pattern="[0-9]*" value={bidinc} onChange={handlebidinc} />

//         <label>Product Image:</label>
//         <input type="file" onChange={handleImageChange} />

//         <label>Description:</label>
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

//         <button onClick={handleListing}>List Item</button>
//       </div>
//     </div>
//   );
// };

// export default SellerForm;
