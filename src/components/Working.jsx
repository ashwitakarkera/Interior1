import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";
import work4 from "../assets/images/work4.jpg";
import work5 from "../assets/images/work5.jpg";

/* ================= TEXT CONSTANTS ================= */

const SECTION_TITLE = "How Verdure Works";

const STEPS = [
  {
    number: "01",
    title: `Match with one of our 
talented designers and get inspired.`,
    description:
      "Take a style quiz to help us get to know you a little bit better, then choose your interior designer from our personalized recommendations. With over 10 years of experience and nearly 1 million designs, our expert team will help you turn your vision into reality.",
    images: [work1, work2, work3, work4],
    layout: "grid",
  },
  {
    number: "02",
    title: `Partner with your designer 
to create a home you love.`,
    description:
      "Great design doesn’t happen alone. Let your designer guide you through every decision — from layout to furniture — ensuring your space feels intentional, personal, and beautifully lived in.",
    image: work5,
    layout: "single",
  },
  {
    number: "03",
    title: `Shop exclusive deals, and bring 
your design home with ease.`,
    description:
      "Access the best prices on your favorite home brands, get exclusive discounts, and shop everything you need for your space in a single, streamlined checkout. The result? Even better than your dreams.",
    image: work2,
    layout: "single",
  },
];

/* ================= COMPONENT ================= */

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Section Title */}
        <p className="text-center uppercase tracking-[0.25em] text-xs font-semibold mb-24">
          {SECTION_TITLE}
        </p>

        {STEPS.map((step, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start ${
              index !== STEPS.length - 1 ? "mb-32" : ""
            }`}
          >
            {/* Text */}
            <div className="flex gap-10">
              <span className="text-5xl font-serif text-black/80">
                {step.number}
              </span>

              <div>
                <h2 className="font-serif text-4xl leading-tight mb-6 whitespace-pre-line">
                  {step.title}
                </h2>

                <p className="text-gray-700 leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Images */}
            {step.layout === "grid" ? (
              <div className="grid grid-cols-2 gap-6">
                {step.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="rounded-2xl h-40 md:h-44 w-full object-cover"
                    alt=""
                  />
                ))}
              </div>
            ) : (
              <div>
                <img
                  src={step.image}
                  className="rounded-3xl h-[300px] w-full object-cover"
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

