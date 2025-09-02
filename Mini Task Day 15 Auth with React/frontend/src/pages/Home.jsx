// frontend/src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Auth App 🚀</h1>
      <p>Please login or register to continue.</p>

      <div className="btn-group">
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
