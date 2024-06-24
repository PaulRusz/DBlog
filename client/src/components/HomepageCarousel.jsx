import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePageCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={3000}
    >
      <div>
        <img src="Image1.jpg" alt="First Slide" />
        <p className="Legend">Legend 1</p>
      </div>
      <div>
        <img src="Image2.jpg" alt="Second Slide" />
        <p className="Legend">Legend 2</p>
      </div>
      <div>
        <img src="Image3.jpg" alt="Third Slide" />
        <p className="Legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default HomePageCarousel;