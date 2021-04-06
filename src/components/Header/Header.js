import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="header container ">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    <div className="logo">
                        <h3>Phone Shop</h3>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className="btn-book" to="/book">Book</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};
export default Header;