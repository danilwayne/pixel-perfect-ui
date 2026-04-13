import { Dog, Heart, Scissors, Dumbbell, Stethoscope, Home, ArrowRight } from "lucide-react"; // icones dos cards de servicos

const services = [
  // lista de servicos em portugues que alimenta os cards
  {
    icon: Home,
    title: "HOTEL PET",
    desc: "Hospedagem segura e confortável para seu pet enquanto você viaja.",
  },
  {
    icon: Heart,
    title: "ALIMENTAÇÃO PET",
    desc: "Plano alimentar personalizado para saúde e bem-estar do seu animal.",
  },
  {
    icon: Dog,
    title: "TOSA PET",
    desc: "Serviço de tosa e banho profissional para manter seu pet limpo e feliz.",
  },
  {
    icon: Dumbbell,
    title: "TREINAMENTO PET",
    desc: "Aulas de adestramento para comportamento equilibrado e sociável.",
  },
  {
    icon: Scissors,
    title: "EXERCÍCIO PET",
    desc: "Atividades físicas feitas com carinho para manter seu pet ativo.",
  },
  {
    icon: Stethoscope,
    title: "TRATAMENTO PET",
    desc: "Cuidados de saúde e prevenção com atenção e profissionalismo.",
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-pet-light-gray">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 md:text-left">
        {/* cabecalho da secao Services adaptado para portugues */}
        <span className="text-pet-green font-semibold text-sm uppercase tracking-[0.35em] mb-4 inline-block">
          SERVIÇOS
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          NOSSOS EXCELENTES SERVIÇOS<br />DE CUIDADOS PARA PETS
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* grid em 2 colunas no desktop, seguindo layout de referencia */}
        {services.map((s) => (
          <div
            key={s.title}
            className="flex gap-6 rounded-[2rem] bg-white/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-pet-green/10 text-pet-green">
              <s.icon className="h-8 w-8" /> {/* icone dinamico de cada servico */}
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="inline-flex items-center gap-2 text-pet-green font-semibold text-sm">
                SAIBA MAIS {/* CTA traduzido */}
                <ArrowRight className="h-4 w-4" /> {/* seta visual de call-to-action */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
