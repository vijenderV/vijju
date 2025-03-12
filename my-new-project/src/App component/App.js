import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetail from './components/PropertyDetail';
import Checkout from './pages/Checkout';
import { Router } from 'react-router-dom';
import './styles/App.css'; // Add your CSS here

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        </Routes>
        </Router> 
        )
