import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = activeTab === "login" ? "login" : "register";
    const apiUrl = `http://127.0.0.1:5000/api/${endpoint}`;

    if (activeTab === "register" && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const requestBody = {
        email: formData.email,
        password: formData.password,
      };

      if (activeTab === "register") {
        requestBody.username = formData.username;
      }

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (data.success) {
        alert(`${activeTab} successful!`);

        if (activeTab === "login") {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("userId", data.user.id);
          localStorage.setItem("userEmail", data.user.email);
          
          window.dispatchEvent(new Event("storage")); // ✅ Ensure React Updates
          
          setTimeout(() => {
            navigate("/");
          }, 100);
        } else {
          setActiveTab("login");
        }
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="tabs">
          <button className={activeTab === "login" ? "active" : ""} onClick={() => setActiveTab("login")}>
            Login
          </button>
          <button className={activeTab === "register" ? "active" : ""} onClick={() => setActiveTab("register")}>
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === "register" && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
          )}
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleInputChange} />
          {activeTab === "register" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          )}

          <button type="submit">
            {activeTab === "login" ? "Login" : "Register"}
          </button>
        </form>

        {activeTab === "login" ? (
          <p className="switch-tab">
            New user? <span onClick={() => setActiveTab("register")}>Register</span>
          </p>
        ) : (
          <p className="switch-tab">
            Already have an account? <span onClick={() => setActiveTab("login")}>Login</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
