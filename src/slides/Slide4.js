import React from "react";
import {useEffect, useState} from "react";
import AnimatedPieGraph from "../AnimatedPieGraph";
import { motion } from 'framer-motion';
import LineGraph from '../LineGraph';

const SlideWithBackgroundImage = ({ imageUrl }) => {

    const data = [
        { date: '2022-01-01', value: 10 },
        { date: '2022-01-02', value: 20 },
        { date: '2022-01-03', value: 30 },
        { date: '2022-01-04', value: 40 },
        { date: '2022-01-01', value: 10 },
        { date: '2022-01-02', value: 20 },
        { date: '2022-01-02', value: 20 },
        { date: '2022-01-03', value: 30 },
        { date: '2022-01-04', value: 40 },
        { date: '2022-01-01', value: 10 },
        { date: '2022-01-03', value: 30 },
        { date: '2022-01-04', value: 40 }
      ];
    const slideWrapperStyle = {
        width: "1040px",
        height: "580px"
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

      const textAnimation = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: -20, opacity: 1 },
      };

    return (
        <div style={slideWrapperStyle}>
      <div style={slideStyle}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <motion.h2
          animate={showText ? "visible" : "hidden"}
          initial={"hidden"}
          variants={textAnimation}
          transition={{ duration: 0.5 }}
          style={{color: "white"}}
        >
          Home value are steadily increasing
        </motion.h2>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "column"}}>
        <LineGraph height={400} width={500} data={data}/>
            
        </div>
      </div>
    </div>
    );
  };
  
  export default SlideWithBackgroundImage;