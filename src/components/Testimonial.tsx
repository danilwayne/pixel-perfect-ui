import heroDog from "@/assets/hero-dog.jpg";
import { Star } from "lucide-react";

const Testimonial = () => (
  <section className="py-20 bg-pet-light-gray">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary">
          <img src={heroDog} alt="Cliente" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-pet-orange text-pet-orange" />
          ))}
        </div>
        <p className="text-muted-foreground text-lg italic mb-6 leading-relaxed">
          "Clita clita tempor justo dolor et stet lorem kasd labore dolore lorem
          ipsum. At lorem lorem magna ut et, nonumy et labore et tempor. Diam sed
          amet dolor ipsum clita."
        </p>
        <h4 className="font-heading font-bold text-foreground">CLIENTE MARIA</h4>
        <p className="text-muted-foreground text-sm">Pet Owner</p>
      </div>
    </div>
  </section>
);

export default Testimonial;
