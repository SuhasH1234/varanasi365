// Dashboard.jsx
import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Paper } from '@mui/material';
import axios from 'axios';
import './Dashboard.css'; // Import the new CSS file

const Dashboard = () => {
  const [formData, setFormData] = useState({
    artisanOfTheMonth: '',
    sales: '',
    rank: '',
    earnings: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await axios.post('http://localhost:5000/api/artisansd', formData);
      alert('Details submitted successfully!');
      setFormData({
        artisanOfTheMonth: '',
        sales: '',
        rank: '',
        earnings: '',
      });
    } catch (error) {
      console.error('Error submitting details:', error);
    }
  };

  return (
    <Box className="dashboard">
      <h1 className="heading"> Dashboard</h1>
      <Paper elevation={3} className="form-paper">
        <form onSubmit={handleSubmit}> {/* Wrap in a form element */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Artisan of the Month"
                name="artisanOfTheMonth"
                value={formData.artisanOfTheMonth}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sales Done Till Date"
                name="sales"
                type="number"
                value={formData.sales}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Rank"
                name="rank"
                type="number"
                value={formData.rank}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Total Earnings"
                name="earnings"
                type="number"
                value={formData.earnings}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary"> {/* Set type to "submit" */}
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Dashboard;
