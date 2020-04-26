import React from 'react';

import {NavLink, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../asset/home.svg';
import './header.style.scss';

const Header = () =>(
    <div className="header">
        <div className="container">
            <div className="header-container">
    <Link to='/' className='logo-container' >
    <Logo  className='logo'/>
    </Link>

    <div className="navigation">
        <NavLink  to='/find-a-lecturer'  className="nav-item nav-link" activeClassName='active' >Find a Lecturer</NavLink>
        <NavLink to='/rate-a-lecturer'  className="nav-item nav-link" activeClassName='active' >Rate a Lecturer </NavLink>
        <NavLink to='/rate-a-school'  className="nav-item nav-link" activeClassName='active' >Rate a School</NavLink>
        <NavLink to='/signin' className="nav-item button-sign-in">SIGN IN</NavLink>
        <NavLink to='/signup' className="nav-item button-sign-up ">SIGN UP</NavLink>




    </div>
    </div>

    </div>
    </div>


)

export default Header;