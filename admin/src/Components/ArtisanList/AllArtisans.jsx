// AllArtisans.jsx
import React, { useEffect, useState } from 'react';
import './AllArtisans.css';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const AllArtisans = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get('https://varanasi365.onrender.com/getallartisans'); // Your API endpoint to fetch artisans
        setArtisans(response.data);
      } catch (error) {
        console.error('Error fetching artisans:', error);
      }
    };

    fetchArtisans();
  }, []);

  const deleteArtisan = async (id) => {
    try {
      const response = await axios.post('https://varanasi365.onrender.com/removeartisan', { id });
      
      if (response.data.success) {
        // Remove artisan from the UI
        setArtisans((prevArtisans) => prevArtisans.filter((artisan) => artisan._id !== id));
        alert('Artisan deleted successfully. The user will no longer be able to log in.');
      } else {
        alert('Failed to delete artisan. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting artisan:', error);
      alert('An error occurred while trying to delete the artisan.');
    }
  };  

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
            <Button
              variant="contained"
              className='delete-button'
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => deleteArtisan(artisan._id)}
            >
              Delete Artisan
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllArtisans;
