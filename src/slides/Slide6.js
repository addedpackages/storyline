import React from "react";
import { motion } from "framer-motion";

const SlideWithBackgroundImage = ({ imageUrl }) => {
  const slideWrapperStyle = {
    width: "1040px",
    height: "580px",
    justifyContent: "center",
    alignItems: "center",
  };

  const slideStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "580px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "0 100px",
    position: "relative",
  };

  const textAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <div style={slideWrapperStyle}>
      <div style={slideStyle}>
        <motion.h1
          style={{ color: "white" }}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          Understanding the Market
        </motion.h1>
      </div>
    </div>
  );
};

export default SlideWithBackgroundImage;
