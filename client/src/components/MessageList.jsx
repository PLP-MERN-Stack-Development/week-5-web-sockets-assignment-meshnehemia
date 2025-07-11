import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="h-[300px] overflow-y-auto border rounded p-3 bg-gray-100">
      {messages.map((msg) => (
        <div key={msg.id} className="mb-2">
          <strong>{msg.sender}:</strong> {msg.text}
          <div className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
