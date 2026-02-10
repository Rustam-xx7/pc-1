import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const timeLine = gsap.timeline();

    timeLine
      .to(".vi-mask-group ", {
        rotate: 15,
        duration: 2,
        ease: "power4.easeInOut",
        transformOrigin: "50% 50%",
      })
      .to(".vi-mask-group ", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: () => {
          if (timeLine.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            timeLine.kill();
          }
        },
      });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -1,
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -0.8,
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -0.8,
    });
    gsap.to(".girlbg", {
      scale: 1,
      rotate: 0,
      bottom: "-50%",
      x: "-50%",
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -0.8,
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".imagesdiv .text", {
        x: `${xMove}% * 1.7`,
      });
      gsap.to(".imagesdiv .sky", {
        x: xMove * 0.5,
      });
      gsap.to(".imagesdiv .bg", {
        x: xMove * 0.6,
      });
    });
  }, [showContent]);

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
      {showContent && (
        <div className="main rotate-[-10deg] scale-[1.4]  w-full h-screen text-white">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar w-full py-6 px-10  absolute top-0 left-0 z-10">
              <div className="logo flex items-center gap-6">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-15 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-6 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl -mt-1.5">Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv w-full h-screen relative overflow-hidden">
              <img
                src="./sky.png"
                alt="bg"
                className="sky w-full h-full object-cover absolute top-0 left-0 scale-[1.8] rotate-[-15deg] "
              />
              <img
                src="./bg.png"
                alt="bg"
                className="bg scale-[1.6] rotate-[-7deg] w-full h-full object-cover absolute top-0 left-0"
              />
              <div className="text absolute top-10 left-1/2 -translate-x-1/2 text-white flex flex-col gap-2 ">
                <h1 className="text-8xl leading-none -ml-30">grand</h1>
                <h1 className="text-8xl leading-none ml-10">theft</h1>
                <h1 className="text-8xl leading-none -ml-30">auto</h1>
              </div>
              <img
                src="./girlbg.png"
                alt="bg"
                className="girlbg object-cover absolute -bottom-[180%] left-1/2 -translate-x-1/2 h-230 scale-[3.5] rotate-[-10deg] "
              />
            </div>
            <div className="botambar absolute bottom-0 left-0 z-10 w-full py-10 px-10 bg-linear-to-t from-black to-transparent flex items-center">
              <div className="flex gap-4 text-white items-center">
                <i className="ri-arrow-down-line text-2xl"></i>
                <h3 className="font-[Helvetica_Now_Display] text-md">
                  Scroll Down
                </h3>
              </div>
              <img
                src="./ps5.png"
                alt="ps5"
                className="h-10 absolute bottom-2 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
          <div className="w-full h-screen flex justify-center items-center bg-black text-white">
            <div className="cntnr flex w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  src="./imag.png"
                  alt="image"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-cover scale-[1.2]"
                />
              </div>
              <div className="right w-[40%] py-6 h-full flex flex-col justify-center ">
                <h1 className="text-5xl">Still Running</h1>
                <h1 className="text-5xl">Not Hunting</h1>
                <p className="font-[Helvetica_Now_Display] mt-10 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi reiciendis adipisci saepe corrupti explicabo harum beatae minima quas, repudiandae ex nemo nesciunt. Temporibus.</p>
                <p className="font-[Helvetica_Now_Display] mt-4  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde magni quibusdam sint omnis ipsam eveniet. Atque quidem tempora, assumenda reprehenderit inventore eveniet!</p>
                <button className="bg-yellow-500 px-6 w-fit py-6 mt-10 text-2xl">Download now.</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
