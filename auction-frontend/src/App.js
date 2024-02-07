import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ForgetPassword from './pages/forgetpassword';
import HomePage from './pages/buyer/home';
import SellerHomePage from './pages/seller/seller';
import ProductDetailsPage from './pages/buyer/product';
import SellerForm from './pages/seller/sellproduct';
import ContactUs from './pages/buyer/contact';
import ContactUs1 from './pages/seller/contacts';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/sellerhome" element={<SellerHomePage />} />
        <Route path='/sellerproduct' element={<SellerForm />} />
        <Route path='/contacts' element={<ContactUs1 />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;


