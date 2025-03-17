import React from "react";
import { Link, useParams } from "react-router-dom";
import "../style.css";

const categoryNFTs = {
  "indian-kings": [
    { id: 1, name: "King Ashoka", img: "https://via.placeholder.com/300", price: "3.5 ETH" },
    { id: 2, name: "Chhatrapati Shivaji", img: "https://via.placeholder.com/300", price: "5 ETH" }
  ],
  "wars": [
    { id: 3, name: "Battle of Panipat", img: "https://via.placeholder.com/300", price: "4 ETH" }
  ],
  // Add more categories...
};

const NFTCategory = () => {
  const { category } = useParams();
  console.log("Category from URL:", category); // ✅ Debugging log

  const formattedCategory = category.toLowerCase().replace(/\s+/g, "-"); 
  console.log("Formatted Category:", formattedCategory); // ✅ Debugging log
  const nfts = categoryNFTs[formattedCategory];

if (!nfts) {
  return <h2 className="error-message">Category Not Found</h2>;
}

  

  return (
    <div className="nft-page">
      <h1 className="page-title">{category.replace("-", " ")}</h1>
      <div className="nft-grid">
        {nfts.map((nft) => (
          <Link key={nft.id} to={`/nfts/details/${nft.id}`} className="nft-card">
            <img src={nft.img} alt={nft.name} />
            <h2>{nft.name}</h2>
            <p>Price: {nft.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NFTCategory;
