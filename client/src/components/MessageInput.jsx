import React, { useState } from 'react';
import socket from '../socket/socket';

function MessageInput({ username }) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!message.trim()) return;
    socket.emit('send_message', { text: message });
    setMessage('');
    socket.emit('typing', false);
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    socket.emit('typing', e.target.value.length > 0);
  };

  return (
    <div className="flex space-x-2">
      <input
        value={message}
        onChange={handleTyping}
        placeholder="Type a message..."
        className="flex-1 border px-3 py-2 rounded"
      />
      <button
        onClick={sendMessage}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
