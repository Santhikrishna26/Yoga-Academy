
import React from 'react';
import 'C:/Users/HP/Documents/yogacenter/Advanced-App-Development/yoga/src/assets/card.css';
const YogaClassCard = ({ title, description, image }) => {
  return (
    <div className="class-card">
      
      <div className="class-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default YogaClassCard;
