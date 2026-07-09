import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-[#D4AF37]">
            WoodStyle
          </h2>

          <p className="tracking-[4px] text-gray-400 mb-5">
            INTERIORS
          </p>
             <p className="mt-4 text-[#D4AF37] font-semibold">
  Proudly Serving Since 2002
</p>
          <p className="text-gray-300 leading-7">
            We design elegant, modern, and customized interiors for homes,
            offices, kitchens, bedrooms, wardrobes, TV units, and custom
            furniture with premium craftsmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-[#D4AF37]">Home</a></li>
            <li><a href="#about" className="hover:text-[#D4AF37]">About</a></li>
            <li><a href="#services" className="hover:text-[#D4AF37]">Services</a></li>
            <li><a href="#contact" className="hover:text-[#D4AF37]">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              9847443090 / 8547863090
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope />
              woodstayle@gmail.com
            </p>

            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              Opposite Polytechnic College,
              Iritty Road,
              Palottupally,
              Mattannur,
              Kannur - 670702
            </p>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">

            <a
              href="https://wa.me/919847443090"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 p-3 rounded-full hover:bg-green-700"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-pink-600 p-3 rounded-full hover:bg-pink-700"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © 2026 WoodStyle Interiors. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;