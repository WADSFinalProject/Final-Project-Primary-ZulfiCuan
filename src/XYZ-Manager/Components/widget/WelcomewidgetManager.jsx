import React from 'react';
import './welcomewidgetManager.scss';

function WelcomeWidget() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const weekday = currentDate.toLocaleDateString('en-GB', { weekday: 'long' });
  const formattedDate = `${weekday}, ${currentDate.toLocaleDateString('en-GB', options)}`;

  return (
    <div className="welcomeWidget-manager">
      <div className="date-manager">{formattedDate}</div>
      <h1>Welcome John Doe!</h1>
      <p>There are 3 pending Accounts that you must review. Please go to the Account Section so you may handle them.</p>
    </div>
  );
}

export default WelcomeWidget;