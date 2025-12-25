export function EnquiryForm() {
  return (
    <section
      id="enquiry-form"
      className="bg-neutral-100 py-28"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">

        <h2 className="font-serif text-4xl mb-6">
          Enquire With Verdure
        </h2>

        <p className="text-gray-600 mb-12">
          Tell us about your space and we’ll get back to you shortly.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

          <input
            type="text"
            placeholder="Full Name"
            className="border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99157]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99157]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99157]"
          />

          <input
            type="text"
            placeholder="City"
            className="border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99157]"
          />

          <textarea
            placeholder="Tell us about your project"
            rows="4"
            className="md:col-span-2 border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99157]"
          ></textarea>

          <button
            type="submit"
            className="
              md:col-span-2
              bg-[#C99157] text-white
              py-4 rounded-full
              font-semibold tracking-widest uppercase
              hover:bg-[#b5814a]
              transition
            "
          >
            Submit Enquiry
          </button>

        </form>
      </div>
    </section>
  );
}
