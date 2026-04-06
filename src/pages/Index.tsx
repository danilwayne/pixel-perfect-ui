import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import PromoBanner from "@/components/PromoBanner";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <About />
    <Services />
    <Products />
    <PromoBanner />
    <Pricing />
    <Team />
    <Testimonial />
    <Blog />
    <Footer />
  </div>
);

export default Index;
