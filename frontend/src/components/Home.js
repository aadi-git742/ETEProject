import React from "react";
import HomeImage from "../items/download.png";
import Typewriter from "typewriter-effect";
const HomePage = () => {
  return (
    <>
    <div className="home-topscreen">
      <div className="home-leftscreen">
        <h2>
        Banking System</h2>
        <div>
        <h3>
        <Typewriter
        options={{
            loop:true,
        }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcomes You...")
              .pauseFor(1000)
              .start()
          }}
        />
        </h3>
        </div>
        
      </div>
      <img src={HomeImage} alt="React Logo" />
    </div>
    
    </>
  );
};

export default HomePage;
