import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>

                <Link to="/">Home</Link>
                <Link to="/restrurent">Reatrurent</Link>
                <Link to="/order">Order</Link>

            </nav>

        </div>
    );
};

export default Header;