import React from "react";
import {useEffect, useState} from "react";
import AnimatedPieGraph from "../AnimatedPieGraph";
import { motion } from 'framer-motion';
import testPic from '../trees-bg.png';
import compassLogo from '../compasslogo.png';

const SlideWithBackgroundImage = ({ imageUrl }) => {

    const img = new Image;
    img.src = testPic;
    
    const slideWrapperStyle = {
        width: "1040px",
        height: "580px",
        justifyContent: "center",
        alignItems: "center"
    }
    const [showText, setShowText] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 3000);

    const timeOutId2 = setTimeout(() => {
        setShowImage(true);
    }, 1500);

    const timeOutId3 = setTimeout(() => {
        setShowOverlay(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeOutId2);
      clearTimeout(timeOutId3);
    };
  }, [showText]);
    
    
  const slideStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "580px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    position: "relative"
  };

  const imageWrapper = {
    position: "relative",
    top: 0,
    left: 0,
    width: img.width,
    height: "100%",
    clipPath: showImage ? "inset(0)" : "inset(0 100% 0 0)",
    transition: "clip-path 1s ease-in-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: img.width,
    height: img.height,
    backgroundColor: "rgba(68, 121, 60, 0.5)",
    filter: "5px",
    zIndex: 20,
    opacity: showOverlay ? 1 : 0,
    transition: "opacity .6s ease-in-out"
    
    
  };

  const imageStyle = {
    
        height: "100%",
        
  }

    const textStyle = {
        opacity: showText ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        color: "white",
        fontSize: "50px",
        zIndex: 10
      };

      const textStyle2 = {
        opacity: showText ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        color: "#D4D4D4",
        fontSize: "20px",
        zIndex: 10
      };

    
    const data = [
        { value: 75, color: "#002E67", label: "Over list Price" },
        { value: 12, color: "#8A98AF", label: "At list Price" },
        { value: 13, color: "#8A98A2", label: "Below list Price" },
       
      ];
      const textAnimation = {
        hidden: { opacity: 0 },
        visible: {  opacity: 1 },
      };
    
      const options = {
        width: 400,
        height: 300
      };

    return (
    <div style={slideWrapperStyle}>
      <div style={slideStyle}>
       
            <div style={imageWrapper}>
                <img style={imageStyle}src={testPic}/>
                <div style={overlayStyle}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%", justifyContent: "flex-start", padding: "30px"}}>
                    <img
                    style={{ 
                        zIndex: 3,
                        animate: showText ? "visible" : "hidden",
                        opacity: showText ? 1 : 0,
                        transition: "opacity 0.5s"}}
                        src={compassLogo}
                    />
                    <motion.h1
                    animate={showText ? "visible" : "hidden"}
                    initial={"hidden"}
                    variants={textAnimation}
                    transition={{ duration: 0.25 }}
                    style={textStyle}
                    >
                    Malibu Update
                    </motion.h1>
                    <motion.h3
                    animate={showText ? "visible" : "hidden"}
                    initial={"hidden"}
                    variants={textAnimation}
                    transition={{ duration: 0.5 }}
                    style={textStyle2}
                    >
                    52 Week Price Trends
                    </motion.h3>
                    </div>
                </div>
            </div>
        
            
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}} >
                
                <AnimatedPieGraph
                width={options.width}
                height={options.height}
                data={data}
                textColor={"#002E67"}
                duration={2}
                />
            </div>
        
      </div>
    </div>
    );
  };
  
  export default SlideWithBackgroundImage;