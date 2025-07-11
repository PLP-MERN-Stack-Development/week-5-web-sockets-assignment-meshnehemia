import React from 'react';

function OnlineUsers({ users, typingUsers }) {
  return (
    <div className="flex justify-between items-center px-2">
      <div>
        🟢 <strong>{users.length}</strong> online: {users.map((u) => u.username).join(', ')}
      </div>
      <div className="text-sm text-gray-500">
        {typingUsers.length > 0 &&
          `${typingUsers.join(', ')} ${typingUsers.length > 1 ? 'are' : 'is'} typing...`}
      </div>
    </div>
  );
}

export default OnlineUsers;
