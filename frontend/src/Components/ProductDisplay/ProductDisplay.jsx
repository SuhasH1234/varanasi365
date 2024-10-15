import React from 'react';
import './ProductDisplay.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';

const ProductDisplay = (props) => {
    const { product } = props;

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
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <StarIcon style={{ color: '#ffd700' }} />
                    <StarIcon style={{ color: '#ffd700' }} />
                    <StarIcon style={{ color: '#ffd700' }} />
                    <StarIcon style={{ color: '#ffd700' }} />
                    <StarBorderOutlinedIcon style={{ color: '#ffd700' }} />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Hi this is description
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category:</span> Saree, Crop Top</p>
                <p className='productdisplay-right-tags'><span>Tags:</span> Modern, Latest, Artisan</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
