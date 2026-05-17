// Importa a funcao que define e valida a configuracao do Vite
import { defineConfig, loadEnv } from "vite";

// Plugin que compila JSX/TSX usando SWC (muito mais rapido que Babel)
import react from "@vitejs/plugin-react-swc";

// Modulo nativo do Node para resolver caminhos de arquivo de forma segura
import path from "path";

// Plugin do Lovable que adiciona metadados de rastreamento em desenvolvimento
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente (do sistema e de arquivos .env)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // A base agora é dinâmica: usa VITE_BASE_PATH se existir, senão "/"
    base: env.VITE_BASE_PATH || "/",
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
    },
  };
});
