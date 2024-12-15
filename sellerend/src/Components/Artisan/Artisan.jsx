import React, { useState } from 'react';
import './Artisan.css'; // Make sure this file has the necessary styles as shown below
import axios from 'axios';

const Artisan = ({ setIsAuthenticated }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;

            if (isLogin) {
                response = await axios.post('https://varanasi365.onrender.com/artisan/login', {
                    email: formData.email,
                    password: formData.password,
                });
            } else {
                response = await axios.post('https://varanasi365.onrender.com/artisan/signup', {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    city: formData.city,
                    country: formData.country,
                    password: formData.password,
                });
            }

            if (response.data.success) {
                localStorage.setItem('artisan', JSON.stringify({ ...response.data.artisan, token: response.data.token }));
                setIsAuthenticated(true);
                alert('Authentication Successful');
            } else {
                alert('Authentication Failed: ' + (response.data.errors || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={handleSubmit} className="loginsignup-fields">
                    {isLogin ? (
                        <>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email Address'
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='Password'
                                required
                            />
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your Name'
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email Address'
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Phone Number'
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder='Address'
                                required
                            />
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder='City'
                                required
                            />
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder='Country'
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='Password'
                                required
                            />
                        </>
                    )}
                    <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                    <p className="loginsignup-login">
                        {isLogin ? 'Create an account ? ' : 'Already have an account? '}
                        <span onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Click here' : 'Login here'}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Artisan;
