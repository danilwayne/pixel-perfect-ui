import heroPets from "@/assets/hero-pets.jpg";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[600px] flex items-center pt-20"
    style={{
      backgroundImage: `linear-gradient(to right, hsl(var(--pet-dark) / 0.7), transparent), url(${heroPets})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-lg">
        <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
          PET Black Amoroso
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
          MAKE YOUR PETS HAPPY
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-base leading-relaxed">
          Lorem tempor cillum excepteur labore dolore amet aliqua sint proident
          duis incididunt amet cupidatat elit.
        </p>
        <a
          href="#services"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm tracking-wider hover:bg-pet-green-dark transition-colors"
        >
          READ MORE
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
