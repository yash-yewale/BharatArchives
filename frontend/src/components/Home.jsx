import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// ✅ Import Images
import background from "../assets/background.jpg";
import nft1 from "../assets/nft1.jpg";
import nft2 from "../assets/nft2.jpg";
import nft3 from "../assets/nft3.jpg";
import nft4 from "../assets/nft4.jpg";
import timeline1 from "../assets/timeline1.jpg";
import timeline2 from "../assets/timeline2.jpg";
import timeline3 from "../assets/timeline3.jpg";
import timeline4 from "../assets/timeline4.jpg";
import timeline5 from "../assets/timeline5.jpg";
import timeline6 from "../assets/timeline6.jpg";
import timeline7 from "../assets/timeline7.jpg";
import timeline8 from "../assets/timeline8.jpg";
import blockchain from "../assets/blockchain.jpg";

// Add this function in your `Home.jsx` file
const scrollTimeline = (direction) => {
  const container = document.querySelector(".timeline");
  const scrollAmount = 300; // Adjust as needed

  if (direction === "left") {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* 🔶 Hero Section with Parallax Effect */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="glowing-text">Preserving India's Heritage</h1>
          <p className="hero-subtext">
            Own a piece of history through digital collectibles secured on blockchain.
          </p>
          <button className="cta-button" onClick={() => navigate("/nfts")}>
            Explore NFTs
          </button>
        </div>
      </section>

      {/* 🖼️ Featured NFTs Section */}
      <section className="featured-nfts">
        <h2>Featured Historical NFTs</h2>
        <div className="nft-grid">
          <div className="nft-card">
            <img src={nft1} alt="Ancient Manuscript NFT" />
            <h3>Chhatrapati Shivaji Maharaj - The Visionary King</h3>
            <p>This historic portrait of Chhatrapati Shivaji Maharaj, preserved in the British Museum, London, depicts the legendary Maratha warrior who built Swarajya against the mighty Mughal empire. A symbol of valor, strategy, and governance, this NFT immortalizes the legacy of one of India’s greatest kings.</p>
          </div>
          <div className="nft-card">
            <img src={nft2} alt="Royal Painting NFT" />
            <h3>Victory at Dhaka – 1971 </h3>
            <p> On December 16, 1971, history was made as 93,000 Pakistani soldiers surrendered to the Indian Armed Forces in Dhaka, marking the largest military surrender since World War II. This momentous event led to the creation of Bangladesh, showcasing India's decisive victory and strategic brilliance. Own a piece of history with this exclusive NFT.</p>
          </div>
          <div className="nft-card">
            <img src={nft3} alt="Royal Painting NFT" />
            <h3> Bhagat Singh’s Last Letter to His Sister</h3>
            <p>A rare digital collectible preserving Bhagat Singh’s heartfelt letter to his sister before his execution. A testament to his unwavering spirit, courage, and sacrifice for India’s independence. Own a piece of history that immortalizes the words of a revolutionary legend.</p>
          </div><div className="nft-card">
            <img src={nft4} alt="Royal Painting NFT" />
            <h3>Subhas Chandra Bose & INA - The Forgotten Army</h3>
            <p>A rare photograph of Netaji Subhas Chandra Bose alongside the Indian National Army (INA), symbolizing India's fight for independence beyond its borders. This NFT captures the moment when Netaji ignited the slogan "Give me blood, and I will give you freedom!", inspiring millions to join the movement against British rule.</p>
          </div>
        </div>
      </section>

  {/* 📜 Interactive Timeline Section */}
<section className="timeline-section">
  <h2>India’s History on Blockchain</h2>

  {/* Scroll Container */}
  <div className="timeline-container">
    
    {/* Left Scroll Button */}
    <button className="scroll-btn left-btn" onClick={() => scrollTimeline("left")}>❮</button>

    {/* Timeline Items */}
    <div className="timeline">
      {[
        { id: 1, img: timeline1, title: "Vedic Civilization - 1500 BCE", desc: "The Vedas were composed, forming the foundation of Hindu philosophy and rituals." },
        { id: 2, img: timeline2, title: "Maurya Empire - 321 BCE", desc: "Chandragupta Maurya established one of the largest empires in India." },
        { id: 3, img: timeline3, title: "Gupta Golden Age - 319 CE", desc: "A period of great achievements in science, literature, and art." },
        { id: 4, img: timeline4, title: "Delhi Sultanate - 1206 CE", desc: "The beginning of Muslim rule in India, influencing culture and architecture." },
        { id: 5, img: timeline5, title: "Mughal Empire - 1526 CE", desc: "A dynasty that left behind stunning architecture like the Taj Mahal." },
        { id: 6, img: timeline6, title: "Maratha Empire - 1674 CE", desc: "Founded by Chhatrapati Shivaji Maharaj, the Marathas established a powerful kingdom known for their guerrilla warfare and strong naval presence." },
        { id: 7, img: timeline7, title: "British Rule - 1857 CE", desc: "India's first war of independence against British colonial rule." },
        { id: 8, img: timeline8, title: "Independence - 1947 CE", desc: "India finally gained independence from British rule on August 15th, 1947." }
      ].map((event) => (
        <div key={event.id} className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-front">
              <img src={event.img} alt={event.title} />
              <h3>{event.title}</h3>
            </div>
            <div className="timeline-back">
              <p>{event.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right Scroll Button */}
    <button className="scroll-btn right-btn" onClick={() => scrollTimeline("right")}>❯</button>
  </div>
</section>




      {/* 🌍 Blockchain Transparency & Security */}
<section className="blockchain-info">
  <h2>🔗 How Blockchain Secures Your NFTs</h2>
  <div className="blockchain-content">
    {/* Left - Explanation */}
    <div className="blockchain-text">
      <h3>🔒 Secure & Immutable</h3>
      <p>Each NFT is permanently recorded on the <strong>Polygon Blockchain</strong>, ensuring authenticity and preventing fraud.</p>

      <h3>⚡ Instant Verification</h3>
      <p>Owners can verify NFT details on-chain, view transaction history, and confirm rarity levels.</p>

      <h3>📝 Smart Contract</h3>
      <p>Our NFTs are secured via smart contracts. <a href="https://polygonscan.com/" target="_blank" rel="noopener noreferrer">View on PolygonScan</a></p>
    </div>

    {/* Right - Animated Blockchain Visual */}
    <div className="blockchain-visual">
      <img src={blockchain} alt="Blockchain Security" />
      <p className="blockchain-note">Polygon-based NFTs ensure transparency & security.</p>
    </div>
  </div>

  {/* Real-Time Blockchain Metrics */}
  <div className="blockchain-metrics">
    <div className="metric-box">
      <h4>📈 Live NFT Count</h4>
      <p>🔥 10,235 Minted</p>
    </div>
    <div className="metric-box">
      <h4>🔗 Smart Contract</h4>
      <p>✅ Audited & Verified</p>
    </div>
    <div className="metric-box">
      <h4>⏳ Recent Transactions</h4>
      <p>💰 2 NFTs Sold in Last 1 Hour</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
