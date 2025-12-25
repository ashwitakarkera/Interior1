import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-xl font-semibold tracking-wide">
          Makeover<span className="text-red-600">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-red-600"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("beforeafter")}
            className="cursor-pointer hover:text-red-600"
          >
            Before / After
          </li>
          <li
            onClick={() => scrollToSection("gallery")}
            className="cursor-pointer hover:text-red-600"
          >
            Gallery
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-red-600"
          >
            Contact
          </li>
        </ul>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm">
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("beforeafter")}>
              Before / After
            </li>
            <li onClick={() => scrollToSection("gallery")}>Gallery</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
