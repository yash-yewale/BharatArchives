import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NFTs from "./components/NFTs";
import NFTCategory from "./components/NFTCategory";
import NFTDetails from "./components/NFTDetails";
import Wallet from "./components/Wallet";
import Marketplace from "./components/Marketplace";
import PriceTracker from "./components/PriceTracker";
import About from "./components/About";
import Login from "./components/login";
import Footer from "./components/Footer";
import "./style.css";

// ✅ Protected Route Component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <Router>
      {isAuthenticated && <Navbar />} {/* ✅ Navbar Visible After Login */}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/about" element={<ProtectedRoute element={<About />} />} />
        <Route path="/nfts" element={<ProtectedRoute element={<NFTs />} />} />
        <Route path="/nfts/category/:category" element={<ProtectedRoute element={<NFTCategory />} />} />
        <Route path="/nfts/details/:id" element={<ProtectedRoute element={<NFTDetails />} />} />
        <Route path="/wallet" element={<ProtectedRoute element={<Wallet />} />} />
        <Route path="/marketplace" element={<ProtectedRoute element={<Marketplace />} />} />
        <Route path="/nft-trends" element={<ProtectedRoute element={<PriceTracker />} />} />
      </Routes>

      {isAuthenticated && <Footer />} {/* ✅ Footer Visible After Login */}
    </Router>
  );
}

export default App;
