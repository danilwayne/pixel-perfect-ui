# Exercícios para Fixar o Projeto Pixel-Perfect UI - PET Black Amoroso

## Introdução
Estes exercícios foram criados para fixar todos os conceitos e tecnologias usadas no projeto:
- **React 18 + TypeScript + Vite**
- **Tailwind CSS** (tema customizado com cores pet)
- **React Router**
- **shadcn/ui** + Lucide React
- **TanStack Query**, hooks customizados
- **Responsividade**, animações, CSS vars
- **Estrutura de componentes** (Header, Hero, About, etc.)

**Pré-requisitos:**
1. `cd e:/sites/pixel-perfect-ui`
2. `bun install` (se não feito)
3. `bun dev` (roda em http://localhost:8080)
4. Abra DevTools (F12) para inspecionar.

Faça os exercícios **em uma cópia do projeto** (`git clone` ou pasta separada). Teste sempre em mobile/desktop.

## Exercícios (15+)

### 1. Setup e Estrutura (Básico)
**Objetivo**: Entender Vite + Tailwind.
- Crie `bunx create-vite@latest my-exercises --template react-ts`
- Adicione Tailwind: `bunx shadcn-ui@latest init`
- Copie `tailwind.config.ts` e `index.css` daqui.
- Rode `bun dev` e verifique se fontes Raleway/Lato carregam.
**Verifique**: Hero com `bg-pet-dark` funciona?

### 2. Header Responsivo
**Objetivo**: useState + conditional rendering + mobile menu.
- Clone `src/components/Header.tsx` para `HeaderExercise.tsx`.
- Mude navItems para 6 itens. Adicione sub-menu no mobile (use Accordion de shadcn).
- Faça logo clicável ir para #home com scroll suave.
**Dica**: Copie lógica de `setMobileOpen`.
**Teste**: Mobile menu abre/fecha, hover colors mudam.

### 3. Hero com Background e Parallax
**Objetivo**: CSS background + style inline.
- Recrie Hero: mude imagem para `src/assets/hero-dog.jpg`.
- Ative parallax: descomente `backgroundAttachment: fixed` no style.
- Adicione overlay gradient mais escuro (`hsl(var(--pet-dark) / 0.8)`).
**Teste**: Scroll suave, texto legível em mobile.

### 4. Scroll-to-Top Avançado
**Objetivo**: useEffect + RAF animation.
- Em `IndexExercise.tsx`, adicione botão scroll como no original.
- Melhore: fade-in com opacity baseada em scrollY. Use `framer-motion` (adicione dep).
**Dica**: `const easeOutCubic = t => 1 - Math.pow(1-t,3)`
**Teste**: Animação suave <600ms.

### 5. Tailwind Customizações
**Objetivo**: Extend theme + utilities.
- Edite `tailwind.config.ts`: adicione `--pet-gold: 45 90% 55%;`
- Crie card com `bg-pet-gold/10 border-pet-gold rounded-xl shadow-pet-gold/20`
- Use em novo componente PricingCard.
**Teste**: Cores custom funcionam em dark/light.

### 6. Componente About com Imagens
**Objetivo**: Layout grid + images.
- Crie `AboutExercise.tsx` baseado no original (abra `src/components/About.tsx`).
- Use `aspect-[4/3] object-cover` em 2 imagens lado a lado.
- Adicione botão CTA com hover scale.
**Teste**: Responsive: stack em mobile.

### 7. Services com Icons e Grid
**Objetivo**: Array map + responsive grid.
- Recrie Services: 4 cards em `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Cada card: Lucide icon (Scissors, Heart, PawPrint), hover lift `hover:-translate-y-2`
**Dica**: `gap-6 p-8 rounded-2xl shadow-xl`
**Teste**: Hover anima, icons coloridos.

### 8. Products Carousel (shadcn)
**Objetivo**: Embla Carousel integration.
- Adicione `bun add embla-carousel-react`
- Crie Products com `<Carousel>` de shadcn + `useEmblaCarousel`.
- 4 slides com `src/assets/product-*.jpg`
**Teste**: Swipe mobile, autoplay opcional.

### 9. PromoBanner Animado
**Objetivo**: CSS keyframes + pulse.
- Clone PromoBanner: texto piscando `animate-pulse`, botão gradient.
- Adicione count-down timer com `setInterval`.
**Teste**: Banner chama atenção, responsive height.

### 10. Pricing Cards Interativos
**Objetivo**: Toggle + radio-group shadcn.
- 3 planos: Basic/Pro/Premium. Use `RadioGroup` para selecionar.
- Selected: `ring-2 ring-primary scale-105`
**Dica**: Estado local `const [plan, setPlan] = useState('pro')`

### 11. Team Avatars
**Objetivo**: Avatar shadcn + grid.
- Grid 2x2 com `Avatar`, `AvatarImage` de `src/assets/team-*.jpg`
- Hover: badge \"Saiba mais\" popover.
**Teste**: Fallback initials se imagem falha.

### 12. Testimonial Slider
**Objetivo**: Dots navigation.
- 3 quotes com `Carousel` + dots.
- Auto-advance 5s com `useEffect`.

### 13. Blog Previews
**Objetivo**: Card list + read more.
- 3 posts: img, title, excerpt, `hover:shadow-2xl`
- Link para blog.html fictício.

### 14. Routing + Nova Página
**Objetivo**: React Router.
- Adicione rota `/contato` em App.tsx com form (use react-hook-form + zod).
- Navbar link ativo com `NavLink` shadcn.
**Teste**: Navegação funciona, 404 em /abc.

### 15. Form Newsletter (Footer)
**Objetivo**: react-hook-form + toast.
- Footer newsletter: valide email, submit mostra Sonner toast \"Enviado!\"
- Integre `useToast`.

### 16. Testing Vitest
**Objetivo**: Unit tests.
- `bunx vitest` setup.
- Test Header: `render(<Header />)`, expect button exists.
- Test Hero text.

### 17. Playwright E2E
**Objetivo**: Browser automation.
- `npx playwright test`: teste scroll to #services clica.

### 18. Otimização
**Objetivo**: Lighthouse 95+.
- Lazy images `loading=\"lazy\"`
- `bun build` e analise bundle.

### 19. Dark Mode Toggle
**Objetivo**: next-themes.
- Adicione switch no Header para toggle dark/light.

### 20. Deploy
**Objetivo**: Vercel/Netlify.
- `bun build`, deploy folder `dist`.

## Soluções e Dicas
- Compare com originais: `src/components/*`
- Use DevTools: Elements > Styles para Tailwind.
- Docs: tailwindcss.com, shadcn/ui, reactrouter.com
- Commits por exercício: `git add . && git commit -m \"Ex X: Header\"`

**Parabéns ao completar! Você domina pixel-perfect React + Tailwind.** 🚀

**Comando para testar:** `bun dev`

