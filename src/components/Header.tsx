import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const navItems = ["HOME", "ABOUT", "SERVICES", "PRODUCTS", "PAGES"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pet-dark/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <PawPrint className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
            Pet Black Amoroso
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide transition-colors ${
                i === 0
                  ? "text-primary"
                  : "text-primary-foreground/80 hover:text-primary"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-pet-green-dark transition-colors">
          CONTACT US
        </button>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-pet-dark border-t border-primary-foreground/10 px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-sm text-primary-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-2 w-full bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold">
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
