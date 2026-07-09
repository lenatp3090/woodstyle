import { motion } from "framer-motion";
import heroImage from "../assets/bedroom.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F8F6F2] flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#8B5E3C] font-semibold uppercase tracking-[4px]">
            Welcome to
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
            WoodStyle <br />
            <span className="text-[#8B5E3C]">Interiors</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Transform your home and workspace with elegant, modern, and
            customized interior solutions. We specialize in modular kitchens,
            wardrobes, bedrooms, living rooms, TV units, office interiors, and
            custom furniture designed to match your style.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#8B5E3C] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#6E472D] hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
            </a>

            <a
              href="tel:9847443090"
              className="border-2 border-[#8B5E3C] text-[#8B5E3C] px-8 py-4 rounded-xl hover:bg-[#8B5E3C] hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="WoodStyle Interiors"
            className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;