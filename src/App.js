// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import NewsComponent from './components/NewsComponent'; // Adjust the path as necessary
import SignIn from './components/SignIn'; // Import the SignIn component

const App = () => {
    const location = useLocation();

    return (
        <div>
            {/* Conditionally render the Header based on the current route */}
            {location.pathname !== '/sign-in' && <Header />}
            <Routes>
                <Route path="/" element={<NewsComponent />} /> {/* Use element instead of component */}
                <Route path="/sign-in" element={<SignIn />} /> {/* Use element instead of component */}
            </Routes>
        </div>
    );
};

// Wrap the App component with Router
const WrappedApp = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;
