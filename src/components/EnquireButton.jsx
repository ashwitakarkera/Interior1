export default function EnquireButton() {
  const scrollToForm = () => {
    document
      .getElementById("enquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToForm}
      className="
        fixed bottom-8 right-8 z-50
        bg-[#C99157] text-white
        px-6 py-3 rounded-full
        text-sm font-semibold tracking-widest uppercase
        shadow-xl
        hover:bg-[#b5814a] hover:scale-105
        transition-all duration-300
      "
    >
      Enquire
    </button>
  );
}
