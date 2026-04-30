// Importa o cliente de cache de dados e o provider que o distribui para toda a arvore
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// BrowserRouter: gerencia a navegacao usando a API de historico do navegador
// Route: define uma rota individual com caminho e componente
// Routes: agrupa as rotas e renderiza apenas a que casou com a URL atual
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Toaster de notificacoes estilo sonner (canto da tela, mais moderno)
import { Toaster as Sonner } from "@/components/ui/sonner";

// Toaster de notificacoes estilo toast classico do shadcn/ui
import { Toaster } from "@/components/ui/toaster";

// Provider global de tooltips do Radix UI, necessario para componentes que usam Tooltip
import { TooltipProvider } from "@/components/ui/tooltip";

// Pagina principal (home com todas as secoes)
import Index from "./pages/Index.tsx";

// Pagina exibida quando nenhuma rota casar com a URL acessada
import NotFound from "./pages/NotFound.tsx";

// Cria uma instancia do cliente de cache do React Query
// Armazena os dados buscados para evitar requisicoes duplicadas
const queryClient = new QueryClient();

// Componente raiz da aplicacao, envolve tudo com os providers necessarios
const App = () => (
  // Disponibiliza o queryClient para todos os componentes filhos via contexto
  <QueryClientProvider client={queryClient}>
    {/* Habilita tooltips em qualquer lugar da arvore */}
    <TooltipProvider>
      {/* Renderiza as notificacoes toast classicas */}
      <Toaster />
      {/* Renderiza as notificacoes estilo sonner */}
      <Sonner />
      {/*
        Revisao da correcao:
        o router nao deve adivinhar a URL base manualmente.
        Ele usa import.meta.env.BASE_URL, que vem do "base" configurado no Vite.
        Assim a navegacao continua correta tanto no Netlify (raiz "/")
        quanto em hospedagens com subpasta, se VITE_BASE_PATH for definido.
      */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        {/* Renderiza apenas a primeira rota que casar com a URL atual */}
        <Routes>
          {/* Rota principal: carrega a pagina Index */}
          <Route path="/" element={<Index />} />
          {/* ADICIONE NOVAS ROTAS ACIMA DESTA LINHA */}
          {/* Rota coringa: captura qualquer URL nao definida e mostra 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Exporta o componente para ser usado em main.tsx
export default App;
