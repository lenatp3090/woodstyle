import { motion } from "framer-motion";
import {
  FaHammer,
  FaPaintBrush,
  FaAward,
  FaClock,
  FaRupeeSign,
  FaSmile,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaHammer size={40} className="text-[#8B5E3C]" />,
      title: "Quality Craftsmanship",
      description:
        "Every project is completed with precision, care, and attention to detail.",
    },
    {
      icon: <FaPaintBrush size={40} className="text-[#8B5E3C]" />,
      title: "Custom Designs",
      description:
        "Interiors designed according to your lifestyle and preferences.",
    },
    {
      icon: <FaAward size={40} className="text-[#8B5E3C]" />,
      title: "Premium Materials",
      description:
        "We use high-quality materials for durable and elegant interiors.",
    },
    {
      icon: <FaClock size={40} className="text-[#8B5E3C]" />,
      title: "On-Time Delivery",
      description:
        "We value your time and complete projects within the promised schedule.",
    },
    {
      icon: <FaRupeeSign size={40} className="text-[#8B5E3C]" />,
      title: "Affordable Pricing",
      description:
        "Beautiful interiors with transparent and competitive pricing.",
    },
    {
      icon: <FaSmile size={40} className="text-[#8B5E3C]" />,
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our highest priority from start to finish.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#8B5E3C] uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Why Choose WoodStyle Interiors?
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We combine creativity, premium quality, and skilled craftsmanship
            to create interiors that are beautiful, functional, and built to last.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;