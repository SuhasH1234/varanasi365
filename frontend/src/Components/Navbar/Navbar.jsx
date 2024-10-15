import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Link to='/'>
                <img src={logo} alt='' />
            </Link>
            <p className="varanasi-text">VARANASI</p>
        </div>

        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shop")}} ><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/> : <></> }</li>
            <li onClick={() => {setMenu("Saree")}}><Link style={{textDecoration: 'none'}} to='/saree'>Saree</Link> {menu==="Saree"?<hr/> : <></> }</li>
            <li onClick={() => {setMenu("Stone Carvings")}}><Link style={{textDecoration: 'none'}} to='/stone-carvings'>Stone Carvings</Link> {menu==="Stone Carvings"?<hr/> : <></> }</li>
            <li onClick={() => {setMenu("Bangles and Bracelets")}}><Link style={{textDecoration: 'none'}} to='/bangles-bracelets'>Bangles and Bracelets</Link> {menu==="Bangles and Bracelets"?<hr/> : <></> }</li>
            <li onClick={() => {setMenu("Rudraksha Mala")}}><Link style={{textDecoration: 'none'}} to='/rudraksha-mala'>Rudraksha Mala</Link> {menu==="Rudraksha Mala"?<hr/> : <></> }</li>
            <li onClick={() => {setMenu("Gulabi Minakari")}}><Link style={{textDecoration: 'none'}} to='/gulabi-minakari'>Gulabi Minakari</Link> {menu==="Gulabi Minakari"?<hr/> : <></> }</li>
            <li onClick={() => {setMenu("Wooden Toys")}}><Link style={{textDecoration: 'none'}} to='/wooden-toys'>Wooden Toys</Link> {menu==="Wooden Toys"?<hr/> : <></> }</li>
            <li onClick={() => {setMenu("Hand Knotted Carpets")}}><Link style={{textDecoration: 'none'}} to='/carpets'>Hand Knotted Carpets</Link> {menu==="Hand Knotted Carpets"?<hr/> : <></> }</li>
        </ul>
        
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><ShoppingCartIcon /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar;