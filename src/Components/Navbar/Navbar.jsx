import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';



const Navbar = () => {

    const[sticky,setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        });
    },[]);

  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="" className="logo-img" />
        <ul>
            <li><Link to='hero' offset={0} smooth={true} duration={500}>Home</Link></li>
            <li><Link to='programs' offset={-260} smooth={true} duration={500}>Program</Link></li>
            <li><Link to='About' offset={-150} smooth={true} duration={500}>About Us</Link></li>
            <li><Link to='campus' offset={-260} smooth={true} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to='contactus-col' offset={-260} smooth={true} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
