import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");


  return (
    <>
      <nav className="navbar">
        <div className="logo">Quiz-Whiz</div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/quiz" onClick={() => setMenuOpen(false)}>Topics</Link></li>
          <li><Link to="/leaderboard" onClick={() => setMenuOpen(false)}>Leaderboard</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li>
            {token ? (
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                👨‍💻 
              </Link>
            ) : (
              <Link to="/signin" onClick={() => setMenuOpen(false)}>
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </nav>

    </>

  );
};

export default Navbar;