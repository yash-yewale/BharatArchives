import React from "react";
import { Link } from "react-router-dom";
import "../style.css"; 

const NFTSidebar = () => {
  return (
    <div className="nft-sidebar">
      <h2>NFT Marketplace</h2>
      <Link to="/nfts">Explore NFTs</Link>
      <Link to="/wallet">My Wallet</Link>
      <Link to="/marketplace">Marketplace</Link>
      <Link to="/nft-trends">Price Tracking</Link>
    </div>
  );
};

export default NFTSidebar;
