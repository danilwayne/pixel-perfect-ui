import { PawPrint, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-pet-dark text-primary-foreground/80">
    <div className="container mx-auto px-4 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="font-heading text-lg font-bold text-primary-foreground">
              PET WORLD
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              Rua das Flores, 123, São Paulo
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              +55 11 99999-9999
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              contato@petworld.com
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">
            QUICK LINKS
          </h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Products", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">
            POPULAR LINKS
          </h4>
          <ul className="space-y-2 text-sm">
            {["Blog", "Pricing", "Team", "FAQ", "Privacy Policy"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">
            NEWSLETTER
          </h4>
          <p className="text-sm mb-4">Receba nossas últimas novidades.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-2.5 rounded-l-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-r-full font-semibold text-sm hover:bg-pet-green-dark transition-colors">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4">
      <p className="text-center text-xs text-primary-foreground/50">
        © 2025 Pet World. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
