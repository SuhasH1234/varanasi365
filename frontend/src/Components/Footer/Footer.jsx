import React from 'react'
import './Footer.css'
import wlogo from '../Assets/whatsapp_logo.png'
import ilogo from '../Assets/instagram_logo.png'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>VARANASI</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={wlogo} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={ilogo} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
