import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import cartlogo from './assests/sale.gif'
import profile from './assests/profile.gif'

const Navbar = () => {
  return (
    <nav>
    <Link to="/"><button className='btn btn-primary lg'>Home</button></Link>
    <Link to="/login"><button className='btn btn-primary lg'>Login</button></Link>
    <Link to="/signup"><button className='btn btn-primary lg'>SignUp</button></Link>

    <Link to="/userprofile">
        <img src={profile} alt="profile" />
    </Link>


<Link to="/cart">
    <div className="cart-btn">
        <img src={cartlogo} alt="cart" />
        <span className="cart-items">0</span>
    </div>
    </Link>

    </nav>
  )
}

export default Navbar
