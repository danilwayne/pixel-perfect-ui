// Importa apenas o tipo de configuracao para checagem estatica (nao entra no bundle)
import type { Config } from "tailwindcss";

// Revisao de lint: trocado require() por import ES module para atender no-require-imports
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  // Modo escuro ativado via classe CSS (ex.: <html class="dark">)
  darkMode: ["class"],

  // Arquivos que o Tailwind vai escanear para encontrar classes usadas
  // Apenas classes encontradas aqui entram no CSS final (tree-shaking de CSS)
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],

  // Prefixo adicionado antes de todas as classes do Tailwind (vazio = sem prefixo)
  prefix: "",

  theme: {
    container: {
      center: true,       // centraliza o container automaticamente
      padding: "2rem",    // padding horizontal padrao do container
      screens: {
        "2xl": "1400px", // largura maxima do container em telas grandes
      },
    },
    extend: {
      // Adiciona familias de fonte personalizadas mantendo as do Tailwind
      fontFamily: {
        heading: ['Raleway', 'sans-serif'], // usada nos titulos (font-heading)
        body: ['Lato', 'sans-serif'],       // usada no corpo do texto (font-body)
      },
      // Cores do projeto mapeadas para variaveis CSS definidas em index.css
      // Isso permite trocar o tema inteiro mudando apenas as variaveis CSS
      colors: {
        border: "hsl(var(--border))",           // cor das bordas
        input: "hsl(var(--input))",             // cor de borda dos campos de formulario
        ring: "hsl(var(--ring))",               // cor do anel de foco (acessibilidade)
        background: "hsl(var(--background))",   // fundo geral da pagina
        foreground: "hsl(var(--foreground))",   // texto sobre o fundo geral
        primary: {
          DEFAULT: "hsl(var(--primary))",                   // cor principal do projeto (verde)
          foreground: "hsl(var(--primary-foreground))",     // texto sobre a cor principal
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",                 // cor secundaria
          foreground: "hsl(var(--secondary-foreground))",   // texto sobre a cor secundaria
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",               // cor de acoes destrutivas (vermelho)
          foreground: "hsl(var(--destructive-foreground))", // texto sobre fundo destrutivo
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",                     // fundo de elementos sutis/desabilitados
          foreground: "hsl(var(--muted-foreground))",       // texto secundario/de apoio
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",                    // cor de destaque para hover e selecao
          foreground: "hsl(var(--accent-foreground))",      // texto sobre o destaque
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",                   // fundo de menus flutuantes
          foreground: "hsl(var(--popover-foreground))",     // texto dentro dos popovers
        },
        card: {
          DEFAULT: "hsl(var(--card))",                      // fundo dos cartoes
          foreground: "hsl(var(--card-foreground))",        // texto dentro dos cartoes
        },
        // Paleta personalizada do projeto Pet Black Amoroso
        pet: {
          green: "hsl(var(--pet-green))",             // verde principal da marca
          "green-dark": "hsl(var(--pet-green-dark))", // verde escuro para hover
          "green-light": "hsl(var(--pet-green-light))",// verde claro para backgrounds suaves
          dark: "hsl(var(--pet-dark))",               // fundo escuro das secoes com overlay
          gray: "hsl(var(--pet-gray))",               // cinza medio para textos secundarios
          "light-gray": "hsl(var(--pet-light-gray))", // cinza claro para backgrounds de cards
          orange: "hsl(var(--pet-orange))",           // laranja para badges e destaques
        },
      },
      // Raio de borda baseado em variavel CSS para facil customizacao de tema
      borderRadius: {
        lg: "var(--radius)",                    // borda arredondada grande
        md: "calc(var(--radius) - 2px)",        // borda media
        sm: "calc(var(--radius) - 4px)",        // borda pequena
      },
      // Animacoes usadas pelo componente Accordion do Radix UI
      keyframes: {
        "accordion-down": {
          from: { height: "0" },                              // comeca fechado (altura zero)
          to: { height: "var(--radix-accordion-content-height)" }, // abre ate a altura real do conteudo
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }, // comeca com altura real
          to: { height: "0" },                                       // fecha ate zero
        },
      },
      // Classes de animacao prontas para usar nos componentes
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // abre suavemente em 200ms
        "accordion-up": "accordion-up 0.2s ease-out",     // fecha suavemente em 200ms
      },
    },
  },
  // Revisao de lint: trocado require() por import ES module para atender no-require-imports.
  // tailwindcssAnimate adiciona classes de animacao utilitarias (animate-in, animate-out etc.)
  plugins: [tailwindcssAnimate],
} satisfies Config; // satisfies valida que o objeto atende ao tipo Config sem perder inferencia
