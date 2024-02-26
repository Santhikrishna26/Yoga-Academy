import React from 'react';
import Topbar from '../components/Topbar';
import EventCard from '../components/ecard';
import 'C:/Users/HP/Documents/yogacenter/Advanced-App-Development/yoga/src/assets/event.css';

const EventPage = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="event-container">
        <h1>Upcoming Events</h1><br></br><br></br>
        <div className="event-list">
          <EventCard
            title="Yoga Workshop: Introduction to Hatha Yoga"
            date="February 28, 2024"
            time="9:00 AM - 12:00 PM"
            location="Main Yoga Studio"
            description="Join us for a beginner-friendly workshop introducing the fundamentals of Hatha Yoga."
          />
          <EventCard
            title="Vinyasa Flow Retreat: Connect with Nature"
            date="March 15-17, 2024"
            time="All Day"
            location="Mountain Retreat Center"
            description="Escape the city and immerse yourself in a rejuvenating Vinyasa Flow retreat surrounded by nature."
          />
          
        </div>
      </div>
    </div>
  );
};

export default EventPage;
