import React from "react";
import { useParams } from "react-router-dom";

const NFTDetails = () => {
  const { id } = useParams();
  return (
    <div className="nft-details">
      <h1>NFT Details Page</h1>
      <p>Showing details for NFT ID: {id}</p>
    </div>
  );
};

export default NFTDetails;
