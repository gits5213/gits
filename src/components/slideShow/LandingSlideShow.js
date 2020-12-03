import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'images/slide/slide_2.jpg',
  'images/slide/slide_3.jpg',
  'images/slide/slide_4.jpg'
];

const LandingSlideShow = () => {
    return (
      <div>
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};
export default LandingSlideShow;
