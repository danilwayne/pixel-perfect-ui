// Regras base recomendadas para JavaScript puro
import js from "@eslint/js";

// Variaveis globais de ambientes conhecidos (browser, node etc.)
import globals from "globals";

// Plugin que aplica as regras oficiais dos Hooks do React (ex.: nao chamar hook dentro de if)
import reactHooks from "eslint-plugin-react-hooks";

// Plugin que avisa quando um modulo exporta componentes junto com nao-componentes,
// o que pode quebrar o Hot Module Replacement (HMR) do Vite durante o desenvolvimento
import reactRefresh from "eslint-plugin-react-refresh";

// Wrapper que combina ESLint com suporte completo a TypeScript
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Ignora a pasta dist (arquivos de build nao precisam ser analisados)
  { ignores: ["dist"] },

  // Bloco principal: aplica-se a todos os arquivos TS e TSX do projeto
  {
    // Herda regras recomendadas do ESLint para JS e do typescript-eslint
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    // Padrao de arquivos que este bloco de regras cobre
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2020,           // versao do ECMAScript suportada (2020 inclui optional chaining etc.)
      globals: globals.browser,    // declara variaveis globais do browser (window, document etc.)
    },

    plugins: {
      "react-hooks": reactHooks,     // ativa o plugin de hooks
      "react-refresh": reactRefresh, // ativa o plugin de HMR
    },

    rules: {
      // Aplica todas as regras recomendadas dos Hooks do React
      ...reactHooks.configs.recommended.rules,

      // Avisa quando um arquivo exporta componente junto com constante (pode quebrar HMR)
      // allowConstantExport: true permite exportar constantes tipadas sem disparar o warning
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // Desativa a regra de variaveis nao utilizadas (muitos props desestruturados sao intencionais)
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // Bloco especifico para os componentes gerados pelo shadcn/ui
  {
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      // Revisao:
      // esses componentes gerados pelo shadcn/ui exportam helpers e componentes juntos.
      // O warning de Fast Refresh vira ruido recorrente aqui, entao desativamos apenas
      // nessa pasta para manter o lint util no restante do projeto.
      "react-refresh/only-export-components": "off",
    },
  },
);
