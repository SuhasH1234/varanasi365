// Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/artisankistD'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <GridViewOutlinedIcon style={{ color: 'black' }} />
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <AddShoppingCartOutlinedIcon style={{ color: 'black' }} />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <FormatListBulletedOutlinedIcon style={{ color: 'black' }} />
          <p>Product List</p>
        </div>
      </Link>
      <Link to={'/orders'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <Inventory2OutlinedIcon style={{ color: 'black' }} />
          <p>Orders</p>
        </div>
      </Link>
      <Link to={'/addevent'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <EventOutlinedIcon style={{ color: 'black' }} />
          <p>Add Event</p>
        </div>
      </Link>
      <Link to={'/listevent'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <FormatListBulletedOutlinedIcon style={{ color: 'black' }} />
          <p>Event List</p>
        </div>
      </Link>
      
      <Link to={'/profile'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <AccountCircleOutlinedIcon style={{ color: 'black' }} />
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
