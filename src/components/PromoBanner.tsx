import promoBanner from "@/assets/promo-banner.jpg";

const PromoBanner = () => (
  <section
    className="relative py-24"
    style={{
      backgroundImage: `url(${promoBanner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-pet-dark/60" />
    <div className="relative container mx-auto px-4">
      <div className="max-w-lg">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          — Special Offer
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4 leading-tight">
          SAVE 50% ON ALL ITEMS<br />YOUR FIRST ORDER
        </h2>
        <a
          href="#products"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm tracking-wider hover:bg-pet-green-dark transition-colors"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  </section>
);

export default PromoBanner;
