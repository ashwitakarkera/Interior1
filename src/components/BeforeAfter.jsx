import { useRef, useState, useEffect } from "react";


export default function BeforeAfter() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    setPosition((x / rect.width) * 100);
  };

  return (
    <section 
      className="w-full p-4 bg-cover bg-center"
       
    >
      {/* TEXT SECTION */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif text-gray-900 mb-2">
          What’s the best that could happen?
        </h2>
        <p className="text-gray-700 text-lg">
          Explore real client before & afters.
        </p>
      </div>

      {/* BEFORE AFTER SLIDER */}
      <div 
        ref={containerRef} 
        onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
        onTouchMove={handleMove}
        className="relative w-full max-w-5xl mx-auto h-[600px] overflow-hidden cursor-ew-resize select-none"
      >
        <img 
          src="./after.png" 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${position}%` }}
        >
          <img 
            src="./before.png" 
            alt="Before" 
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${containerWidth}px`, maxWidth: 'none' }}
            draggable="false"
          />
        </div>

        <div 
          className="absolute top-0 bottom-0 z-20 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="m15 18-6-6 6-6"/>
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

