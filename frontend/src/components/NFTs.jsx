import React from "react";

import "../style.css";
import { useNavigate } from "react-router-dom"; 

const nftCategories = [
  { id: "Kings", name: "Kings" },
  { id: "Wars", name: "Wars" },
  { id: "manuscripts", name: "Manuscripts" },
  { id: "independence", name: "Independence"},
  { id: "artifacts", name: "Artifacts" },
  { id: "rare-paintings", name: "Rare Paintings" },
];

const NFTs = () => {
  const navigate = useNavigate(); // ✅ Use navigate for better routing

  return (
    <div className="nft-page">
      <h1 className="page-title">Explore NFTs</h1>
      <p className="page-subtitle">Choose a category to view NFTs.</p>

      <div className="nft-grid">
        {nftCategories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => navigate(`/nfts/category/${category.id}`)}


          >
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTs;