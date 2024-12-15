// Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/artisanformD'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <EditOutlinedIcon style={{ color: 'black' }} />
          <p>Edit Dashboard</p>
        </div>
      </Link>
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
      <Link to={'/allartisans'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <PeopleOutlineIcon style={{ color: 'black' }} /> {/* Use an icon for artisans */}
          <p>All Artisans</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
