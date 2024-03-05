
import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/HP/Documents/yogacenter/Advanced-App-Development/yoga/src/assets/ecard.css';

const EventCard = ({ title, date, time, location, description }) => {
  return (
    <div className="event-card">
    <div className="event-details">
      <h2>{title}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
    </div>
    <Link to="/EventForm" className="join-button">
        Enroll
      </Link>
  </div>
  );
};

export default EventCard;
