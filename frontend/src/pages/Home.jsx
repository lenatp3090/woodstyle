import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
       <WhatsAppButton />
    </>
  );
}

export default Home;