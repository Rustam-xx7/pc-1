# Steps:
- use ***Google Wisk*** for image generation
- use ***Google flow*** for video  
- use ***ezgif*** for video to jpeg frames
- use the prompt in ***antigravity*** 
- install gsap 
```
npm install gsap
``` 

# Prompt for scroll animation component :
```
I already have a Next.js 14+ app with App Router set up using JavaScript (not TypeScript) and Tailwind CSS. I need you to create a single component called HeroScrollSequence.jsx and drop it into my existing hero section as a div block.
The Effect: A scroll-driven image sequence where JPEG frames play like a video as the user scrolls. Images are named 1.jpg to 120.jpg stored in /public/frames/.
Exact Requirements:
File to create: components/HeroScrollSequence.jsx

No TypeScript, no type annotations, plain .jsx file only
Add "use client" at the very top of the file since this uses browser APIs
Use Tailwind CSS utility classes for ALL styling — no inline styles, no CSS modules, no styled components
The component returns a single wrapper div with Tailwind class relative and inline style only for height: style={{ height: '500vh' }} (since 500vh is not a default Tailwind value)
Inside it, a sticky div using Tailwind classes sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black
The <canvas> element should have Tailwind class block and fill the container — use ref={canvasRef} on it
Use GSAP ScrollTrigger to track scroll progress through the tall wrapper div
Use a useRef on the wrapper div as the ScrollTrigger trigger
ScrollTrigger config: start: "top top", end: "bottom bottom", scrub: true
In the ScrollTrigger onUpdate callback, get self.progress (0 to 1) and compute: const index = Math.round(self.progress * 119)
Preload all 120 images on mount inside a useEffect using new Image() and store them in a useRef array
Draw the current frame using canvasRef.current.getContext('2d').drawImage(images[index], ...)
Canvas drawing must maintain aspect ratio with contain fit — calculate scale, offsetX, offsetY manually and draw centered
Canvas must resize responsively using a resize event listener on window
Use requestAnimationFrame for all canvas draw calls
Register ScrollTrigger plugin with gsap.registerPlugin(ScrollTrigger) inside the component
All GSAP cleanup must happen in the useEffect return function: ScrollTrigger.killAll() and remove resize listeners
Images path: /frames/1.jpg to /frames/120.jpg
No props required — fully self-contained component
Use only useRef and useEffect from React, nothing else
```