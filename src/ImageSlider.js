import { React } from "globalthis/implementation";
import {useEffect, useState} from "react";


import './App.css';

const ImageSlider = ({slides, interval = 8000}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
     useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 1000000);
    return () => clearInterval(interval);
  }, [currentIndex]);

    const goToNext = () => {
        const newIndex = (currentIndex + 1) % slides.length
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    const { component: CurrentSlide, url: currentBGUrl, images } =
    slides[currentIndex];
    
    return (
        <div className="top-container">
            
                {<CurrentSlide images={images} imageUrl={currentBGUrl}/>}
                
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        className={slideIndex === currentIndex ? "dots selected" : "dots"}
                        onClick={() => {goToSlide(slideIndex)}}
                    >
                        •
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
