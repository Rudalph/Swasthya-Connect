"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '@/Components/navbar';

const ReminderForm = () => {
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5001/set_reminder', { time, message, phone });
      // Handle success if needed
      console.log("Reminder set successfully!");
    } catch (error) {
      setErrorMessage('Failed to set reminder. Please try again.');
      console.error(error);
    }
  };

  return (
    <>
    <div className='flex'>
        <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Set Reminder</h1>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md">
        <div className="space-y-3">
          <label htmlFor="time" className="px-3 text-xs font-semibold uppercase text-gray-900">Set Time</label>
          <input type="datetime-local" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="space-y-3">
          <label htmlFor="message" className="px-3 text-xs font-semibold uppercase text-gray-900">Reminder Message</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="3" className="border border-gray-300 px-3 py-2 rounded-md w-full" required></textarea>
        </div>
        <div className="space-y-3">
          <label htmlFor="phone" className="px-3 text-xs font-semibold uppercase text-gray-900">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" placeholder="Enter phone number" required />
        </div>
        <br />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">Set Reminder</button>
      </form>
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
          <strong className="font-bold">Oops!</strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
    </div>
    </div>
    </>
    
  );
};

export default ReminderForm;
