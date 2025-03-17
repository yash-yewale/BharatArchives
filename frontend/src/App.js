import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NFTs from "./components/NFTs";
import NFTCategory from "./components/NFTCategory";
import NFTDetails from "./components/NFTDetails";
import Wallet from "./components/Wallet";
import Marketplace from "./components/Marketplace";
import PriceTracker from "./components/PriceTracker";
import About from "./components/About";

import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/nfts/category/:category" element={<NFTCategory />} />
        <Route path="/nfts/details/:id" element={<NFTDetails />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/nft-trends" element={<PriceTracker />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
