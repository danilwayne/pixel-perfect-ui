import { useEffect, useMemo, useState } from "react"; // hooks para estado do carrossel e autoplay
import { ArrowLeft, ArrowRight, Facebook, Linkedin, Twitter } from "lucide-react"; // icones das setas e redes sociais
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const members = [
  { img: team1, name: "Ana Silva", role: "Veterinária" },
  { img: team2, name: "Carlos Santos", role: "Veterinário" },
  { img: team3, name: "Maria Oliveira", role: "Pet Groomer" },
  { img: team4, name: "João Costa", role: "Treinador" },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0); // indice atual do slide
  const [enableTransition, setEnableTransition] = useState(true); // controla transicao suave no track
  const [slidesToShow, setSlidesToShow] = useState(4); // quantidade de cards visiveis por viewport

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // mobile: 1 card visivel
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // tablet: 2 cards visiveis
      } else {
        setSlidesToShow(4); // desktop: 4 cards visiveis (igual referencia)
      }
    };

    onResize(); // define valor inicial
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const duplicatedMembers = useMemo(
    () => [...members, ...members], // duplica a lista para permitir loop infinito sem corte
    [],
  );

  const cardWidth = 100 / slidesToShow; // largura de cada card em porcentagem no track

  const goNext = () => {
    setActiveIndex((prev) => prev + 1); // avanca 1 card
  };

  const goPrev = () => {
    if (activeIndex === 0) {
      // quando estiver no inicio, reposiciona no bloco duplicado para voltar suave
      setEnableTransition(false);
      setActiveIndex(members.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setActiveIndex(members.length - 1); // volta para o ultimo card original
        });
      });
      return;
    }

    setActiveIndex((prev) => prev - 1); // retrocede 1 card
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      goNext(); // autoplay do carrossel com transicao suave
    }, 4500);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const onTrackTransitionEnd = () => {
    if (activeIndex >= members.length) {
      // quando chega no bloco duplicado, volta para o primeiro sem efeito visual de pulo
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
    <section id="team" className="py-20 bg-pet-light-gray"> {/* secao Nossa Equipe */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto"> {/* limita largura para manter proporcao visual */}
          <div className="mb-10 border-l-4 border-primary pl-6 md:pl-10"> {/* detalhe vertical igual imagem */}
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.12em]">
              MEMBROS DA EQUIPE {/* TEAM MEMBERS traduzido */}
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2 leading-tight">
              PROFISSIONAIS QUALIFICADOS
              <br />
              EM CUIDADOS PET {/* titulo principal traduzido */}
            </h2>
          </div>

          <div className="relative"> {/* wrapper do carrossel e setas */}
            <div className="overflow-hidden"> {/* esconde cards fora da area visivel */}
              <div
                className={`flex ${enableTransition ? "transition-transform duration-700 ease-out" : ""}`} // transicao suave no deslocamento
                style={{ transform: `translateX(-${activeIndex * cardWidth}%)` }} // deslocamento horizontal do track
                onTransitionEnd={onTrackTransitionEnd} // ajusta loop infinito ao fim da animacao
              >
                {duplicatedMembers.map((m, index) => (
                  <div
                    key={`${m.name}-${index}`}
                    className="px-3"
                    style={{ minWidth: `${cardWidth}%` }} // cada item ocupa 1/fracao da largura visivel
                  >
                    <article className="group bg-[#e8e8e8]"> {/* card de membro com hover */}
                      <div className="relative h-[320px] overflow-hidden"> {/* area da imagem */}
                        <img
                          src={m.img}
                          alt={m.name}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" // zoom suave na foto ao passar o mouse
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-primary/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100"> {/* overlay verde transparente no hover */}
                          <div className="absolute inset-0 flex items-center justify-center gap-3"> {/* centraliza os icones sociais */}
                            <a
                              href="#"
                              className="inline-flex h-12 w-12 items-center justify-center bg-white text-black transition-transform duration-300 hover:-translate-y-1"
                              aria-label="Twitter"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                            <a
                              href="#"
                              className="inline-flex h-12 w-12 items-center justify-center bg-white text-black transition-transform duration-300 hover:-translate-y-1"
                              aria-label="Facebook"
                            >
                              <Facebook className="h-5 w-5" />
                            </a>
                            <a
                              href="#"
                              className="inline-flex h-12 w-12 items-center justify-center bg-white text-black transition-transform duration-300 hover:-translate-y-1"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="py-5 px-4 text-center"> {/* bloco com nome e cargo */}
                        <h3 className="font-heading text-3xl font-extrabold text-foreground">{m.name}</h3>
                        <p className="text-muted-foreground text-lg mt-1">{m.role}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3"> {/* setas laterais como na referencia */}
              <button
                type="button"
                onClick={goPrev} // seta esquerda: volta card anterior (com loop)
                className="h-12 w-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-pet-green-dark transition-colors"
                aria-label="Anterior"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goNext} // seta direita: avanca card seguinte (com loop)
                className="h-12 w-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-pet-green-dark transition-colors"
                aria-label="Proximo"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
