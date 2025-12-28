import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let start = 0;

    const animate = () => {
      start += Math.ceil(value / 60);
      if (start < value) {
        setCount(start);
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer && observer.disconnect();
  }, [value]);

  return (
    <h3
      ref={ref}
      className="text-4xl font-bold mb-2"
      style={{ color: "#C99157" }}
    >
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#faf7f1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f2efe7] rounded-3xl px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

            {/* Stat 1 */}
            <div>
              <AnimatedNumber value={50000} suffix="+" />
              <p className="text-sm text-gray-700">
                Happy Customers
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <AnimatedNumber value={200000} suffix="+" />
              <p className="text-sm text-gray-700">
                Interior Products To Choose From
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <AnimatedNumber value={8000000} suffix="+" />
              <p className="text-sm text-gray-700 leading-relaxed">
                Space Delivered Through Space<br />
                Planning, Design & Build
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <h3
                className="text-4xl font-bold mb-2"
                style={{ color: "#C99157" }}
              >
                GLOBAL
              </h3>
              <p className="text-sm text-gray-700">
                Presence
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
