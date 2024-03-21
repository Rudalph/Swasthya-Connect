"use client"
import React, { useState } from 'react';
import Navbar from '@/Components/navbar';
import { Nav } from 'react-bootstrap';

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5002/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput }),
      });
      const data = await response.json();
      setChatHistory(data.chat_history);
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
        
      <div className="flex h-screen">
      <Navbar/>
      <main className="flex-1 flex flex-col items-center justify-center ml-50">
        <div id="chat-container" className="w-6/12 p-4 overflow-y-auto max-h-full mb-16">
          {/* Chat entries will be dynamically added here */}
          {chatHistory.map((entry, index) => (
            <div key={index} className="flex flex-col space-y-2">
              {/* User question */}
              <div className="flex justify-end">
                <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 m-2">
                  {entry.user}
                </div>
                <b>User</b>
              </div>
              {/* Model response */}
              <div className="flex justify-start">
                <b>Model</b>
                <div className="bg-blue-500 text-white rounded-lg px-4 py-2">
                  {entry.model}
                </div>
                </div>
            </div>
          ))}
        </div>
        {/* User Input Form */}
        <form onSubmit={sendMessage} className="fixed bottom-0 w-6/12 mb-10">
          <div className="flex">
            <input type="text" name="user_input" id="user-input" placeholder="Type your message here..." value={userInput} onChange={(e) => setUserInput(e.target.value)} required className="flex-1 rounded-l-lg px-4 py-2 focus:outline-none h-16" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-r-lg px-6 py-2">Send</button>
          </div>
        </form>
      </main>
    </div>
    </>
   
  );
};

export default ChatBot;
