// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">NewsWiz</div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/world">World</Link>
                <Link to="/business">Business</Link>
                <Link to="/technology">Technology</Link>
                <Link to="/sports">Sports</Link>
                <Link to="/entertainment">Entertainment</Link>
            </nav>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">Search</button>
            </div>
            <Link to="/sign-in">
                <button className="sign-in-button">Sign In</button>
            </Link>
        </header>
    );
};

export default Header;
