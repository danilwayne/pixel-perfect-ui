# 🚀 Crash Course de HTML — 30 Minutos
## Projeto Pet Black Amoroso

---

## 📋 Cronograma (30 minutos)

| Módulo | Tópico | Tempo |
|--------|--------|-------|
| 1 | O que é HTML, meta tags e favicon | 3 min |
| 2 | Tags essenciais: headings, parágrafos, listas | 5 min |
| 3 | Atributos, links e imagens | 5 min |
| 4 | Comentários | 3 min |
| 5 | Tabelas em HTML | 5 min |
| 6 | Semântica: header, nav, main, section, footer | 7 min |
| — | Revisão final e testes | 2 min |

---

## 🟢 Módulo 1 — O que é HTML e Meta Tags (3 minutos)

### O que é HTML?
HTML (HyperText Markup Language) é a linguagem de marcação usada para criar páginas web. Não é uma linguagem de programação — você "marca" o conteúdo com **tags** para dizer ao navegador o que cada coisa significa.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Black Amoroso</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
    <!-- conteúdo visível fica aqui -->
</body>
</html>
```

### Explicação rápida:
- `<!DOCTYPE html>` — avisa ao navegador que é HTML5
- `<html lang="pt-BR">` — idioma da página
- `<head>` — configurações (invisíveis ao usuário)
- `<body>` — conteúdo visível

### Meta Tags (do nosso projeto real):
Abra `index.html` do projeto. Você verá:

| Meta Tag | Para que serve |
|----------|----------------|
| `<meta charset="UTF-8">` | Aceita acentos (ç, ã, é) |
| `<meta name="viewport" ...>` | Adapta ao celular |
| `<meta name="description" ...>` | Texto no Google |
| `<meta property="og:title" ...>` | Título ao compartilhar no WhatsApp/Facebook |
| `<meta property="og:image" ...>` | Imagem ao compartilhar |
| `<link rel="icon" ...>` | Ícone na aba do navegador (favicon) |

### 📝 Exercício 1
Abra `html-exercises/exercicio.html`. No `<head>`, adicione:
1. `<title>` com "Pet Black Amoroso - Cuidamos do seu pet"
2. `<meta name="description">` com uma descrição do pet shop
3. `<link rel="icon">` apontando para `../public/favicon.ico`

---

## 🔵 Módulo 2 — Tags Essenciais: Headings, Parágrafos, Listas (5 minutos)

### Headings (Títulos)
Do mais importante ao menos importante:

```html
<h1>Pet Black Amoroso</h1>        <!-- título principal -->
<h2>Nossos Serviços</h2>          <!-- seção -->
<h3>Banho e Tosa</h3>             <!-- sub-seção -->
<h4>Equipe especializada</h4>     <!-- detalhe -->
<h5>Horários</h5>
<h6>Observações</h6>
```

> Regra: use **apenas UM** `<h1>` por página.

### Parágrafos

```html
<p>Bem-vindo ao <strong>Pet Black Amoroso</strong>!</p>
<p>Oferecemos os melhores cuidados para o seu pet.</p>
```

### Listas

**Lista ordenada** (com números):
```html
<ol>
    <li>Banho e Tosa</li>
    <li>Consulta Veterinária</li>
    <li>Hotel para Pets</li>
</ol>
```

**Lista não ordenada** (com bolinhas):
```html
<ul>
    <li>Ração premium</li>
    <li>Brinquedos</li>
    <li>Acessórios</li>
</ul>
```

### 📝 Exercício 2
No `<body>` do exercicio.html:
1. Crie um `<h1>`: "Pet Black Amoroso"
2. Crie um `<p>` com uma frase de boas-vindas
3. Crie uma lista ordenada `<ol>` com 3 serviços
4. Crie uma lista não ordenada `<ul>` com 3 produtos

---

## 🟡 Módulo 3 — Atributos, Links e Imagens (5 minutos)

### Atributos
São informações extras dentro da tag de abertura:

```html
<p class="destaque" id="intro">Texto aqui</p>
<!-- class pode repetir, id é único -->
```

### Links

```html
<a href="https://instagram.com/petblackamoroso">Siga no Instagram</a>
<a href="#servicos">Ir para Serviços</a>        <!-- link interno -->
<a href="mailto:contato@petblack.com">Email</a>
<a href="https://wa.me/5511999999999" target="_blank">WhatsApp</a>
```

| Atributo | Função |
|----------|--------|
| `href` | para onde o link vai |
| `target="_blank"` | abre em nova aba |

### Imagens

```html
<img src="../src/assets/hero-dog.jpg" alt="Cachorro feliz no pet shop" width="400">
```

| Atributo | Função |
|----------|--------|
| `src` | caminho da imagem |
| `alt` | texto se imagem não carregar (acessibilidade) |
| `width` / `height` | tamanho |

### 📝 Exercício 3
No exercicio.html:
1. Adicione um link `<a>` para "#servicos" com texto "Veja nossos serviços"
2. Adicione um link externo para o Instagram com `target="_blank"`
3. Adicione uma imagem `<img>` usando `../src/assets/hero-dog.jpg` com `alt` descritivo

---

## 🟠 Módulo 4 — Comentários (3 minutos)

Comentários são ignorados pelo navegador. Servem para você e outros devs.

```html
<!-- Isso é um comentário -->

<!--
    Comentário
    de várias
    linhas
-->

<header>
    <!-- Menu de navegação principal -->
    <nav>...</nav>
</header>
```

> Dica: comente trechos que você ainda vai implementar ou que precisam de explicação.

### 📝 Exercício 4
No exercicio.html:
1. Adicione um comentário antes do `<h1>`: "Título principal do site"
2. Adicione um comentário de várias linhas explicando o propósito da lista de serviços
3. Adicione um comentário ao final do `<body>`: "Fim do conteúdo principal"

---

## 🔴 Módulo 5 — Tabelas em HTML (5 minutos)

```html
<table border="1">
    <thead>                    <!-- cabeçalho -->
        <tr>                   <!-- linha -->
            <th>Serviço</th>   <!-- célula de cabeçalho -->
            <th>Preço</th>
            <th>Duração</th>
        </tr>
    </thead>
    <tbody>                    <!-- corpo -->
        <tr>
            <td>Banho</td>     <!-- célula de dados -->
            <td>R$ 50</td>
            <td>1h</td>
        </tr>
        <tr>
            <td>Tosa</td>
            <td>R$ 40</td>
            <td>45min</td>
        </tr>
    </tbody>
</table>
```

| Tag | Significado |
|-----|-------------|
| `<table>` | início da tabela |
| `<thead>` | cabeçalho |
| `<tbody>` | corpo/conteúdo |
| `<tr>` | table row (linha) |
| `<th>` | table header (célula de título) |
| `<td>` | table data (célula comum) |

### 📝 Exercício 5
No exercicio.html:
1. Crie uma tabela com `<table>`
2. Use `<thead>` com 3 colunas: Serviço, Preço, Duração
3. Use `<tbody>` com pelo menos 2 serviços do Pet Black Amoroso

---

## 🟣 Módulo 6 — Semântica no HTML (7 minutos)

### Por que usar tags semânticas?
Antigamente tudo era `<div>`. Hoje usamos tags que **têm significado**:
- Melhora acessibilidade (leitores de tela)
- Melhora SEO (Google entende melhor)
- Código mais organizado

### Tags semânticas principais:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>...</head>
<body>
    <header>                    <!-- topo do site -->
        <nav>                   <!-- menu de navegação -->
            <a href="#home">Início</a>
            <a href="#servicos">Serviços</a>
        </nav>
    </header>

    <main>                      <!-- conteúdo principal (aparece 1x) -->
        <section id="home">     <!-- seção genérica -->
            <h1>Pet Black Amoroso</h1>
            <p>Cuidamos do seu pet com amor.</p>
        </section>

        <section id="servicos">
            <h2>Nossos Serviços</h2>
            <!-- ... -->
        </section>

        <article>               <!-- conteúdo independente -->
            <h3>Dica: Como escovar seu cão</h3>
            <p>...</p>
        </article>

        <aside>                 <!-- conteúdo lateral/relacionado -->
            <p>Promoção: 20% OFF no primeiro banho!</p>
        </aside>
    </main>

    <footer>                    <!-- rodapé -->
        <p>© 2025 Pet Black Amoroso</p>
        <address>Rua dos Pets, 123</address>
    </footer>
</body>
</html>
```

| Tag | Quando usar |
|-----|-------------|
| `<header>` | Topo do site ou de uma seção |
| `<nav>` | Menu de links de navegação |
| `<main>` | Conteúdo principal (1 por página) |
| `<section>` | Bloco temático de conteúdo |
| `<article>` | Conteúdo que faz sentido sozinho (post, notícia) |
| `<aside>` | Conteúdo secundário (sidebar, promoção) |
| `<footer>` | Rodapé do site ou seção |
| `<address>` | Informações de contato |

### Comparação: Antes vs Depois

❌ **Antes (tudo div):**
```html
<div class="header">
    <div class="menu">...</div>
</div>
<div class="content">...</div>
<div class="footer">...</div>
```

✅ **Depois (semântico):**
```html
<header>
    <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
```

### 📝 Exercício 6 (Final)
Reorganize todo o exercicio.html usando tags semânticas:
1. Envolver o menu em `<header>` + `<nav>`
2. Envolver o conteúdo em `<main>`
3. Dividir em `<section>` para cada parte (home, serviços, produtos)
4. Adicionar `<footer>` com copyright e endereço

---

## ✅ Checklist Final

Depois de completar todos os exercícios, seu `exercicio.html` deve ter:

- [ ] `<!DOCTYPE html>` e `<html lang="pt-BR">`
- [ ] Meta tags e favicon no `<head>`
- [ ] `<h1>` a `<h3>` usados corretamente
- [ ] Parágrafos com `<p>`
- [ ] Listas `<ol>` e `<ul>`
- [ ] Links internos e externos com `<a>`
- [ ] Imagem com `<img>` e `alt`
- [ ] Comentários explicativos
- [ ] Tabela com `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- [ ] Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

---

## 🧪 Como Testar

1. Abra `html-exercises/exercicio.html` no VS Code
2. Edite o arquivo conforme os exercícios
3. Clique com botão direito → "Open with Live Server" (se tiver extensão)
   Ou abra diretamente o arquivo no navegador
4. Compare com `html-exercises/solucao.html` quando precisar

---

**Bons estudos! 🐾**

