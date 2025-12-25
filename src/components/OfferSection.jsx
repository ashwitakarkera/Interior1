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
    oldPrice: "$199",
    newPrice: "$99",
    note: "per room",
    buttonText: "Get Started Online",
  },
  {
    label: "THE GIFT OF DESIGN",
    discount: "50% OFF",
    title: "In-Person\nDesign",
    description:
      "A full-service experience in your home. Your designer will assess your space and create a comprehensive design for your home.",
    oldPrice: "$699",
    newPrice: "$349",
    note: "plus $99 for each additional room",
    buttonText: "Get Started In Person",
  },
];

/* ================= COMPONENT ================= */

export default function OfferSection() {
  return (
    <section
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-widest uppercase mb-6">
            {SECTION_TEXT.tag}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-snug">
            {SECTION_TEXT.title}
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {PACKAGES.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-10 shadow-xl flex flex-col"
            >
              {/* Discount */}
              <div className="absolute top-0 right-0 bg-[#dbe6b8] px-6 py-4 text-sm font-semibold">
                {item.discount}
              </div>

              <p className="text-xs tracking-widest uppercase mb-6">
                {item.label}
              </p>

              <h3 className="font-serif text-4xl mb-6 whitespace-pre-line">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed mb-10">
                {item.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-xl">
                  <span className="line-through text-gray-400 mr-3">
                    {item.oldPrice}
                  </span>
                  <span className="text-[#6aaed6] text-3xl font-medium">
                    {item.newPrice}
                  </span>
                </p>
                <p className="text-xs mt-2 text-gray-500">
                  {item.note}
                </p>
              </div>

              {/* CTA Button */}
              <button className="mt-auto w-full border border-black py-4 text-xs tracking-widest uppercase font-medium hover:bg-black hover:text-white transition">
                {item.buttonText}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
