import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stylists from "@/components/Stylists";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stylists />
      <Gallery />
      <Reviews />
      <Contact />
      <footer className="footer">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Mia Bella Salon & Spa. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
