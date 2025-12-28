import { useRef, useState } from "react";

export default function BeforeAfterSlider({ beforeImg, afterImg }) {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(50);

  const updatePosition = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    let x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  };

  const startDrag = (e) => {
    e.preventDefault();

    const move = (e) => updatePosition(e.clientX);
    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  };

  const touchMove = (e) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-full overflow-hidden rounded-xl shadow-md"
      onTouchMove={touchMove}
    >
      {/* BEFORE image (comes first) */}
      <img
        src={beforeImg}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AFTER image (on top, clipped) */}
      <img
        src={afterImg}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow z-10"
        style={{ left: `${position}%` }}
      />

      {/* BEFORE label */}
      <div
        className="absolute top-4 left-4 px-3 py-1 bg-black/60 text-white text-sm rounded-md z-10"
      >
        After
      </div>

      {/* AFTER label */}
      <div
        className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-sm rounded-md z-10"
      >
        Before
      </div>

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize z-20"
        style={{ left: `calc(${position}% - 20px)` }}
        onMouseDown={startDrag}
      >
        <span className="text-gray-700 font-bold">⇆</span>
      </div>
    </div>
  );
}


