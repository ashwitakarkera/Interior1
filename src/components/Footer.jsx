export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-semibold tracking-[0.35em]">
            Verdure<span className="text-red-600">.</span>
          </h2>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            Transforming spaces with thoughtful design and elegant makeovers.
            Experience the difference between before and after.
          </p>
        </div>

        {/* NAV LINKS */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Design Careers</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider mb-4">
            Contact
          </h3>
          <p className="text-sm text-gray-400">starxinnovations&solutions</p>
          <p className="text-sm text-gray-400 mt-1">+91 999999999</p>
          <p className="text-sm text-gray-400 mt-3">
            © {new Date().getFullYear()} Verdure. All rights reserved.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        Designed with ❤️ for beautiful spaces
      </div>
    </footer>
  );
}
