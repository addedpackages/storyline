import './App.css';
import './ImageSlider';
import ImageSlider from './ImageSlider';

import Navigation from './Nav.js';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';

// const slides = [
//   {url: "./images/compass-2.png", title: "image1"},
//   {url: "./images/gg-bridge.png", title: "image3"},
//   {url: "./images/sh-1-blank.png", title: "image3"},
//   {url: "http://localhost:3000/image4", title: "image4"},
 
// ];




const slides = [
  {
    component: Slide1
    
  },
  {
    component: Slide2
    
  },
  {
    component: Slide3
    
  },
  {
    component: Slide4
  },
  {
    component: Slide5
    
  },
  {
    component: Slide6
  },
  {
    component: Slide7
  }
  
];

const importAll = (r) => {
  return r.keys().map((item, index) => ({
    url: r(item),
  }));
};


// Import all of the background images under ./images/
const backgroundImages = importAll(require.context('./background-images/', false, /\.(png)$/))

const slidesWithUrls = slides.map((slide, index) => ({
  ...slide,
  ...backgroundImages[index]
}));

console.log("SWURL:", slidesWithUrls);


const App = () => {
  return(
    <div className={'main-container'}>
    { <Navigation/> }
    <ImageSlider slides={slidesWithUrls}/>
    
    </div>
  )
}

export default App;
