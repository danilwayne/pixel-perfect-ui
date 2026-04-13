import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";

const posts = [
  {
    img: blog1,
    date: "01 Jan, 2025",
    title: "Dicas para cuidar do seu pet durante o inverno",
  },
  {
    img: blog2,
    date: "15 Fev, 2025",
    title: "Quando levar seu pet ao veterinário: sinais importantes",
  },
];

const Blog = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      {/* Alterado: cabeçalho alinhado à esquerda com destaque vertical para aproximar do layout de referência */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="border-l-4 border-primary pl-6 md:pl-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            — Blog mais recente
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2 leading-tight">
            ÚLTIMOS ARTIGOS DE<br />NOSSA POSTAGEM NO BLOG
          </h2>
        </div>
      </div>

      {/* Alterado: cards em duas colunas com conteúdo horizontal (imagem à esquerda e texto à direita) */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <article
            key={post.title}
            className="bg-card overflow-hidden group flex flex-col sm:flex-row"
          >
            {/* Alterado: imagem com largura fixa no desktop para formar card horizontal */}
            <div className="sm:w-60 md:w-56 lg:w-64 h-56 sm:h-auto overflow-hidden shrink-0">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Alterado: área de conteúdo com tipografia e espaçamento iguais ao estilo de referência */}
            <div className="p-6 flex flex-col justify-center">
              <span className="text-primary text-xs font-semibold uppercase">
                {post.date}
              </span>
              <h3 className="font-heading font-bold text-foreground mt-3 mb-4 leading-snug text-2xl">
                {post.title}
              </h3>
              <a
                href="#"
                className="text-primary text-sm font-semibold hover:underline"
              >
                Leia mais →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
