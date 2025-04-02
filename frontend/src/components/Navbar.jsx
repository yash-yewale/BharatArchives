import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css"; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownSelect = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>BharatArchives</h1>
      <div className={`nav-links ${dropdownOpen ? "hide-nav" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      {/* NFT Dropdown */}
      <div className="dropdown">
        <button className="dropbtn" onClick={handleDropdownToggle}>
          NFTs ▼
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <Link to="/nfts" onClick={handleDropdownSelect}>Explore NFTs</Link>
            <Link to="/wallet" onClick={handleDropdownSelect}>My Wallet</Link>
            <Link to="/marketplace" onClick={handleDropdownSelect}>Marketplace</Link>
            <Link to="/nft-trends" onClick={handleDropdownSelect}>Price Tracking</Link>
            <Link to="/wishlist" onClick={handleDropdownSelect}>Wishlist</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
