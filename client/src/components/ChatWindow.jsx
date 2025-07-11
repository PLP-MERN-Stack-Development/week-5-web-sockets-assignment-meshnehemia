import React, { useEffect, useState } from 'react';
import socket from '../socket/socket';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import OnlineUsers from './OnlineUsers';

function ChatWindow({ username }) {
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on('typing_users', setTypingUsers);
    socket.on('user_list', setUsers);

    fetch('http://localhost:5000/api/messages')
      .then((res) => res.json())
      .then(setMessages);

    return () => {
      socket.off('receive_message');
      socket.off('typing_users');
      socket.off('user_list');
    };
  }, []);

  return (
    <div className="space-y-4">
      <OnlineUsers users={users} typingUsers={typingUsers} />
      <MessageList messages={messages} />
      <MessageInput username={username} />
    </div>
  );
}

export default ChatWindow;
