import React, { useState, useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    Typography,
} from '@mui/material';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [open, setOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [utrNumber, setUtrNumber] = useState('');
    const [promoCode, setPromoCode] = useState(''); // State for promo code
    const [discountedTotal, setDiscountedTotal] = useState(getTotalCartAmount()); // State for discounted total
    const totalAmount = getTotalCartAmount();

    const handleProceed = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlePayment = async () => {
        const items = Object.keys(cartItems).map((itemId) => {
            if (cartItems[itemId] > 0) {
                const product = all_product.find((prod) => prod.id === Number(itemId));
                return {
                    name: product.name,
                    quantity: cartItems[itemId],
                    price: product.new_price,
                };
            }
            return null;
        }).filter(item => item !== null);
    
        if (paymentMethod === 'Cash on Delivery') {
            await fetch('https://varanasi365.onrender.com/createOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    paymentMethod: 'Cash on Delivery',
                    cartItems: items,
                    totalAmount: discountedTotal, // Use discounted total here
                }),
            });
            alert('Order placed successfully!');
        } else if (paymentMethod === 'UPI') {
            if (!utrNumber) return alert('Please enter UTR number');
            await fetch('https://varanasi365.onrender.com/createOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    paymentMethod: 'UPI',
                    cartItems: items,
                    totalAmount: discountedTotal, // Use discounted total here
                    utrNumber,
                }),
            });
            alert('Payment successful!');
        }
        handleClose();
    };

    const handlePromoCodeSubmit = () => {
        if (promoCode === "WELC123") {
            const discount = totalAmount * 0.1; // Calculate 10% discount
            setDiscountedTotal(totalAmount - discount); // Apply discount
            alert("Promo code applied! You received a 10% discount.");
        } else {
            alert("Invalid promo code.");
        }
        setPromoCode(''); // Clear the promo code input after submission
    };

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>₹{e.new_price * cartItems[e.id]}</p>
                                <CloseOutlinedIcon onClick={() => removeFromCart(e.id)} sx={{color: 'red'}}/>
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>₹{totalAmount}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>₹{discountedTotal}</h3> {/* Show discounted total here */}
                        </div>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleProceed}>
                        PROCEED TO CHECKOUT
                    </Button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promocode, Enter it here <SouthOutlinedIcon fontSize='default' /></p>
                    <div className="cartitem-promobox">
                        <input 
                            type="text" 
                            placeholder='promo code' 
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)} // Update promo code state
                        />
                        <button onClick={handlePromoCodeSubmit}>Submit</button> {/* Add onClick handler */}
                    </div>
                </div>
            </div>

            {/* Payment Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Select Payment Method</DialogTitle>
                <DialogContent>
                    <RadioGroup
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <FormControlLabel
                            value="Cash on Delivery"
                            control={<Radio />}
                            label="Cash on Delivery"
                        />
                        <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
                    </RadioGroup>
                    {paymentMethod === 'UPI' && (
                        <>
                            <p><hr/></p>
                            <Typography>
                                UPI ID: 9480506235@ptsbi<br /><hr />
                                Total Amount: ₹{discountedTotal}<br/> {/* Show discounted total here */}
                            </Typography>
                            <hr/>
                            <TextField
                                label="Enter UTR Number"
                                variant="outlined"
                                fullWidth
                                value={utrNumber}
                                onChange={(e) => setUtrNumber(e.target.value)}
                                margin="normal"
                            />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handlePayment} color="primary">Proceed</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CartItems;
