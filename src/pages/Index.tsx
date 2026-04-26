import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // seta flutuante para voltar ao topo
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

const Index = () => {
  const [showTopButton, setShowTopButton] = useState(false); // controla exibicao do botao flutuante

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 300); // mostrar botão somente depois de rolar um pouco
    };

    window.addEventListener("scroll", onScroll); // escuta rolagem da pagina
    onScroll(); // executa uma vez para estado inicial correto

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const startY = window.scrollY; // posição atual
    const duration = 600; // duração da animação em ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easing suave
      window.scrollTo(0, Math.round(startY * (1 - ease)));

      if (progress < 1) {
        requestAnimationFrame(animate); // continua animando ate chegar ao topo
      }
    };

    requestAnimationFrame(animate); // inicia a animação de scroll
  };

  return (
    <>
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

      <a
        href="https://wa.me/55986527228"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-green-600"
        aria-label="Falar no WhatsApp"
      >
        WhatsApp
      </a>

      {showTopButton && (
        // botao flutuante aparece somente quando showTopButton = true
        <button
          type="button"
          onClick={scrollToTop} // usa animação manual para subir suavemente
          className="fixed bottom-24 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-black shadow-lg transition hover:bg-slate-100"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" /> {/* seta preta */}
        </button>
      )}
    </>
  );
};

export default Index;
