
    import React, { useState } from 'react';

    function Appointment() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
    
      const handleBooking = () => {
        // Here you can implement the logic to handle the booking, such as sending data to a server
        console.log('Booking:', { name, email, date, time });
      };
    
      return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Book Medical Appointment</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name:</label>
            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email:</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">Date:</label>
            <input type="date" id="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="time">Time:</label>
            <input type="time" id="time" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <button className="w-full px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-200" onClick={handleBooking}>Book Now</button>
        </div>
      );
    }
    
 
export default Appointment