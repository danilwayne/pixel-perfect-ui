// Link: componente de navegacao interna que respeita o basename do router
// useLocation: hook que retorna o objeto de localizacao atual (pathname, search, hash)
import { Link, useLocation } from "react-router-dom";

// useEffect: executa efeitos colaterais apos a renderizacao do componente
import { useEffect } from "react";

// Componente exibido quando nenhuma rota casar com a URL acessada
const NotFound = () => {
  // Captura a URL atual para registrar nos logs qual rota foi acessada erroneamente
  const location = useLocation();

  useEffect(() => {
    // Loga o erro no console toda vez que o pathname mudar
    // util para rastrear links quebrados em producao via ferramentas de monitoramento
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]); // dependencia: so re-executa se o caminho mudar

  return (
    // Centraliza o conteudo na tela inteira com fundo neutro
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        {/* Titulo grande com o codigo de erro */}
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        {/* Mensagem descritiva em texto secundario */}
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        {/*
          Revisao de roteamento:
          usar Link em vez de <a href="/"> preserva o basename do React Router.
          Se o app for publicado em subpasta (/pixel-perfect-ui/), o Link ajusta
          o destino automaticamente. O <a> nao faz isso e quebraria a navegacao.
        */}
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

// Exporta o componente para ser usado como rota 404 no App.tsx
export default NotFound;
