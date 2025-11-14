// NotFound.jsx
import React, { useEffect, useState } from "react";

const generateStars = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + Math.floor(Math.random() * 100000),
    size: Math.random() * 2 + 1,
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 4,
    direction: Math.random() > 0.5 ? "topLeft" : "topRight",
  }));

export default function NotFound() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(30));
    const interval = setInterval(() => {
      setStars((prev) => [...prev.slice(-20), ...generateStars(10)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
      <style>{`
        /* Animations (same as yours) */
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes tilt { 0%,100%{transform:rotate(-2deg)} 50%{transform:rotate(2deg)} }
        .animate-tilt { animation: tilt 6s ease-in-out infinite; }

        @keyframes fallTopLeft {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-100px, 100vh); opacity: 0; }
        }
        @keyframes fallTopRight {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(100px, 100vh); opacity: 0; }
        }
        .animate-fall-topLeft { animation: fallTopLeft 5s linear infinite; }
        .animate-fall-topRight { animation: fallTopRight 5s linear infinite; }

        /* background image helper */
        .bg-space {
          background: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9770934.jpg-Wl31ERQfbntJABIblVId5PIBjqP5Gx.jpeg") no-repeat center center/cover;
        }

        /* ufo wrapper */
        .ufo {
          position: absolute;
          top: 33%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 6s ease-in-out infinite, tilt 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background image (lowest layer) */}
      <div className="absolute inset-0 bg-space z-0" />

      {/* Falling stars (above bg, below content) */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {stars.map((s) => (
          <div
            key={s.id}
            className={`absolute ${s.direction === "topLeft" ? "animate-fall-topLeft" : "animate-fall-topRight"}`}
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          >
            <div className="h-full w-full rounded-full bg-white opacity-80" />
          </div>
        ))}
      </div>

      {/* UFO (kept behind main content so it doesn't cover the button) */}
      <div className="ufo z-20 pointer-events-none">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
          alt="UFO"
          width={300}
          height={150}
          style={{ display: "block" }}
        />
      </div>

      {/* Main content - top of stack */}
      <div className="relative z-50 flex flex-col items-center justify-center text-center px-4 gap-6 max-w-4xl">
        <p className="text-lg md:text-xl text-gray-300">Oops! Looks like this page got lost in space</p>

        {/* big number: responsive and constrained so it won't overflow or overlap */}
        <h1 className="text-[120px] sm:text-[160px] md:text-[220px] leading-none font-extrabold text-white drop-shadow-md">
          404
        </h1>

        {/* CTA - visible and clickable, sits above everything */}
        <a
          href="/"
          className="relative z-60 inline-block px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-shadow shadow-lg"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
