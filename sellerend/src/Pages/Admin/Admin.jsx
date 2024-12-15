import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
import Profile from '../../Components/Profile/Profile';
import AddEvent from '../../Components/AddEvent/AddEvent';
import ListEvent from '../../Components/ListEvent/ListEvent';
import Orders from '../../Components/Orders/Orders';
import ArtisanDashboard from '../../Components/Artisan/ArtisanDashboard';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path='/listevent' element={<ListEvent />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/artisankistD' element={<ArtisanDashboard />} />
      </Routes>
    </div>
  );
};

export default Admin;