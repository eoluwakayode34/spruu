import React, { useState } from 'react';

import {NavLink, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../asset/home.svg';
import './header.style.scss';
import  Burger from '../Burger/burger.component';
import Menu from '../Menu/menu.component'


const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="header">
        <div className="container">
            <div className="header-container">
    <Link to='/' className='logo-container' >
    <Logo  className='logo'/>
    </Link>

    <Menu open={open} setOpen={setOpen}/>
    <Burger open={open} setOpen={setOpen} />

    <div className="navigation">
        <NavLink  to='/find-a-lecturer'  className="nav-item nav-link" activeClassName='active' >Find A Lecturer</NavLink>
        <NavLink to='/rate-a-lecturer'  className="nav-item nav-link" activeClassName='active' >Rate A Lecturer </NavLink>
        <NavLink to='/rate-a-school'  className="nav-item nav-link" activeClassName='active' >Rate A School</NavLink>
        <NavLink to='/signin' className="nav-item button-sign-in">SIGN IN</NavLink>
        <NavLink to='/signup' className="nav-item button-sign-up ">SIGN UP</NavLink>




    </div>
    </div>

    </div>
    </div>

    )
}
    



export default Header;