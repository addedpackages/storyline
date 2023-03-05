import React from "react";
import {useEffect, useState} from "react";
import { motion } from 'framer-motion';
import jesse from "../jesse.png";

const SlideWithBackgroundImage = ({ imageUrl }) => {

    const slideWrapperStyle = {
        width: "1040px",
        height: "580px",
        justifyContent: "center",
        alignItems: "center"
    }
    const [showText, setShowText] = useState(false);
    const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 1500);

    const timeOutId2 = setTimeout(() => {
        setShowImage(true);
    }, 5000)
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timeOutId2);
    };
  }, [showText]);
  
  const headingStyle = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white"
  };
    
    const slideStyle = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      height: "580px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      overflow: "hidden",
      padding: "0 100px",
      position: "relative"
    };

   const captionStyle = {
    fontSize: "12px",
    lineHeight: "1.2",
    textAlign: "center",
    marginTop: "10px",
    color: "white",
  };

      const textAnimation = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };

      const congratsAnimation = {
        hidden: { x: -1000, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };

    return (
      <div style={slideWrapperStyle}>
      <div style={slideStyle}>
      <div style={headingStyle}>
          <h1>Sales Record of April</h1>
      </div>
          <div style={{width:"90%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <motion.h2
                  animate={showText ? "visible" : "hidden"}
                  initial={"hidden"}
                  variants={textAnimation}
                  transition={{ duration: 2 }}
                  style={{color: "white"}}
              >
                  The rep with the most sales was:
              </motion.h2>
              <motion.h3
                  animate={showText ? "visible" : "hidden"}
                  initial={"hidden"}
                  variants={congratsAnimation}
                  transition={{ duration: 6 }}
                  style={{color: "white"}}
              >
                  Jesse Rosenberg. Congratulation, Jesse!
              </motion.h3>
            </div>
              {showImage && (
                  <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                      <motion.img 
                          style={{width: "200px", height: "200px"}}
                          animation={showImage ? "visible" : "hidden"}
                          src={jesse}
                      />
                      <span style={captionStyle}>Jesse Rosenberg</span>
                  </div>
              )}
          </div>
      </div>
  </div>
    );
  };
  
  export default SlideWithBackgroundImage;