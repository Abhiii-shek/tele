// ChatList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardOne from './CardOne';
import ChatView from './ChatView';

function ChatList() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        const data = response.data.data.data;
        setChats(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  const openChatView = (chatId) => {
    setSelectedChatId(chatId);
  };

  const closeChatView = () => {
    setSelectedChatId(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  

  return (
    <div className='container'>
        
      {chats.map((chat) => (
        <CardOne
          key={chat.id || "id"}
          senderName={chat.creator.name || "Username"}
          message={chat.msg_count}
          timestamp={chat.created_at || "00.00"}
          onClick={() => openChatView(chat.id)}
          phone={chat.creator.phone}
          
        />
      ))}
      {selectedChatId && (
        <ChatView
          chatId={selectedChatId}
          onClose={closeChatView}
        />
      )}
    </div>
  );
}

export default ChatList;
