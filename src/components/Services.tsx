import { Dog, Heart, Scissors, Dumbbell, Stethoscope, Home } from "lucide-react";

const services = [
  { icon: Home, title: "PET BOARDING", desc: "Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor." },
  { icon: Heart, title: "PET FEEDING", desc: "Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor." },
  { icon: Dog, title: "PET GROOMING", desc: "Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor." },
  { icon: Dumbbell, title: "PET TRAINING", desc: "Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor." },
  { icon: Scissors, title: "PET EXERCISE", desc: "Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor." },
  { icon: Stethoscope, title: "PET TREATMENT", desc: "Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor." },
];

const Services = () => (
  <section id="services" className="py-20 bg-pet-light-gray">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          — Services
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          OUR EXCELLENT PET<br />CARE SERVICES
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
              <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
