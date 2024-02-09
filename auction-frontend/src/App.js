import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ForgetPassword from './pages/forgetpassword';
import HomePage from './pages/buyer/home';
import SellerHomePage from './pages/seller/seller';
import AdminHomePage from './pages/admin/admin';
import ProductDetailsPage from './pages/buyer/product';
import SellerForm from './pages/seller/sellproduct';
import ContactUs from './pages/buyer/contact';
import ContactUs1 from './pages/seller/contacts';
import ContactUs2 from './pages/admin/contacts';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/buyer" element={<HomePage />} />
        <Route path="/seller" element={<SellerHomePage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path='/sellerproduct' element={<SellerForm />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/contacts' element={<ContactUs1 />} />
        <Route path='/contacta' element={<ContactUs2 />} />
      </Routes>
    </Router>
  );
};

export default App;


