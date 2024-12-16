import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [orders, setOrders] = useState([]);
    const [showOrders, setShowOrders] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const fetchOrders = async () => {
        const response = await fetch('https://varanasi365.onrender.com/allOrders'); // Adjust the URL to your API
        const data = await response.json();
        setOrders(data);
    };

    useEffect(() => {
        fetchOrders(); // Fetch orders when the component mounts
    }, []);

    const toggleOrders = () => {
        setShowOrders(!showOrders);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/'>
                    <img src={logo} alt='' />
                </Link>
                <p onClick={handleClick} className="varanasi-text">VARANASI</p>
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
                {localStorage.getItem('auth-token') ? (
                    <>
                        <button
                            onClick={() => {
                                localStorage.removeItem('auth-token');
                                window.location.replace('/');
                            }}
                        >
                            Log Out
                        </button>
                        <LocalShippingOutlinedIcon
                            onClick={toggleOrders}
                            fontSize='large'
                            sx={{ cursor: 'pointer' }}
                        />
                    </>
                ) : (
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                )}
                <Link to='/cart'>
                    <ShoppingCartOutlinedIcon fontSize='large' />
                </Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>

            {/* Dialog for order details */}
            <Dialog open={showOrders} onClose={toggleOrders} maxWidth="md" fullWidth>
                <DialogTitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Order Details</span>
                    </div>
                </DialogTitle>
                <DialogContent>
        {orders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px', color: '#555' }}>
                No orders found.
            </div>
        ) : (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Products</TableCell>
                        <TableCell>Total Amount</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.orderId}>
                            <TableCell>{order.orderId}</TableCell>
                            <TableCell>
                                {order.cartItems.map((item, index) => (
                                    <div key={index}>{item.name}</div>
                                ))}
                            </TableCell>
                            <TableCell>₹{order.totalAmount}</TableCell>
                            <TableCell>{order.paymentMethod}</TableCell>
                            <TableCell>{order.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )}
    </DialogContent>
                <DialogActions>
                    <Button onClick={toggleOrders} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Navbar;
