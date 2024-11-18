import React, { useState, useEffect } from 'react';
import './ListEvent.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ListEvent = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  // Fetch events data
  const fetchEvents = async () => {
    await fetch('http://localhost:4000/allevents') // Adjust the endpoint as needed
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const removeEvent = async (id) => {
    try {
        const response = await fetch('http://localhost:4000/removeevent', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const result = await response.json();
        if (result.success) {
            await fetchEvents(); // Refresh events after deletion
        } else {
            console.error("Failed to remove event:", result.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};



  // Get current events for the page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = allEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);

  return (
    <div className="list-event">
      <h1>All Events List</h1>
      <p><h4>Total Events: {allEvents.length}</h4></p>
      <div className="listevent-format-main">
        <p>Name</p>
        <p>Description</p>
        <p>Date</p>
        <p>Location</p>
        <p>Event Type</p>
        <p>Remove</p>
      </div>
      <div className="listevent-allevents">
        <hr />
        {currentEvents.map((event, index) => (
          <React.Fragment key={index}>
            <div className="listevent-format-main listevent-format">
              <p>{event.name}</p>
              <p>{event.description}</p>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p>{event.location}</p>
              <p>{event.type}</p>
              <CloseOutlinedIcon
                onClick={() => removeEvent(event.id)}
                fontSize="medium"
                style={{ margin: 'auto', cursor: 'pointer' }}
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListEvent;
