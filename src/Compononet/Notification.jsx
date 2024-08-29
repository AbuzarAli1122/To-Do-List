import React from 'react';

const Notification = ({ message, clearMessage }) => {
  if (!message) return null;

  setTimeout(() => {
    clearMessage();
  }, 2000);

  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;
