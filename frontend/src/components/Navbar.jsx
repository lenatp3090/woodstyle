import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-[#8B5E3C]">
            WoodStyle
          </h1>
          <p className="text-sm tracking-[4px] text-gray-500">
            INTERIORS
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-[#8B5E3C]">Home</a></li>
          <li><a href="#about" className="hover:text-[#8B5E3C]">About</a></li>
          <li><a href="#services" className="hover:text-[#8B5E3C]">Services</a></li>
          <li><a href="#contact" className="hover:text-[#8B5E3C]">Contact</a></li>
        </ul>

        {/* Call Button (Desktop) */}
        <a
          href="tel:9847443090"
          className="hidden md:block bg-[#8B5E3C] text-white px-5 py-2 rounded-lg hover:bg-[#6E472D] transition"
        >
          Call Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-6 space-y-6 font-medium">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a
                href="tel:9847443090"
                className="bg-[#8B5E3C] text-white px-6 py-2 rounded-lg"
              >
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;