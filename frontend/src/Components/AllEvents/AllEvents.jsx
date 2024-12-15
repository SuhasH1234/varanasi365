import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllEvents.css';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://varanasi365.netlify.app/allevents');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Error fetching events');
      }
    };

    fetchEvents();
  }, []);


  return (
    <div className="all-events">
      <h1>ALL EVENTS <hr /></h1>
      {error && <p className="error-message">{error}</p>}
      <div className="events-grid">
        {events.map(event => (
          <div key={event._id} className="event-item">
            <h2 className="event-name">{event.name}</h2>
            <p className="event-description">Description: {event.description}</p>
            <p className="event-location">Location: {event.location}</p>
            <p className="event-date">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="event-type">Type: {event.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
