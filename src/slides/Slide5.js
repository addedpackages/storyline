import React from "react";
import { useSpring, animated } from "react-spring";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

const SlideWithBackgroundImage = ({imageUrl}) => {
  const slideWrapperStyle = {
    display: "flex",
    width: "1040px",
    height: "580px"
  };

  const slideStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "580px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
    
  };

  const headingStyle = {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translate(-50%, 15%)",
  };

  const textStyle = {
    fontSize: "14px",
    lineHeight: "1.5",
    textAlign: "left",
    margin: "50px auto",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px",
    marginTop: "10%"
  }

  const animation1 = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 1000, // Add delay for the first column to animate after the heading
  });

  const animation2 = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 1500,
  });

  const animation3 = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 2000,
  });
  
  return (
    <div style={slideWrapperStyle}>
      <div style={slideStyle}>
      <div style={headingStyle}>
          <h1>New Listings in Malibu</h1>
      </div>
      <animated.div style={{ ...columnStyle, ...animation1 }}>
          <div style={{ width: "300px", height: "200px" }}>
            <img src={img1} alt="House 1" />
          </div>
          <div style={textStyle}>
            <h2>28036 Storyline Drive</h2>
            <p>SQUARE FEET <strong>10,900</strong></p>
            <p>PRICE <strong>$10,500,000</strong></p>
            <p>DAYS ON MARKET <strong>0</strong></p>
          </div>
        </animated.div>
      
      
        <animated.div style={{ ...columnStyle, ...animation2 }}>
          <div style={{ width: "300px", height: "200px" }}>
            <img src={img2} alt="House 2" />
          </div>
          <div style={textStyle}>
            <h2>28036 Sea Ln Drive</h2>
            <p>SQUARE FEET <strong>4,933</strong></p>
            <p>PRICE <strong>$2,400,000</strong></p>
            <p>DAYS ON MARKET <strong>14</strong></p>
          </div>
        </animated.div>
      
        <animated.div style={{ ...columnStyle, ...animation3 }}>
          <div style={{ width: "300px", height: "200px" }}>
            <img src={img3} alt="House 3" />
          </div>
          <div style={textStyle}>
            <h2>1902 Fir Rd</h2>
            <p>SQUARE FEET <strong>5,009</strong></p>
            <p>PRICE <strong>$3,300,000</strong></p>
            <p>DAYS ON MARKET <strong>12</strong></p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default SlideWithBackgroundImage;
