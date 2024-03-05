import Topbar from "./Topbar";
// import Sidebar from "./Sidebar";
import { useState } from "react";
import '../assets/Home.css';
import Slideshow from "./Slideshow";
import Footer from "./Footer";

const Card1 = ({ title1, description1, imageUrl1, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ ...styles.card1, backgroundColor: isActive ? 'lightblue' : 'white' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl1}
        alt={title1}
        style={{ ...styles.image1, ...(isHovered && styles.image1Hover) }}
      />
      <h3>{title1}</h3>
      <p>{description1}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '-10px',
  },
  cardList: {
    display: 'flex',
    marginLeft: '200px',
    justifyContent: 'center',
  },
  card: {
    width: '250px',
    height: '200px',
    marginRight: '10px',
    // border: '1px solid #ccc',
    // borderRadius: '5px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardList1: {
    marginTop: '50px',
    display: 'flex',
    marginLeft: '20px',
    justifyContent: 'center',
  },
  card1: {
    width: '420px',
    height: '250px',
    marginTop:'20px',
    marginLeft: '100px',
  
  },
  title1: {
    fontSize: '24px', 
    fontFamily: 'Arial, sans-serif', 
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  description1: {
    fontSize: '18px', 
    fontFamily: 'Georgia, serif', 
    lineHeight: '1.4',
  },
  image1: {
    marginLeft: '0px',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  image1Hover: {
    transform: 'scale(1.1)',
  },
  cardList2: {
    marginTop: '50px',
    display: 'flex',
    marginLeft: '100px',
    justifyContent: 'center',
  },
  card2: {
    width: '250px',
    height: '200px',
    marginLeft: '80px',
    border: '2px solid white',
    borderRadius: '25px',
  },
  image2: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
};

const cards1 = [
  {
    title1: 'Programmes',
    imageUrl1: 'https://preview.colorlib.com/theme/yogalife/images/img_5.jpg',
    description1: '',
  },
  {
    imageUrl1: 'https://www.stylecraze.com/wp-content/uploads/2013/03/1868-What-Is-Yoga-And-What-Are-Its-Benefits-ss.jpg',
    title1: 'Activities',
    description1: '',
  },
];

const HomePage = () => {
  return (
    <div>
      <Topbar />
      <br></br>
      {/* <Sidebar /> */}
      <Slideshow />

      <br></br><br></br>
      
      <div className="nite">
      <div className="kite">
      <h1>Calm and peaceful mind and body with the Best Yoga Academy in India</h1>
      </div>
      <div style={styles.cardList1}>
        {cards1.map((card1, index) => (
          <Card1
            key={index}
            title1={card1.title1}
            description1={card1.description1}
            imageUrl1={card1.imageUrl1}
          />
        ))}
      </div>
      <br></br><br></br><br></br>
         {/* <QuiltedImageList/> */}
         <footer>
         <Footer/>
         </footer>
      </div>
    </div>
  );
};

export default HomePage;
