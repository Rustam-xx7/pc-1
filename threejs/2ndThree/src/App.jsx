import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {

  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const timeLine = gsap.timeline();

    timeLine.to(".vi-mask-group ", {
      rotate: 15,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group ", {
      scale:10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity:0,
      onUpdate: () => {
        if(timeLine.progress() >= 0.9){
          document.querySelector('.svg').remove();
          setShowContent(true);
          timeLine.kill();
        }
      }
      
    });
  });

  return (
    <>
      <div className="svg fixed top-0 left-0 z-10 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="textMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  fontFamily="Arial, sans-serif"
                  fontSize="250"
                  fontWeight="bold"
                  fill="white"
                  dominantBaseline="middle"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#textMask)"
          ></image>
        </svg>
      </div>
    </>
  );
};

export default App;
