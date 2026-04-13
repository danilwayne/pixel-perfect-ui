import { useState } from "react"; // useState controla se o menu mobile está aberto
import { Menu, X, PawPrint } from "lucide-react"; // ícones usados no cabeçalho

const navItems = [
  { label: "INÍCIO", href: "#home" }, // HOME
  { label: "SOBRE", href: "#about" }, // ABOUT
  { label: "SERVIÇOS", href: "#services" }, // SERVICES
  { label: "PRODUTOS", href: "#products" }, // PRODUCTS
  { label: "PÁGINAS", href: "#pages" }, // PAGES
]; // itens do menu de navegação em português

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false); // false = menu mobile fechado

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pet-dark/95 backdrop-blur-sm">
      {/* cabeçalho fixo no topo com fundo escuro e leve blur */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* container centralizado com espaçamento horizontal e vertical */}
        <a href="#" className="flex items-center gap-2">
          {/* logo e título */}
          <PawPrint className="h-7 w-7 text-primary" />
          {/* ícone com cor principal definida em CSS/Tailwind */}
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
            Pet Black Amoroso
          </span>
          {/* texto do nome com fonte de título, cor de texto primária e espaçamento entre letras */}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {/* menu principal visível apenas em telas md+ */}
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                i === 0
                  ? "text-primary"
                  : "text-primary-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
          {/* cada item do menu usa texto pequeno e transição de cor ao passar o mouse */}
          {/* o primeiro item usa cor primaria e os demais usam tom mais claro e mudam para primaria no hover */}
        </nav>

        <button className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors">
          {/* botão "CONTATO" apenas para telas md+ */}
          {/* bg-primary = cor de fundo do botão, text-primary-foreground = cor do texto */}
          CONTATO {/* CONTACT US */}
        </button>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {/* botão de menu mobile visível apenas em telas pequenas */}
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          {/* ícone muda entre X e menu hamburguer dependendo do estado */}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-pet-dark border-t border-primary-foreground/10 px-4 pb-4">
          {/* menu mobile aberto: fundo escuro e borda superior sutil */}
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-sm text-primary-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          {/* itens do menu mobile ficam em bloco e mudam para a cor primaria no hover */}
          <button className="mt-2 w-full bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold">
            {/* botão de contato no menu mobile com mesma cor do botão principal */}
            CONTATO {/* CONTACT US */}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
