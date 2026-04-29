import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
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
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
