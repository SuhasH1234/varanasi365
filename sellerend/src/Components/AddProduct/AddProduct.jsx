import React from 'react'
import './AddProduct.css'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useState } from 'react';
import upload_area from '../../assets/uploadIcon.png'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        description: "",
        category: "Saree",
        new_price: "",
        old_price: "",
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    const resetFields = () => {
        setProductDetails({
            name: "",
            image: "",
            description: "",
            category: "Saree",
            new_price: "",
            old_price: "",
        });
        setImage(false);
    }

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {responseData = data});

        if(responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                if(data.success) {
                    alert("Product Added");
                    resetFields(); // Reset all input fields after successful product addition
                } else {
                    alert("Failed to add product");
                }
            });
        }
    }

    return (
        <div className='add-product'>
            <h1>Add Product</h1>
            <div className="addproduct-itemfield">
                <p>Product Title:</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Description:</p>
                <input value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price:</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price:</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Category:</p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
                        <option value="Saree">Saree</option>
                        <option value="Stone Carvings">Stone Carvings</option>
                        <option value="Bangles and Bracelets">Bangles and Bracelets</option>
                        <option value="Rudraksha Mala">Rudraksha Mala</option>
                        <option value="Gulabi Minakari">Gulabi Minakari</option>
                        <option value="Wooden Toys">Wooden Toys</option>
                        <option value="Hand Knotted Carpets">Hand Knotted Carpets</option>
                        <option value="Varanasi Special">Varanasi Special</option>
                    </select>
                </div>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <p>Upload Image:</p>
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-image' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <div className="addproduct-btn-container">
                <button onClick={() => { Add_Product(); }} className='addproduct-btn'>ADD</button>
            </div>
        </div>
    )
}

export default AddProduct;