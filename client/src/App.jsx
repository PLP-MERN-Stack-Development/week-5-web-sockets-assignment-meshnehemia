import React, { useState, useEffect } from 'react';
import socket from './socket/socket';
import ChatWindow from './components/ChatWindow';

function App() {
  const [username, setUsername] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = () => {
    if (username.trim()) {
      socket.emit('user_join', username);
      setIsJoined(true);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {!isJoined ? (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <h2 className="text-2xl font-bold">Join Chat</h2>
          <input
            type="text"
            placeholder="Enter username"
            className="border px-4 py-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={handleJoin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Join
          </button>
        </div>
      ) : (
        <ChatWindow username={username} />
      )}
    </div>
  );
}

export default App;
