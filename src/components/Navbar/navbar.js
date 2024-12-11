import React from 'react'
import './navbar.css';
import logo from '../../assests/logo.png'
import contact from '../../assests/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='desktopMenu'>
            <Link className='DesktopMenuListItem'></Link>
            <Link className='DesktopMenuListItem'></Link>
            <Link className='DesktopMenuListItem'></Link>
            <Link className='DesktopMenuListItem'></Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contact} alt='' className='desktopMenuImg' />
            Contact Me 
        </button>
      
    </nav>
  )
}

export default Navbar
