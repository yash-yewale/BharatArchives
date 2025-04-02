import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../style.css";

// Function to dynamically import images from src/assets
const getImagePath = (imageName) => {
    try {
        return require(`../assets/${imageName}`);
    } catch (err) {
        console.error(`Image not found: ${imageName}`);
        return require("../assets/placeholder.jpg"); // Fallback image
    }
};

const NFTCategory = () => {
    const { category } = useParams();  // Get category from URL
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchNFTs = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://127.0.0.1:5000/api/nfts?category=${category}`);
                const data = await response.json();
                
                if (data.length === 0) {
                    setError(true);
                } else {
                    setNfts(data);
                    setError(false);
                }
            } catch (error) {
                console.error("Error fetching NFTs:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchNFTs();
    }, [category]);

    if (loading) {
        return <h2 className="loading-message">Loading NFTs...</h2>;
    }

    if (error) {
        return <h2 className="error-message">No NFTs found for this category.</h2>;
    }

    return (
        <div className="nft-page">
            <h1 className="page-title">{category.replace("-", " ")}</h1>
            <div className="nft-grid">
                {nfts.map((nft) => (
                    <Link key={nft.id} to={`/nfts/details/${nft.id}`} className="nft-card">
                        <img src={nft.image_url.startsWith("http") ? nft.image_url : getImagePath(nft.image_url)} alt={nft.name} />
                        <h2>{nft.name}</h2>
                        <p>Price: {nft.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NFTCategory;
