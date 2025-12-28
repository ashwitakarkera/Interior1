import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const DATA = {
  living: [
    { before: "/living/b1.PNG", after: "/living/a1.PNG" },
    { before: "/living/b2.PNG", after: "/living/a2.PNG" },
    { before: "/living/b3.PNG", after: "/living/a3.PNG" },
    { before: "/living/b4.PNG", after: "/living/a4.PNG" },
  ],
  dining: [
    { before: "/dining/b1.PNG", after: "/dining/a1.PNG" },
    { before: "/dining/b2.PNG", after: "/dining/a2.PNG" },
    { before: "/dining/b3.PNG", after: "/dining/a3.PNG" },
    { before: "/dining/b4.PNG", after: "/dining/a4.PNG" },
  ],
  bedroom: [
    { before: "/bedroom/b1.png", after: "/bedroom/a1.png" },
    { before: "/bedroom/b2.PNG", after: "/bedroom/a2.PNG" },
    { before: "/bedroom/b3.PNG", after: "/bedroom/a3.PNG" },
    { before: "/bedroom/b4.PNG", after: "/bedroom/a4.PNG" },
  ],
};

export default function BeforeAfterSection() {
  const [active, setActive] = useState("living");

  return (
    <section className="bg-[#faf7f1] py-10">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-serif text-[#2b1e16]">
          What’s the best that could happen?
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-6">
        {Object.keys(DATA).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2 rounded-full border transition font-medium ${
              active === tab
                ? "bg-[#eadcc8] border-[#eadcc8] text-[#2b1e16]"
                : "bg-white text-gray-700 border-gray-200 hover:border-[#eadcc8]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Room
          </button>
        ))}
      </div>

      {/* Grid of sliders */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {DATA[active].map((item, i) => (
          <div key={`${active}-${i}`} className="h-64 md:h-80">
            <BeforeAfterSlider beforeImg={item.before} afterImg={item.after} />
          </div>
        ))}
      </div>
    </section>
  );
}

