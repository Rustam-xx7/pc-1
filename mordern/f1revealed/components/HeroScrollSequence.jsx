"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroScrollSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const images = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Preload all 200 images
    for (let i = 1; i <= 200; i++) {
      const img = new Image();
      const indexStr = String(i).padStart(3, "0");
      img.src = `/frames/ezgif-frame-${indexStr}.jpg`;
      images.current.push(img);
    }

    let currentIndex = 0;

    const render = (index) => {
      if (!canvas || !ctx) return;
      const img = images.current[index];
      if (!img) return;

      // Ensure canvas sizes correctly
      if (
        canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight
      ) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (img.width && img.height) {
        // Cover fit calculations (instead of contain)
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio); // ← Changed from Math.min

        const drawWidth = img.width * ratio;
        const drawHeight = img.height * ratio;

        // Calculate offsets to center
        const offsetX = (canvas.width - drawWidth) / 2;
        const offsetY = (canvas.height - drawHeight) / 2;

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          offsetX,
          offsetY,
          drawWidth,
          drawHeight,
        );
      }
    };

    const renderCurrent = () => render(currentIndex);

    // Initial draw once first image is loaded
    if (images.current[0]) {
      images.current[0].onload = () => requestAnimationFrame(renderCurrent);
    } else {
      requestAnimationFrame(renderCurrent);
    }

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      requestAnimationFrame(renderCurrent);
    };

    window.addEventListener("resize", onResize);
    onResize(); // initial set

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const index = Math.round(self.progress * 199);
        if (currentIndex !== index) {
          currentIndex = index;
          requestAnimationFrame(renderCurrent);
        }
      },
    });

    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>
    </div>
  );
}
