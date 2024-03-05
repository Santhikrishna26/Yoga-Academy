
import React from 'react';
import 'C:/Users/HP/Documents/yogacenter/Advanced-App-Development/yoga/src/assets/ecard.css';

const EventCard = ({ title, date, time, location, description }) => {
  return (
    <div className="event-card">
      <h2 className="event-title">{title}</h2>
      <p className="event-info"><strong>Date:</strong> {date}</p>
      <p className="event-info"><strong>Time:</strong> {time}</p>
      <p className="event-info"><strong>Location:</strong> {location}</p>
      <p className="event-description">{description}</p>
    </div>
  );
};

export default EventCard;
