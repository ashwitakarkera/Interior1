import bgImg from "../assets/images/offer-bg.jpg";

/* ================= DATA ================= */

const SECTION_TEXT = {
  tag: "OUR DESIGN PACKAGES",
  title:
    "Our interior design services are tailored to your space, style, and budget.",
};

const PACKAGES = [
  {
    label: "THE GIFT OF DESIGN",
    discount: "50% OFF",
    title: "Online\nDesign",
    description:
      "Partner online with one of our talented designers to bring your dream home to life - any time and any place.",
    oldPrice: "₹17,999",
    newPrice: "₹8,999",
    note: "per room",
    buttonText: "Get Started Online",
  },
  {
    label: "THE GIFT OF DESIGN",
    discount: "50% OFF",
    title: "In-Person\nDesign",
    description:
      "A full-service experience in your home. Your designer will assess your space and create a comprehensive design for your home.",
    oldPrice: "₹62,999",
    newPrice: "₹31,499",
    note: "plus ₹8,999 for each additional room",
    buttonText: "Get Started In Person",
  }, // Fixed the syntax error here
];

/* ================= COMPONENT ================= */

export default function OfferSection() {
  return (
    <section
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay to ensure text readability if bg image is busy */}
      <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-8 z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-widest uppercase mb-6 font-semibold text-gray-800">
            {SECTION_TEXT.tag}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-snug text-[#2b1e16]">
            {SECTION_TEXT.title}
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {PACKAGES.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-10 shadow-xl flex flex-col border border-gray-100"
            >
              {/* Discount Tag */}
              <div className="absolute top-0 right-0 bg-[#dbe6b8] px-6 py-4 text-sm font-bold text-[#2b1e16]">
                {item.discount}
              </div>

              <p className="text-xs tracking-widest uppercase mb-6 text-gray-500 font-bold">
                {item.label}
              </p>

              <h3 className="font-serif text-4xl mb-6 whitespace-pre-line text-[#2b1e16]">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed mb-10 text-gray-600">
                {item.description}
              </p>

              {/* Price Section */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="line-through text-gray-400 text-xl">
                    {item.oldPrice}
                  </span>
                  <span className="text-[#6aaed6] text-3xl font-bold">
                    {item.newPrice}
                  </span>
                </div>
                <p className="text-xs mt-2 text-gray-400 italic">
                  {item.note}
                </p>
              </div>

              {/* CTA Button */}
              <button className="mt-auto w-full border border-black py-4 text-xs tracking-widest uppercase font-bold hover:bg-black hover:text-white transition-all duration-300">
                {item.buttonText}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}