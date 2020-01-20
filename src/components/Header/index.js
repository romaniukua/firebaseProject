import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="row justify-content-between align-items-center col-12">
                        <Link className='navbar-brand' to='/'>Users App</Link>
                        <div className="navbar-wrapper">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/users'>Users list</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}


export default Header;