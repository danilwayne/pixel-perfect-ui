// PostCSS processa o CSS antes de entregar ao navegador
// Este arquivo configura quais transformacoes serao aplicadas
export default {
  plugins: {
    // Tailwind CSS: gera as classes utilitarias com base nos arquivos escaneados
    tailwindcss: {},

    // Autoprefixer: adiciona prefixos de fabricante automaticamente (-webkit-, -moz- etc.)
    // para garantir compatibilidade com navegadores mais antigos
    autoprefixer: {},
  },
};
