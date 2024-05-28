import React, { useState } from 'react';

const Search = () => {
  const [location, setLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [service, setService] = useState('');

  const locations = [
    'East Legon', 'Los Angeles', 'Chicago', 'Houston', 'Kumasi', 
    'Philadelphia', 'San Antonio', 'San Diego', 'Tema', 'Accra'
  ];

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setFilteredLocations(
      locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

 

  const handleSearch = () => {
    const searchParams = {
      location,
      service,
    };
    console.log(searchParams);
    alert(JSON.stringify(searchParams, null, 2));
  };

  return (
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-evenly	">
          <div className="col-span-2">
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-black rounded-lg"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
            />
            {location && filteredLocations.length > 0 && (
              <ul className="absolute bg-white border border-teal-200 text-black rounded-lg mt-1 w-full max-h-48 overflow-auto z-10">
                {filteredLocations.map((loc, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-teal-200 cursor-pointer"
                    onClick={() => {
                      setLocation(loc);
                      setFilteredLocations([]);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-span-2">
            <select
              className="mt-1 block w-full p-2 border text-black border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="" disabled>Select a service</option>
              <option value="hospital">Hospital</option>
              <option value="lab">Lab</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
          </div>
          <div className="col-span-1">
            <button
              className="w-full  bg-teal-600 text-white p-2 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
       
    </div>
  );
};

export default Search;
