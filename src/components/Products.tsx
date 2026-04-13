import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ShoppingCart, Eye } from "lucide-react"; // ícones de navegação e ações de produto
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  { img: product1, name: "Ração Premium", price: "R$ 89,90" }, // produtos traduzidos para o português
  { img: product2, name: "Brinquedos Pet", price: "R$ 29,90" },
  { img: product3, name: "Shampoo & Higiene", price: "R$ 39,90" },
  { img: product4, name: "Cama & Acessórios", price: "R$ 149,90" },
];

const Products = () => {
  // o componente Products exibe cards roláveis e botões de navegação esquerda/direita
  const scrollRef = useRef<HTMLDivElement | null>(null); // ref para o container que será rolado
  const [canScrollLeft, setCanScrollLeft] = useState(false); // controla se a seta esquerda está habilitada
  const [canScrollRight, setCanScrollRight] = useState(false); // controla se a seta direita está habilitada

  useEffect(() => {
    const updateButtons = () => {
      const el = scrollRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0); // habilita quando não está no início
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1); // habilita quando não está no final
    };

    updateButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons); // atualiza status das setas ao rolar
    window.addEventListener("resize", updateButtons); // atualiza status ao redimensionar

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollProducts = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8; // rola grande parte da área visível
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="products" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:text-left">
          <span className="text-pet-green font-semibold text-sm uppercase tracking-[0.35em] mb-4 inline-block">
            PRODUTOS {/* subtítulo em português */}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            PRODUTOS PARA SEUS<br />MELHORES AMIGOS {/* título principal traduzido */}
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-4 scroll-smooth"
          // container de rolagem horizontal para os cards, permite navegação com setas
          // no-scrollbar oculta a barra de rolagem visível
        >
          {products.map((p) => (
            <div
              key={p.name}
              className="relative w-[360px] flex-shrink-0 bg-[#f4f4f4] rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              // largura reduzida para cards menores e mais proporcionais
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-base font-bold text-foreground mb-3">
                  {p.name} {/* nome do produto */}
                </h3>
                <p className="text-pet-green font-bold text-lg mb-5">{p.price}</p> {/* preço do produto */}

                <div className="flex items-center justify-center gap-3 opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {/* ícones de ação aparecem abaixo do produto com animação de baixo para cima */}
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pet-green text-white shadow hover:bg-pet-green-dark transition"
                    aria-label="Adicionar ao carrinho"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pet-green text-white shadow hover:bg-pet-green-dark transition"
                    aria-label="Ver mais informações"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {/* botões de navegação para rolar os cards de produtos */}
          <button
            type="button"
            onClick={() => scrollProducts("left")}
            disabled={!canScrollLeft}
            className="inline-flex h-12 w-12 items-center justify-center rounded bg-pet-green text-white shadow transition hover:bg-pet-green-dark disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Mover para esquerda"
          >
            <ArrowLeft className="h-5 w-5" /> {/* seta de navegação esquerda */}
          </button>
          <button
            type="button"
            onClick={() => scrollProducts("right")}
            disabled={!canScrollRight}
            className="inline-flex h-12 w-12 items-center justify-center rounded bg-pet-green text-white shadow transition hover:bg-pet-green-dark disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Mover para direita"
          >
            <ArrowRight className="h-5 w-5" /> {/* seta de navegação direita */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
