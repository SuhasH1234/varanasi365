// Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
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
