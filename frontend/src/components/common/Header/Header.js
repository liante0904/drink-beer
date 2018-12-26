import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
    <div className="main-header">
        <Link to="/">Home,</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Rank">Rank</Link>
        <Link to="/Beer">Beer</Link>
        <Link to="/BeerEditPage">BeerEditPage</Link>
    </div>

    );
};

export default Header;