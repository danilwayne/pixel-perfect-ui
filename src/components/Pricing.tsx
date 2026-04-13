import { Check, X } from "lucide-react"; // Check = item incluso, X = item nao incluso

const plans = [
  {
    name: "BASICO", // titulo do plano traduzido
    desc: "A melhor escolha", // subtitulo traduzido
    price: "49",
    // lista de recursos com status para mostrar Check ou X no layout
    features: [
      { label: "Hospedagem pet", included: true },
      { label: "Banho e tosa", included: true },
      { label: "Layout responsivo", included: false },
      { label: "Compatibilidade de navegadores", included: false },
    ],
    featured: false,
  },
  {
    name: "PADRAO", // titulo do plano traduzido
    desc: "A melhor escolha", // subtitulo traduzido
    price: "99",
    // plano do meio: destaque visual igual ao print
    features: [
      { label: "Hospedagem pet", included: true },
      { label: "Banho e tosa", included: true },
      { label: "Layout responsivo", included: true },
      { label: "Compatibilidade de navegadores", included: false },
    ],
    featured: true,
  },
  {
    name: "AVANCADO", // titulo do plano traduzido
    desc: "A melhor escolha", // subtitulo traduzido
    price: "149",
    // plano completo com todos os itens incluidos
    features: [
      { label: "Hospedagem pet", included: true },
      { label: "Banho e tosa", included: true },
      { label: "Layout responsivo", included: true },
      { label: "Compatibilidade de navegadores", included: true },
    ],
    featured: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 bg-pet-light-gray"> {/* secao de planos de precos */}
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto"> {/* limita largura para manter proporcao do layout */}
        <div className="mb-10 border-l-4 border-primary pl-6 md:pl-10"> {/* linha vertical verde ao lado do titulo */}
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.15em]">
            PLANO DE PRECOS {/* cabecalho traduzido */}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2 leading-tight">
            PRECOS COMPETITIVOS
            <br />
            PARA SERVICOS PET {/* titulo em 2 linhas como referencia visual */}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8"> {/* 3 colunas de cards de preco */}
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-[#e8e8e8] shadow-sm" // fundo cinza do card, igual ao estilo da imagem
            >
              <div className="px-8 py-10 text-center"> {/* bloco superior: nome e subtitulo */}
                <h3 className="font-heading text-4xl font-extrabold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground font-semibold">{plan.desc}</p>
              </div>

              <div
                className={`px-8 py-8 text-center ${
                  plan.featured ? "bg-pet-dark text-primary-foreground" : "bg-primary text-primary-foreground"
                }`} // faixa de preco: meio escuro, laterais verdes
              >
                <span className="text-2xl align-top">$</span>
                <span className="text-7xl leading-none font-extrabold font-heading">{plan.price}</span>
                <span className="text-2xl font-semibold"> /Mes</span> {/* /Mo traduzido */}
              </div>

              <div className="px-8 py-8"> {/* bloco de recursos e botao */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center justify-between text-base text-foreground/80">
                      <span>{f.label}</span>
                      {f.included ? (
                        <Check className="h-5 w-5 text-primary" /> // icone verde para item incluso
                      ) : (
                        <X className="h-5 w-5 text-red-500" /> // icone vermelho para item nao incluso
                      )}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-primary text-primary-foreground py-3.5 font-bold text-sm uppercase tracking-wide hover:bg-pet-green-dark transition-colors">
                  PECA AGORA {/* botao ORDER NOW traduzido */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
