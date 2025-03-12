import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Using Redux for state management

const BookingForm = ({ property }) => {
  const [dates, setDates] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_CART', payload: { property, dates } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Booking Dates"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
