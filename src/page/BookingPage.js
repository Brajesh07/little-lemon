import "./BookingPage.css";
import React, { useReducer, useState } from "react";

/* global fetchAPI, submitAPI */
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date);
    default:
      return state;
  }
};
const BookingPage = () => {
  const today = new Date();
  const [availableTimes, dispatch] = useReducer(timesReducer, fetchAPI(today));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });
  const [status, setStatus] = useState("");

  // Handle date change and update times
  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    dispatch({ type: "UPDATE_TIMES", date });
    setFormData({ ...formData, date: e.target.value });
  };

  // Handle other field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = submitAPI(formData);
    setStatus(success ? "Booking successful!" : "Booking failed. Try again.");
    if (success) e.target.reset();
  };

  return (
    <div className="book-page">
      <h1>Reserve Your Table</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" required onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" required onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" required onChange={handleDateChange} />
        </label>

        <label>
          Time:
          <select name="time" required onChange={handleChange}>
            <option value="">Select a time</option>
            {availableTimes.map((time, idx) => (
              <option key={idx} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>

        <label>
          Guests:
          <input
            type="number"
            name="guests"
            min="1"
            max="20"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Book Now</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default BookingPage;
