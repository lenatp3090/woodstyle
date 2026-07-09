import { motion } from "framer-motion";
import {
  FaHome,
  FaUtensils,
  FaBed,
  FaCouch,
  FaTv,
  FaDoorOpen,
  FaBuilding,
  FaTools,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaHome size={40} className="text-[#8B5E3C]" />,
      title: "Home Interior",
      description: "Complete interior solutions for modern and stylish homes.",
    },
    {
      icon: <FaUtensils size={40} className="text-[#8B5E3C]" />,
      title: "Modular Kitchen",
      description: "Functional and elegant kitchen designs tailored to your needs.",
    },
    {
      icon: <FaBed size={40} className="text-[#8B5E3C]" />,
      title: "Bedroom Interior",
      description: "Comfortable and luxurious bedroom designs with premium finishes.",
    },
    {
      icon: <FaCouch size={40} className="text-[#8B5E3C]" />,
      title: "Living Room",
      description: "Beautiful living spaces designed for comfort and elegance.",
    },
    {
      icon: <FaTv size={40} className="text-[#8B5E3C]" />,
      title: "TV Unit",
      description: "Modern TV units that combine style and storage.",
    },
    {
      icon: <FaDoorOpen size={40} className="text-[#8B5E3C]" />,
      title: "Wardrobe",
      description: "Custom wardrobes with smart storage and premium materials.",
    },
    {
      icon: <FaBuilding size={40} className="text-[#8B5E3C]" />,
      title: "Office Interior",
      description: "Professional office interiors that inspire productivity.",
    },
    {
      icon: <FaTools size={40} className="text-[#8B5E3C]" />,
      title: "Custom Furniture",
      description: "Unique furniture crafted to perfectly fit your space.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#8B5E3C] uppercase tracking-[4px] font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Interior Solutions We Offer
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We provide complete interior design and execution services,
            transforming every space into something beautiful, functional,
            and personalized.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-[#F8F6F2] rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;