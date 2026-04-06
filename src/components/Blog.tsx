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
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          — Latest Blog
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          LATEST ARTICLES FROM<br />OUR BLOG POST
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {posts.map((post) => (
          <article
            key={post.title}
            className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <span className="text-primary text-xs font-semibold uppercase">
                {post.date}
              </span>
              <h3 className="font-heading font-bold text-foreground mt-2 mb-3 leading-snug">
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
