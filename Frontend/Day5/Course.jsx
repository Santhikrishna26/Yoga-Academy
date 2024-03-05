import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../assets/Course.css';

const Course = () => {
  const [flipped, setFlipped] = useState({
    card1: false,
    card2: false,
    card3: false
  });

  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');

  const handleClick = (card) => {
    setFlipped(prevState => ({
      ...prevState,
      [card]: !prevState[card]
    }));
  };

  const handleMouseEnter = (desc) => {
    setDescription(desc);
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div className={`card ${flipped.card1 ? 'flipped' : ''}`} onClick={() => handleClick('card1')}>
          <div className="card-inner" onMouseEnter={() => handleMouseEnter('Description 1')} onMouseLeave={handleMouseLeave}>
            <div className="card-front">
              Front Side
            </div>
            <div className="card-back">
              Back Side
            </div>
          </div>
          {showDescription && flipped.card1 && <div className="tooltip">{description}</div>}
        </div>
        <div className={`card ${flipped.card2 ? 'flipped' : ''}`} onClick={() => handleClick('card2')}>
          <div className="card-inner1" onMouseEnter={() => handleMouseEnter('Description 2')} onMouseLeave={handleMouseLeave}>
            <div className="card-front1">
              Front Side
            </div>
            <div className="card-back1">
              Back Side
            </div>
          </div>
          {showDescription && flipped.card2 && <div className="tooltip">{description}</div>}
        </div>
        <div className={`card ${flipped.card3 ? 'flipped' : ''}`} onClick={() => handleClick('card3')}>
          <div className="card-inner2" onMouseEnter={() => handleMouseEnter('Description 3')} onMouseLeave={handleMouseLeave}>
            <div className="card-front2">
              Front Side
            </div>
            <div className="card-back2">
              Back Side
            </div>
          </div>
          {showDescription && flipped.card3 && <div className="tooltip">{description}</div>}
        </div>
      </div>
    </div>
  );
};

export default Course;
  
