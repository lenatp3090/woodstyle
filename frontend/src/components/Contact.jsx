import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://127.0.0.1:8000/api/contact/",
      formData
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
};
  return (
    <section id="contact" className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#8B5E3C] uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Let's Build Your Dream Interior
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Contact WoodStyle Interiors for home, office, and custom interior
            solutions. We'd love to discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">
                <FaMapMarkerAlt className="text-[#8B5E3C] text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                  WoodStyle Interiors<br />
                 Opposite Polytechnic College<br />
                  Iritty Road, Palottupally<br />
                   Mattannur, Kannur - 670702
</p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaPhoneAlt className="text-[#8B5E3C] text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>

                  <a
                    href="tel:9847443090"
                    className="block text-gray-600 hover:text-[#8B5E3C]"
                  >
                    9847443090
                  </a>

                  <a
                    href="tel:8547863090"
                    className="block text-gray-600 hover:text-[#8B5E3C]"
                  >
                    8547863090
                  </a>

                </div>
              </div>

              <div className="flex gap-5">
                <FaEnvelope className="text-[#8B5E3C] text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>

                  <a
                    href="mailto:woodstayle@gmail.com"
                    className="text-gray-600 hover:text-[#8B5E3C]"
                  >
                    woodstayle@gmail.com
                  </a>
                </div>
              </div>

            </div>

            <a
              href="https://wa.me/919847443090"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >

            <h3 className="text-3xl font-bold mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
/>

              <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
/>

              <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
/>
<textarea
  rows="5"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell us about your project..."
  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
></textarea>

              <button
                className="w-full bg-[#8B5E3C] text-white py-4 rounded-xl hover:bg-[#6E472D] transition"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>
{/* Google Map */}
<div className="mt-16">
  <h3 className="text-3xl font-bold text-center mb-8">
    Find Us
  </h3>

  <div className="rounded-3xl overflow-hidden shadow-xl">
    <iframe
      title="WoodStyle Interiors Location"
     src="https://www.google.com/maps?q=WHPQ%2BR7J,+Opposite+Polytechnic+College,+Iritty+Road,+Palottupally,+Mattannur,+Kerala&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>
      </div>
    </section>
  );
}

export default Contact;