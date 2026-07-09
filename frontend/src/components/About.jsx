import { motion } from "framer-motion";
import heroImage from "../assets/kitchen.jpeg";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={heroImage}
            alt="WoodStyle Interiors"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#8B5E3C] uppercase tracking-[4px] font-semibold">
            About Us
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Creating Beautiful Interiors
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            WoodStyle Interiors is dedicated to creating elegant,
            comfortable, and functional spaces that reflect your lifestyle.
            We combine quality craftsmanship, premium materials, and modern
            designs to deliver interiors that exceed expectations.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-8">
            Whether it's a modular kitchen, wardrobe, living room, bedroom,
            office interior, or custom furniture, our goal is to transform
            your vision into reality with precision and care.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-[#F8F6F2] rounded-2xl p-6 text-center shadow">
              <h3 className="text-4xl font-bold text-[#8B5E3C]">
                100+
              </h3>
              <p className="text-gray-600 mt-2">
                Completed Projects
              </p>
            </div>

            <div className="bg-[#F8F6F2] rounded-2xl p-6 text-center shadow">
              <h3 className="text-4xl font-bold text-[#8B5E3C]">
                100%
              </h3>
              <p className="text-gray-600 mt-2">
                Customer Satisfaction
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;