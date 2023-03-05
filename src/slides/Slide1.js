import React from "react";
import {useEffect, useState} from "react";
import { motion } from 'framer-motion';
import AnimatedBarGraph from "../BarGraph";

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
    }, 2500)
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timeOutId2);
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
    alignItems: "center",
    overflow: "hidden",
    padding: "0 100px",
    position: "relative"
  };

    const textStyle = {
        opacity: showText ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        color: "white"
      };

   const data = [
        { category: 'A', value: 12 },
        { category: 'B', value: 13 },
        { category: 'C', value: 15 },
        { category: 'D', value: 16 },
        { category: 'E', value: 18 },
        { category: 'F', value: 22 }

      ];
      const textAnimation = {
      hidden: { y: -200, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    };

    return (
        <div style={slideWrapperStyle}>
      <div style={slideStyle}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
            <motion.h1
                animate={showText ? "visible" : "hidden"}
                initial={"hidden"}
                variants={textAnimation}
                transition={{ duration: 0.5 }}
                style={{color: "white"}}
            >
                            Congratulations, Sales Team!
            </motion.h1>
            <motion.ul
                animate={showText ? "visible" : "hidden"}
                initial={"hidden"}
                variants={textAnimation}
                transition={{ duration: 0.5 }}
                style={{color: "white"}}
            >
                <li>Revenue is up month over month</li>
                
            </motion.ul>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "column"}}>
            
            <AnimatedBarGraph width={400} height={300} data={data}/>
        </div>
      </div>
    </div>
    );
  };
  
  export default SlideWithBackgroundImage;