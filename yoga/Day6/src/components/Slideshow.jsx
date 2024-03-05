import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const slideImages = [
  {
    url: "https://www.doconline.com/assets/image/blog/yoga.jpg",
    caption: '1'
  },
  {
    url: "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/Blog_34_yoga-background_4.jpg?itok=Okj0tP7m",
    caption: '2'
  },
  {
    url: "https://preview.colorlib.com/theme/yogalife/images/img_1.jpg.webp",
    caption: '3'
  }

];
const divStyle = {
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
 marginTop:"-10px",
  // marginLeft:"130px",
  width:'100%',
  backgroundRepeat: "no-repeat", // Prevent background repeat
  backgroundSize: "cover" // Ensure background covers the entire div
};
// const spanStyle = {
//   fontSize: "20px",
//   background: "#efefef",
//   color: "#000000"
// };
const Slideshow = () => {
  return (
    <div className='slide-container'>
      <Fade autoplay={true} duration={1000} arrow={false}>
  {slideImages.map((image, index) => (
    <div key={index} style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
      {/* <span style={spanStyle}>{image.caption}</span> */}
    </div>
  ))}
</Fade>

    </div>
  );
};

export default Slideshow;