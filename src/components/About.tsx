import { useState } from "react"; // controla a aba ativa entre MISSAO e VISAO
import petsHappy from "@/assets/pets-happy.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState<"missao" | "visao">("missao"); // estado inicial na aba MISSAO

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="order-2 lg:order-1">
            <span className="text-pet-green font-semibold text-sm uppercase tracking-[0.35em] mb-4 inline-block">
              SOBRE NÓIS {/* antes ABOUT US */}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Nós deixamos o seu pet feliz o tempo todo.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12">
              Sabemos que seu pet não é só um animal — ele é um companheiro, um amigo fiel e parte da sua vida.
              Por isso, trabalhamos todos os dias para garantir conforto, segurança e momentos de felicidade para ele.
              Com dedicação, carinho e responsabilidade, oferecemos um serviço pensado para que seu pet esteja sempre bem cuidado e feliz.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* botoes de abas: clicou em MISSAO/VISAO, troca o conteudo abaixo */}
              <button
                type="button"
                onClick={() => setActiveTab("missao")} // ativa a aba MISSAO
                className={`rounded-full py-3 text-sm font-semibold uppercase tracking-[0.35em] transition ${
                  activeTab === "missao"
                    ? "bg-pet-green text-white"
                    : "bg-[#f4f9f1] text-pet-green"
                }`}
              >
                MISSÃO {/* antes OUR MISSION */}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("visao")} // ativa a aba VISAO
                className={`rounded-full py-3 text-sm font-semibold uppercase tracking-[0.35em] transition ${
                  activeTab === "visao"
                    ? "bg-pet-green text-white"
                    : "bg-[#f4f9f1] text-pet-green"
                }`}
              >
                VISÃO {/* antes OUR VISION */}
              </button>
            </div>

            <div className="mt-6 rounded-[2rem] border border-primary/10 bg-white p-8 shadow-[0_40px_80px_rgba(15,23,42,0.08)]">
              {/* renderizacao condicional: mostra texto da aba selecionada */}
              {activeTab === "missao" ? (
                <p className="text-sm leading-relaxed text-foreground">
                  Nós deixamos o seu pet feliz o tempo todo.
                </p>
              ) : (
                <p className="text-sm leading-relaxed text-foreground">
                  Sabemos que seu pet não é só um animal — ele é um companheiro, um amigo fiel e parte da sua vida.
                  Por isso, trabalhamos todos os dias para garantir conforto, segurança e momentos de felicidade para ele.
                  Com dedicação, carinho e responsabilidade, oferecemos um serviço pensado para que seu pet esteja sempre bem cuidado e feliz.
                </p>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* imagem principal do Sobre Nos */}
            <img
              src={petsHappy}
              alt="Pets felizes"
              className="rounded-[2rem] shadow-[0_40px_120px_rgba(15,23,42,0.14)] w-full"
              loading="lazy"
              width={900}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
