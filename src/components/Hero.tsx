const Hero = () => (
  <section
    id="home"
    // Antes era min-h-[792px], agora usamos altura responsiva para qualquer tela
    className="relative min-h-screen sm:min-h-[500px] md:min-h-[600px] lg:min-h-screen flex items-center pt-16 sm:pt-20"
    style={{
      backgroundImage: `linear-gradient(to right, hsl(var(--pet-dark) / 0.7), transparent), url('/images/Black-1920x1080.jpeg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      // backgroundAttachment: "fixed", // parallax effect: imagem fixa enquanto o conteúdo rola
      // WebkitBackgroundAttachment: "fixed", // suporte para Safari e WebKit
    }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-lg">
        <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
          PET Black Amoroso
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
          Deixe seu pet mais feliz todos os dias
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-base leading-relaxed">
          Cuidado, carinho e atenção de verdade para o seu melhor amigo.
          Aqui, seu pet recebe o tratamento que ele merece.
        </p>
        <a
          href="#services"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm tracking-wider hover:bg-pet-green-dark transition-colors"
        >
          LEIA MAIS
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
