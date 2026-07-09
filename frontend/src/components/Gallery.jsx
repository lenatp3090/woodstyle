import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Gallery() {

  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/gallery/")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.log(error));
  }, []);


  const categories = [
    "All",
    "Kitchen",
    "Bedroom",
    "Living Room",
    "Wardrobe",
    "Office",
    "TV Unit"
  ];


  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter(
          (item) => item.category === selectedCategory
        );


  return (
    <section className="py-24 bg-[#F8F6F2]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-[#8B5E3C] uppercase tracking-[4px] font-semibold">
            Our Work
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Project Gallery
          </h2>

          <p className="text-gray-600 mt-5">
            A glimpse of our completed interior projects.
          </p>

        </div>


        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full ${
                selectedCategory === category
                ? "bg-[#8B5E3C] text-white"
                : "bg-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>


        {/* Gallery Images */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredImages.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />


              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.category}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;