import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
    <div className="main-header">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/Login">Login</Link></p>
        <p><Link to="/Rank">Rank</Link></p>
        <p><Link to="/Beers">Beers</Link></p>
        <p><Link to="/BeerEditorPage">BeerEditorPage</Link></p>
    </div>

    );
};

export default Header;