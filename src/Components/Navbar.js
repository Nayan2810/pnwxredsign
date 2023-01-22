import React from "react";
import { NavLink } from 'react-router-dom';
import image from './Images/pnwx.png';

// import $ from 'jquery';


const Navbar = () =>  {
  return <nav> 
    <img src={image} alt='logo' className="nimg" />
    <NavLink className="nav" id="hm" to='/home'>HOME</NavLink>
    <NavLink className="nav" id="am" to='/about'>ABOUT Us</NavLink>
    <NavLink className="nav" id="rsm" to='/resume'>ACCESSORIES</NavLink>
    <NavLink className="nav" id="pro" to='/project'>PARTS</NavLink>
    <NavLink className="nav" id='cnt' to='/cont'>CONTACT</NavLink>
  </nav>  ;


}
export default Navbar;