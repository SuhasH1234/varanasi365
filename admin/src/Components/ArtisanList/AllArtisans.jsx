// AllArtisans.jsx
import React, { useEffect, useState } from 'react';
import './AllArtisans.css'; // Import the CSS file
import axios from 'axios';

const AllArtisans = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallartisans'); // Your API endpoint to fetch artisans
        setArtisans(response.data);
      } catch (error) {
        console.error('Error fetching artisans:', error);
      }
    };

    fetchArtisans();
  }, []);

  return (
    <div className="artisans-container">
      
      <ul className="artisan-list">
      <h1>All Artisans</h1>
        {artisans.map((artisan) => (
            <li key={artisan._id}>
            <p><strong>Name:</strong> {artisan.name}</p>
            <p><strong>Email:</strong> {artisan.email}</p>
            <p><strong>Phone:</strong> {artisan.phone}</p>
            <p><strong>Address:</strong> {artisan.address}</p>
            <p><strong>City:</strong> {artisan.city}</p>
            <p><strong>Country:</strong> {artisan.country}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllArtisans;
