import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
    return (

        <ul className="navbar-nav">

            <li className="nav-item ">
                <Link to='/product' className="nav-link">Product</Link>
            </li>
            <li className="nav-item ">
                <Link to='/login' className="nav-link">Login</Link>
            </li>
            <li className="nav-item ">
                <Link to='/signup' className="nav-link">Registry</Link>
            </li>
        </ul>
    )
};

export default SignedInLinks;