import promoBanner from "@/assets/cachorro-servico.jpg"; // imagem de fundo da secao Oferta Especial

const PromoBanner = () => (
  <section
    id="special-offer" // id da secao para navegacao
    className="relative py-24 md:py-28" // altura e espacamento vertical da secao
    style={{
      backgroundImage: `url(${promoBanner})`, // aplica a imagem de fundo
      backgroundSize: "cover", // cobre toda a area
      backgroundPosition: "center", // centraliza a imagem
      backgroundRepeat: "no-repeat", // evita repeticao da imagem
    }}
  >
    <div className="absolute inset-0 bg-pet-dark/55" /> {/* overlay para contraste do texto */}

    <div className="relative container mx-auto px-4"> {/* camada acima do overlay */}
      <div className="max-w-3xl"> {/* largura do bloco de conteudo */}
        <div className="border-l-4 border-black/80 pl-8 md:pl-12"> {/* linha vertical como no layout de referencia */}
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.25em]">
            OFERTA ESPECIAL {/* subtitulo em portugues */}
          </span>

          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground mt-3 mb-6 leading-tight">
            ECONOMIZE 50% EM TODOS
            <br />
            OS ITENS NO SEU PRIMEIRO
            <br />
            PEDIDO {/* titulo quebrado em linhas para ficar igual ao print */}
          </h2>

          <p className="max-w-2xl text-primary-foreground/90 text-lg leading-relaxed mb-9">
            Cuidado premium para o seu pet com atendimento especializado, carinho e seguranca em cada detalhe.
            Aproveite a oferta para conhecer nossos servicos e produtos com o melhor custo-beneficio.
            {/* texto descritivo da oferta */}
          </p>

          <div className="flex flex-wrap gap-4"> {/* grupo dos botoes da secao */}
            <a
              href="#products" // botao Shop Now indo para secao de produtos
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-3.5 rounded-none font-bold text-sm tracking-[0.08em] hover:bg-pet-green-dark transition-colors"
            >
              COMPRE AGORA {/* Shop Now em portugues */}
            </a>

            <a
              href="#home" // botao Read More voltando para o topo da pagina
              className="inline-flex items-center justify-center border-2 border-primary-foreground/85 text-primary-foreground px-10 py-3.5 rounded-none font-bold text-sm tracking-[0.08em] hover:bg-primary-foreground/10 transition-colors"
            >
              LEIA MAIS {/* Read More em portugues */}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromoBanner;
