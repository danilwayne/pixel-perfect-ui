// Importa a funcao que cria a raiz de renderizacao do React 18
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicacao que contem rotas e providers
import App from "./App.tsx";

// Importa o CSS global (variaveis de cor, fontes e reset base)
import "./index.css";

// Localiza a div com id="root" no index.html e monta o app React dentro dela
// O operador "!" diz ao TypeScript que esse elemento certamente existe no DOM
createRoot(document.getElementById("root")!).render(<App />);
