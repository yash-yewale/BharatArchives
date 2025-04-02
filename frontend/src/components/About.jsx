import React, { useState } from "react";
import "../style.css";

// Import images
import heroImage from "../assets/heritage.jpg";
import blockchain from "../assets/blockchain.jpg";

const FAQData = [
  {
    question: "How do NFTs help preserve history?",
    answer: "NFTs ensure the authenticity of digital assets, preventing duplicates and securing ownership.",
  },
  {
    question: "How can I contribute to BharatArchives?",
    answer: "You can purchase NFTs, submit historical documents, or collaborate with us for digital preservation.",
  },
  {
    question: "What happens when I buy an NFT?",
    answer: "You receive proof of ownership on the blockchain and contribute to preserving Indian history.",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay">
          <h1>Preserving India's Legacy for the Digital Future</h1>
          <p>Using blockchain and NFTs to secure Indian heritage forever.</p>
        </div>
      </section>

      {/* Why Preserve Indian Heritage? */}
      <section className="why-preserve">
        <h2>Why Preserve Indian Heritage?</h2>
        <p>
          India's history spans thousands of years, holding treasures of knowledge, art, and culture.
          Digital preservation ensures that future generations can experience and learn from this vast heritage.
        </p>
      </section>

      {/* What are NFTs? */}
      <section className="what-are-nfts">
        <h2>What Are NFTs?</h2>
        <p>
          Non-Fungible Tokens (NFTs) are unique digital assets stored on the blockchain.
          They provide <strong>proof of authenticity</strong> and <strong>ownership</strong> of historical artifacts in digital form.
        </p>
      </section>

      {/* Blockchain Transparency */}
      <section className="blockchain-info">
        <h2>How Blockchain Secures Your NFTs</h2>
        <div className="blockchain-visual">
          <img src={blockchain} alt="Blockchain Security" />
          <p className="blockchain-note">
            Every NFT is immutably stored on the Polygon blockchain, ensuring transparency & security.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {FAQData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <h3>
              {item.question} <span>{openIndex === index ? "🔼" : "🔽"}</span>
            </h3>
            {openIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
