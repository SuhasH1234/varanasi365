import React, { useState } from 'react';
import Admin from './Pages/Admin/Admin';
import Artisan from './Components/Artisan/Artisan';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={() => setIsAuthenticated(false)} />
      {/* Conditionally render the Artisan form or Admin pages */}
      {!isAuthenticated ? (
        <Artisan setIsAuthenticated={setIsAuthenticated} /> // Pass the state updater to Artisan
      ) : (
        <Admin />
      )}
    </div>
  );
};

export default App;
