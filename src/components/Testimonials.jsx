import { useState, useEffect } from "react";

/* LOGOS */
import FB from "../assets/logos/fb.svg";
import Mic from "../assets/logos/microsoft.svg";
import times from "../assets/logos/times.svg";
import People from "../assets/logos/people.svg";
import vogue from "../assets/logos/vogue.svg";

/* ================= DATA ================= */

const TESTIMONIALS = [
  {
    quote:
      "Unlike other design services though, we actually loved everything we saw from Verdure.",
    logos: [vogue, Mic, times, People, FB],
    activeLogo: 0,
  },
  {
    quote:
      "Verdure helped us turn our ideas into a space that truly feels like home.",
    logos: [vogue, Mic, times, People, FB],
    activeLogo: 1,
  },
  {
    quote:
      "The experience was seamless — beautiful designs, great prices, and zero stress.",
    logos: [vogue, Mic, times, People, FB],
    activeLogo: 2,
  },
  {
    quote:
      "Amazing experience! The team’s attention to detail and design expertise turned our house into a warm, stylish, and functional space",
    logos: [vogue, Mic, times, People, FB],
    activeLogo: 3,
  },
  {
    quote:
      "Creative and reliable interior designers. The end result exceeded our expectations. Loved working with them throughout the project.",
    logos: [vogue, Mic, times, People, FB],
    activeLogo: 4,
  }
];

/* ================= COMPONENT ================= */

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  /* AUTO ROTATE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));

  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const { quote, logos, activeLogo } = TESTIMONIALS[current];

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-8 text-center">

        {/* Quote */}
        <p className="font-serif text-3xl md:text-4xl leading-relaxed mb-20 transition-opacity duration-500">
          “{quote}”
        </p>

        {/* Logos */}
        {/* Logos */}
<div className="flex flex-wrap justify-center items-center gap-16 mb-20">
  {logos.map((Logo, index) => (
    <div
      key={index}
      className="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 flex items-center justify-center"
    >
      <img
        src={Logo}
        alt="Brand logo"
        className={`transition-transform duration-500
          ${index === activeLogo ? "scale-110" : "scale-100 grayscale opacity-40"}`}
      />
    </div>
  ))}
</div>


        {/* Navigation */}
        <div className="flex justify-between border-t pt-6 text-xs tracking-widest uppercase">
          <button onClick={prev} className="hover:opacity-60">
            Prev
          </button>
          <button onClick={next} className="hover:opacity-60">
            Next
          </button>
        </div>

      </div>
    </section>
  );
}
