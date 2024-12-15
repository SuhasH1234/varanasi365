// Profile.jsx
import React, { useEffect, useState } from 'react';
import './Profile.css'; // Import the CSS file
import axios from 'axios';

const Profile = () => {
    const [artisan, setArtisan] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtisanDetails = async () => {
            try {
                const token = localStorage.getItem('artisan') ? JSON.parse(localStorage.getItem('artisan')).token : null;
                const response = await axios.get('http://localhost:4000/artisan/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data.success) {
                    setArtisan(response.data.artisan);
                } else {
                    setError(response.data.message);
                }
            } catch (err) {
                console.error('Error fetching artisan details:', err);
                setError('An error occurred while fetching artisan details.');
            }
        };

        fetchArtisanDetails();
    }, []);

    return (
        <div className="profile-container">
            {error && <p className="error">{error}</p>}
            {artisan ? (
                <div className="profile-details">
                    <h1>Profile Details</h1>
                    <p><strong>Name:</strong> {artisan.name}</p>
                    <p><strong>Email:</strong> {artisan.email}</p>
                    <p><strong>Phone:</strong> {artisan.phone}</p>
                    <p><strong>Address:</strong> {artisan.address}</p>
                    <p><strong>City:</strong> {artisan.city}</p>
                    <p><strong>Country:</strong> {artisan.country}</p>
                </div>
            ) : (
                <p className="loading-message">Loading...</p>
            )}
        </div>
    );
};

export default Profile;
