import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
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
