// Importa a funcao que define e valida a configuracao do Vite
import { defineConfig } from "vite";

// Plugin que compila JSX/TSX usando SWC (muito mais rapido que Babel)
import react from "@vitejs/plugin-react-swc";

// Modulo nativo do Node para resolver caminhos de arquivo de forma segura
import path from "path";

// Plugin do Lovable que adiciona metadados de rastreamento em desenvolvimento
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// A funcao recebe { mode } que indica se e "development" ou "production"
export default defineConfig(({ mode }) => ({
  // Causa analisada:
  // antes o build de produção saía com base fixa em "/pixel-perfect-ui/".
  // Isso funciona quando o site é servido dentro dessa subpasta, como no GitHub Pages.
  // No Netlify o domínio publica o app na raiz, então os assets eram procurados no lugar errado
  // e a página carregava em branco porque o bundle principal não era encontrado.
  // Correção:
  // usar "/" por padrão em produção e permitir sobrescrever com VITE_BASE_PATH
  // apenas quando o deploy realmente acontecer em subpasta.
  base: mode === "production" ? process.env.VITE_BASE_PATH || "/" : "/",
  server: {
    host: "::",   // "::" aceita conexoes IPv4 e IPv6 na rede local
    port: 8080,   // porta do servidor de desenvolvimento
    hmr: {
      overlay: false, // desativa o overlay vermelho de erro para nao atrapalhar o layout durante o dev
    },
  },
  plugins: [
    react(),                                                // compila React com SWC em todos os modos
    mode === "development" && componentTagger(),            // ativa o tagger do Lovable apenas em dev
  ].filter(Boolean),                                       // remove "false" da lista quando nao estiver em dev
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // atalho: "@/" vira "src/" nos imports do projeto
    },
    // Garante que apenas uma copia de cada pacote seja carregada,
    // evitando conflitos quando bibliotecas trazem versoes proprias
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
