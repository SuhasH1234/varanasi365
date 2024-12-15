// ArtisanDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import './ArtisanDashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const ArtisanDashboard = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artisansd');
        setArtisans(response.data);
      } catch (error) {
        console.error('Error fetching artisans:', error);
      }
    };
    fetchArtisans();
  }, []);

  const chartData = {
    labels: artisans.map((artisan) => artisan.artisanOfTheMonth),
    datasets: [
      {
        label: 'Sales',
        data: artisans.map((artisan) => artisan.sales),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Earnings',
        data: artisans.map((artisan) => artisan.earnings),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="artisan-dashboard">
      <h1 className="heading">Artisan Dashboard</h1>
      <Paper elevation={3} className="dashboard-table">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Artisan of the Month</TableCell>
                <TableCell align="right">Sales Done Till Date</TableCell>
                <TableCell align="right">Rank</TableCell>
                <TableCell align="right">Total Earnings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artisans.map((artisan) => (
                <TableRow key={artisan._id}>
                  <TableCell>{artisan.artisanOfTheMonth}</TableCell>
                  <TableCell align="right">{artisan.sales}</TableCell>
                  <TableCell align="right">{artisan.rank}</TableCell>
                  <TableCell align="right">{artisan.earnings}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Box className="chart-container">
        <Bar data={chartData} />
      </Box>
    </div>
  );
};

export default ArtisanDashboard;
