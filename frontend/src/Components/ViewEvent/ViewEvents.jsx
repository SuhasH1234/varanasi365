import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ViewEvents.css'; // Make sure to import the CSS file

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://varanasi365.onrender.com/allevents');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Error fetching events');
      }
    };

    fetchEvents();
  }, []);

  // Function to sort events by date
  const getSortedEvents = () => {
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  // Get displayed events
  const displayedEvents = getSortedEvents().slice(0, 4);

  return (
    <div className="view-events">
      <h1>EVENTS<hr /></h1>
      {error && <p className="error-message">{error}</p>}
      <div className="events-list">
        {displayedEvents.map(event => (
          <div key={event._id} className="event-item">
            <h2 className="event-name">{event.name}</h2>
            <p className="event-description">Description: {event.description}</p>
            <p className="event-location">Location: {event.location}</p>
            <p className="event-date">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="event-type">Type: {event.type}</p>
          </div>
          
        ))}
      </div>
      <button 
        className="cta-button1" 
        onClick={() => navigate('/allevents')}
      >
        Click to See More Events
      </button>
    </div>
  );
};

export default ViewEvents;
