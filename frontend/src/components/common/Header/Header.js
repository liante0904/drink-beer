import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({postId, logged, onRemove}) => {

    return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Rank">Rank</Link></li>
            <li><Link to="/Beer">Beer</Link></li>
        </ul>
    </div>

    );
};

export default Header;