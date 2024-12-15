import React, {useContext, useState} from 'react';
import './ProductDisplay.css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Snackbar from '@mui/material/Snackbar';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    // Function to read out product details
    const readProductDetails = () => {
        if (isSpeaking) {
            // Stop the speech if it is currently speaking
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const message = `Product Name: ${product.name}. Category: ${product.category}. Description: ${product.description}. Old Price: ₹${product.old_price}. New Price: ₹${product.new_price}.`;
            const newSpeech = new SpeechSynthesisUtterance(message);
            newSpeech.lang = 'en-US'; // Set language
            window.speechSynthesis.speak(newSpeech);
            setIsSpeaking(true);

            // Reset speaking state after the speech ends
            newSpeech.onend = () => {
                setIsSpeaking(false);
            };
        }
    };

    // Check if user is logged in
    const handleAddToCart = () => {
        const token = localStorage.getItem('auth-token');
        if (!token) {
            // User is not logged in, show snackbar
            setSnackbarOpen(true);
        } else {
            // User is logged in, proceed to add to cart
            console.log("Adding to cart:", product.id);
            addToCart(String(product.id));
        }
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            <div className="productdisplay-right">
                <h1>{product.name} <VolumeUpIcon sx={{ml: "5%", color: 'red'}} onClick={readProductDetails} /></h1>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category:</span> Saree, Crop Top</p>
                <p className='productdisplay-right-tags'><span>Tags:</span> Modern, Latest, Artisan</p>
            </div>

            {/* Snackbar for login message */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                message="Please log in to add items to the cart"
            />
        </div>
    );
}

export default ProductDisplay;
