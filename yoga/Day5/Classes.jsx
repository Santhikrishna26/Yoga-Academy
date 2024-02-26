import React from 'react';
import Topbar from './Topbar';
import YogaClassCard from 'C:/Users/HP/Documents/yogacenter/Advanced-App-Development/yoga/src/components/card.jsx';
import Footer from './Footer';

const ClassesPage = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <h1>Yoga Classes</h1>
        <br></br>
        <div className="class-container">
          <YogaClassCard
            title="Hatha Yoga"
            description="Beginner-friendly class focusing on basic yoga poses and breathing exercises."
            
          /><br></br><br></br>
          <YogaClassCard
            title="Vinyasa Flow"
            description="Dynamic and fluid sequence of yoga poses synchronized with breath."
            
          />
          <br></br><br></br>
          <YogaClassCard
            title="Vinyasa Flow"
            description="Dynamic and fluid sequence of yoga poses synchronized with breath."
            
          />
          <br></br><br></br>
          <YogaClassCard
            title="Meditation"
            description="Beginner-friendly class focusing on basic yoga poses and breathing exercises."
          />
          <br></br><br></br>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ClassesPage;
