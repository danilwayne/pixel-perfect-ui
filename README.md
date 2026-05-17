# 🐾 Pet Black Amoroso - Landing Page & Educational Hub

Bem-vindo ao projeto **Pet Black Amoroso**! Este é um projeto multifuncional que serve tanto como uma landing page moderna e responsiva para um pet shop, quanto como uma plataforma educacional para o aprendizado de desenvolvimento web moderno.

## 🚀 Links Úteis

- **Live Demo (Netlify):** [https://petblackamoroso.netlify.app](https://petblackamoroso.netlify.app)
- **Live Demo (GitHub Pages):** [https://danilwayne.github.io/petblackamoroso/](https://danilwayne.github.io/petblackamoroso/)

---

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza o que há de mais moderno no ecossistema Frontend:

- **Framework:** [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Navegação:** [React Router Dom 6](https://reactrouter.com/)
- **Gerenciamento de Estado/Dados:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Formulários:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Notificações:** [Sonner](https://sonner.stevenlyui.com/) + shadcn/ui Toast
- **Testes:** [Vitest](https://vitest.dev/) (Unitários) & [Playwright](https://playwright.dev/) (E2E)

---

## ✨ Funcionalidades da Landing Page

A landing page foi construída com foco em **Pixel Perfection** e **Conversão**, incluindo:

- **Header Responsivo:** Menu de navegação suave e adaptável.
- **Hero Section:** Impacto visual com CTA claro.
- **Sobre Nós:** História e valores da marca.
- **Serviços:** Listagem detalhada dos cuidados oferecidos (Banho, Tosa, Veterinário, etc).
- **Produtos:** Showcase de produtos premium.
- **Tabela de Preços:** Planos claros para diferentes necessidades.
- **Equipe:** Conheça os especialistas.
- **Depoimentos:** Prova social de clientes satisfeitos.
- **Blog:** Notícias e dicas para pets.
- **Integração WhatsApp:** Botão flutuante para contato direto.
- **Scroll-to-Top:** Navegação facilitada com botão de retorno ao topo.

---

## 🎓 Recursos Educacionais

O projeto contém guias e exercícios práticos para quem está começando:

- **[HTML Crash Course](html-crash-course.md):** Um guia rápido de 30 minutos sobre a estrutura do projeto.
- **[CSS/Tailwind Crash Course](css-crash-course.md):** Foco em estilização moderna.
- **[Exercícios de Fixação](exercises.md):** Mais de 15 exercícios práticos baseados nos componentes reais do site para dominar React + Tailwind.

---

## 📂 Estrutura do Projeto

```text
src/
├── assets/         # Imagens e vetores
├── components/     # Componentes de UI (shadcn) e Seções (Hero, About, etc)
├── hooks/          # Hooks customizados do React
├── lib/            # Configurações de bibliotecas (utils, queryClient)
├── pages/          # Páginas principais (Index, NotFound)
├── test/           # Configurações de testes
├── App.tsx         # Componente raiz e Definição de Rotas
└── main.tsx        # Ponto de entrada da aplicação
```

---

## 💻 Como Rodar Localmente

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/danilwayne/petblackamoroso.git
   ```
2. **Instalar dependências:**
   ```bash
   npm install
   # ou usando bun
   bun install
   ```
3. **Rodar em desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Abrir no navegador:**
   Acesse `http://localhost:8080`

---

## 🚢 Deployment & Troubleshooting

### Comandos de Build

- `npm run build`: Build padrão para hospedagem na raiz (ex: Netlify).
- `npm run build:github`: Build customizado para subpastas (ex: GitHub Pages).

### Guia para "Página em Branco" após Deploy

Se o site abrir em branco após o deploy, verifique a variável de base no `vite.config.ts`:

1. No **Netlify**, a base deve ser `/`.
2. No **GitHub Pages** (se em subpasta), a base deve ser `/petblackamoroso/`.
3. Verifique se o `BrowserRouter` no `App.tsx` usa `import.meta.env.BASE_URL`:
   ```tsx
   <BrowserRouter basename={import.meta.env.BASE_URL}>
   ```

---

## 🧪 Testes

Rode os testes unitários com:
```bash
npm run test
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

*Feito com ❤️ por [Danil Wayne](https://github.com/danilwayne)*
