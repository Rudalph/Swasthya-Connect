"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/Components/navbar';

function TypingEffect({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prevText => prevText + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here (milliseconds)
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
}

function MainContent() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSummary(response.data.summary);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className='flex'>
      <Navbar/>
      <div className="ml-30">
      <div className="container mx-auto px-4 py-8">
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-8">
          <label htmlFor="pdfFile" className="block mb-2">Select a PDF file:</label>
          <input type="file" name="pdfFile" id="pdfFile" accept=".pdf" required className="border border-gray-300 px-4 py-2 rounded-md" onChange={handleFileChange} />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Upload</button>
        </form>
        {summary && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Summary:</h2>
            <TypingEffect text={formatSummary(summary)} />
          </div>
        )}
      </div>
    </div>
    </div>
    
  );
}

function formatSummary(summary) {
  // Break the line after encountering *
  return summary.replace(/\*/g, '*\n').trim();
}



export default MainContent;
