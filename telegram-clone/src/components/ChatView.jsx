// ChatView.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ChatView({ chatId, onClose }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        const data = response.data.data;
        setMessages(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChatMessages();
  }, [chatId]);

  return (
    <div className='fixed top-0 h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-md p-4 w-screen h-screen overflow-auto'>
        <div className='font-bold text-lg mb-4'>Chat Messages</div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && (
          <div>
            {messages.map((message) => (
              <div key={message.id} className='mb-2'>
                <div className='font-bold'>{message.sender.name}</div>
                <div>{message.message}</div>
                <div className='text-xs text-gray-400 mt-1'>{new Date(message.created_at).toLocaleString()}</div>
              </div>
            ))}
          </div>
        )}
        <button onClick={onClose} className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded'>
          Close
        </button>
      </div>
    </div>
  );
}

export default ChatView;
