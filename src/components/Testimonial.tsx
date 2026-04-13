import { useEffect, useMemo, useState } from "react"; // hooks para estado e autoplay do carrossel
import { ArrowLeft, ArrowRight, MessageSquareQuote } from "lucide-react"; // setas laterais e icone de citação
import cachorroServico from "@/assets/cachorro-comentario.jpg"; // imagem de fundo solicitada
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const testimonials = [
  {
    img: team1,
    text: "Atendimento excelente. Meu pet ficou tranquilo, recebeu carinho e voltou super feliz para casa.",
    name: "Mariana Souza",
    role: "Tutora de Pet",
  },
  {
    img: team2,
    text: "Equipe muito atenciosa e cuidadosa em cada detalhe. Recomendo para quem busca confiança e qualidade.",
    name: "Fernanda Lima",
    role: "Cliente Premium",
  },
  {
    img: team3,
    text: "Serviço impecável. O ambiente é seguro, organizado e meu cachorro adorou a experiência.",
    name: "João Pedro",
    role: "Tutor de Cachorro",
  },
  {
    img: team4,
    text: "Desde o primeiro contato, fui muito bem atendida. Cuidado humano e profissional com os pets.",
    name: "Larissa Costa",
    role: "Mãe de Pet",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0); // índice atual do slide visível
  const [enableTransition, setEnableTransition] = useState(true); // controla animação do track

  const loopedTestimonials = useMemo(
    () => [...testimonials, testimonials[0]], // duplica o primeiro no final para loop suave
    [],
  );

  const goNext = () => {
    setActiveIndex((prev) => prev + 1); // avança para o próximo depoimento
  };

  const goPrev = () => {
    if (activeIndex === 0) {
      // quando estiver no primeiro, reposiciona para o fim e volta 1 com transição
      setEnableTransition(false);
      setActiveIndex(testimonials.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setActiveIndex(testimonials.length - 1);
        });
      });
      return;
    }

    setActiveIndex((prev) => prev - 1); // volta para o slide anterior
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      goNext(); // transição automática suave do carrossel
    }, 4800);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const onTrackTransitionEnd = () => {
    if (activeIndex >= testimonials.length) {
      // ao chegar no slide clone, volta instantaneamente para o primeiro real
      setEnableTransition(false);
      setActiveIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  return (
    <section
      id="testimonial"
      className="relative py-20 md:py-24"
      style={{
        backgroundImage: `url(${cachorroServico})`, // fundo novo conforme solicitado
        backgroundSize: "cover",
        backgroundPosition: "left center", // prioriza cachorro visível no lado esquerdo
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/40" /> {/* camada suave para legibilidade sem esconder o cachorro */}

      <div className="relative container mx-auto px-4">
        <div className="max-w-[45rem] ml-auto bg-pet-light-gray/95 p-4 md:p-6"> {/* caixa reduzida em ~20% para mostrar ainda mais do cachorro no fundo */}
          <div className="relative">
            <button
              type="button"
              onClick={goPrev} // seta esquerda: muda ordem para trás
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-1/2 h-12 w-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-pet-green-dark transition-colors z-10"
              aria-label="Anterior"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goNext} // seta direita: muda ordem para frente
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-1/2 h-12 w-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-pet-green-dark transition-colors z-10"
              aria-label="Próximo"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="overflow-hidden"> {/* recorte para esconder slides fora da área */}
              <div
                className={`flex ${enableTransition ? "transition-transform duration-700 ease-out" : ""}`} // animação suave do deslocamento
                style={{ transform: `translateX(-${activeIndex * 100}%)` }} // desloca 1 slide por vez
                onTransitionEnd={onTrackTransitionEnd}
              >
                {loopedTestimonials.map((item, index) => (
                  <article key={`${item.name}-${index}`} className="w-full flex-shrink-0 text-center px-5 md:px-8"> {/* padding interno reduzido em ~20% para compactar mais o card */}
                    <div className="w-24 h-24 mx-auto overflow-hidden border border-border"> {/* avatar quadrado no topo */}
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>

                    <div className="w-10 h-10 mx-auto -mt-2 mb-4 bg-white border border-border flex items-center justify-center"> {/* icone de citação abaixo da foto */}
                      <MessageSquareQuote className="h-4 w-4 text-primary" />
                    </div>

                    <p className="text-foreground/80 text-2xl md:text-[30px] leading-relaxed mb-5">{item.text}</p>

                    <div className="w-36 h-px bg-foreground/20 mx-auto mb-3" /> {/* linha separadora acima do nome */}
                    <h4 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-1 uppercase">{item.name}</h4>
                    <p className="text-muted-foreground text-2xl">{item.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
