import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.jpg";

export default function Home() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden font-sans">

      {/* Brand Bar */}
      <div className="relative z-20 w-full bg-white py-6 border-b">
        <h1
          className="
            text-center
            font-serif
            text-3xl md:text-4xl
            tracking-[0.35em]
            text-neutral-800
          "
        >
          VERDURE
          <span className="text-red-600">.</span>
        </h1>
      </div>

      {/* Background Image */}
      <img
        src={heroImg}
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r 
                      from-black/55 via-black/35 to-black/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 h-full flex items-center">
        <div className="max-w-xl text-white">

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.15em] text-[11px] font-bold mb-6 opacity-90"
          >
            The #1 Interior Design Service
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-[68px] leading-[1.1] mb-10"
          >
            Designing your <br />
            dream home just <br />
            became a reality.
          </motion.h1>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 rounded-full text-white font-semibold text-sm tracking-widest uppercase
                       bg-[#C99157] hover:bg-[#b5814a] transition-all duration-300 shadow-lg"
          >
            Get Started
          </motion.button>

        </div>
      </div>
    </section>
  );
}
