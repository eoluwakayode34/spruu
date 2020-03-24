import React from 'react';

import {Link} from 'react-router-dom';
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
        <Link  to='/find-a-lecturer' className="nav-item nav-link">Find a Lecturer</Link>
        <Link to='/rate-a-lecturer' className="nav-item nav-link">Rate a Lecturer </Link>
        <Link to='/rate-a-school' className="nav-item nav-link">Rate a School</Link>
        <Link to='/signin' className="nav-item button-sign-in">SIGN IN</Link>
        <Link to='/signup' className="nav-item button-sign-up ">SIGN UP</Link>




    </div>
    </div>

    </div>
    </div>


)

export default Header;