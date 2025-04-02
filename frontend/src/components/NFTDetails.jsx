import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style.css"; // Ensure CSS file is linked

const NFTDetails = () => {
    const { id } = useParams();  // Get NFT ID from URL
    const [nft, setNft] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
// Function to dynamically import images from src/assets
const getImagePath = (imageName) => {
  try {
      return require(`../assets/${imageName}`);
  } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return require("../assets/placeholder.jpg"); // Fallback image
  }
};
    useEffect(() => {
        const fetchNFTDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/nfts/${id}`);
                const data = await response.json();

                if (data.error) {
                    setError(true);
                } else {
                    setNft(data);
                }
            } catch (error) {
                console.error("Error fetching NFT details:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchNFTDetails();
    }, [id]);

    if (loading) {
        return <h2 className="loading-message">Loading NFT Details...</h2>;
    }

    if (error) {
        return <h2 className="error-message">NFT not found.</h2>;
    }

    return (
        <div className="nft-details-container">
            <div className="nft-details-card">
                <img src={nft.image_url.startsWith("http") ? nft.image_url : getImagePath(nft.image_url)} alt={nft.name} />
                <div className="nft-info">
                    <h1>{nft.name}</h1>
                    <p className="nft-description">{nft.description}</p>
                    <p className="nft-price">Price: <span>{nft.price} MATIC</span></p>
                    <a href={`https://opensea.io/account${id}`} target="_blank" rel="noopener noreferrer" className="buy-button">
                        Buy on OpenSea
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NFTDetails;
