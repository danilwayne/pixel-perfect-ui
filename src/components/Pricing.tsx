import { Check } from "lucide-react";

const plans = [
  {
    name: "BASIC",
    desc: "For Small Pets",
    price: "49",
    features: ["Pet Boarding", "Pet Grooming", "Pet Feeding", "Advanced Equipment"],
    featured: false,
  },
  {
    name: "STANDARD",
    desc: "The Best Choice",
    price: "99",
    features: ["Pet Boarding", "Pet Grooming", "Pet Feeding", "Advanced Equipment", "Pet Training"],
    featured: true,
  },
  {
    name: "EXTENDED",
    desc: "For Large Pets",
    price: "149",
    features: ["Pet Boarding", "Pet Grooming", "Pet Feeding", "Advanced Equipment", "Pet Training", "Pet Treatment"],
    featured: false,
  },
];

const Pricing = () => (
  <section className="py-20 bg-pet-light-gray">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          — Pricing Plan
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          COMPETITIVE PRICING<br />FOR PET SERVICES
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg p-8 text-center transition-shadow ${
              plan.featured
                ? "bg-primary text-primary-foreground shadow-xl scale-105"
                : "bg-card shadow-sm hover:shadow-md"
            }`}
          >
            <h3 className="font-heading text-xl font-bold mb-1">{plan.name}</h3>
            <p
              className={`text-sm mb-6 ${
                plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}
            >
              {plan.desc}
            </p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold font-heading">
                R${plan.price}
              </span>
              <span
                className={`text-sm ${
                  plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                /mo
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-left">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-full font-semibold text-sm transition-colors ${
                plan.featured
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-primary text-primary-foreground hover:bg-pet-green-dark"
              }`}
            >
              ORDER NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
