import Navbar from '../components/Navbar';
import PortfolioStack from '../components/PortfolioStack';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact'; // Import the new section
import { TestimonialCarousel } from '../components/TestimonialCarousel';

export default function Home() {
  return (
    <main>
      <Navbar />
      <TestimonialCarousel />
      <About />
      <Services />
      <PortfolioStack />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}