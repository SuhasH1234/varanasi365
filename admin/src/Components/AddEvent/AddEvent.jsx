import React, { useState } from 'react';
import axios from 'axios';
import './AddEvent.css';

const AddEvent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [eventType, setEventType] = useState('Local Event');
  const [time, setTime] = useState('');

  const handleAddEvent = async () => {
    try {
      const response = await axios.post('http://localhost:4000/createevent', {
        name,
        description,
        location,
        date,
        type: eventType,
      });
      if (response.data.success) {
        alert('Event created successfully!');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="add-event">
      <h1>Add Event</h1>
      <form>
        <div className="add-event-itemfield">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
          />
        </div>

        <div className="add-event-itemfield">
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
          />
        </div>

        {/* Flex container for location and date inputs */}
        <div className="add-event-location-date-container">
          <div className="add-event-itemfield">
            <label>Location:</label>
            <input 
              type="text" 
              value={location} 
              onChange={e => setLocation(e.target.value)} 
            />
          </div>
        </div>

        {/* Flex container for event type and time */}
        <div className="add-event-type-time-container">
          <div className="add-event-itemfield date-container">
            <label>Date:</label>
            <input 
              type="date" 
              value={date} 
              onChange={e => setDate(e.target.value)} 
              min={today} // Set minimum date to today
              onFocus={e => e.target.showPicker()} // Show date picker on focus
              className="date-input" // Add a class for styling
            />
          </div>
          <div className="add-event-itemfield">
            <label>Event Type:</label>
            <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
              <option value="Local Event">Local Event</option>
              <option value="Government Event">Government Event</option>
            </select>
            {/* Display the selected event type */}
            <div className="selected-event-type">
              <strong>Selected:</strong> {eventType}
            </div>
          </div>
        </div>

        <div className="add-event-btn-container">
          <button type="button" className="add-event-btn" onClick={handleAddEvent}>
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
