import React from 'react';

import landing from '../images/landing.png';
import sliderImg1 from '../images/sliderImg1.png';
import sliderImg2 from '../images/sliderImg2.png';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const SlideShow = () => {
  return (
    <div>
      <AutoplaySlider organicArrows={false} play={true} interval={6000}>
        <div data-src={landing} />
        <div data-src={sliderImg2} />
        <div data-src={sliderImg1} />
      </AutoplaySlider>
    </div>
  );
};

export default SlideShow;
