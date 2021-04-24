import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg justify-content-around'>
            <NavLink exact to='/' className="navbar-brand">
                Github React App
            </NavLink>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink exact to='/' className='nav-link'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;