# 🚀 Crash Course de CSS — 30 Minutos
## Projeto Pet Black Amoroso

---

## 📋 Cronograma (30 minutos)

| Módulo | Tópico | Tempo |
|--------|--------|-------|
| 1 | O que é CSS e como conectar ao HTML | 5 min |
| 2 | DevTools:.inspecionando elementos e debug visual | 5 min |
| 3 | Display: block, inline, inline-block, none | 5 min |
| 4 | Seletores, classes e IDs | 5 min |
| 5 | Cores, fontes e estilização de texto | 5 min |
| 6 | Box Model: padding, margin, border e box-sizing | 5 min |

---

## 🟢 Módulo 1 — O que é CSS e como conectar ao HTML (5 minutos)

### O que é CSS?
CSS (Cascading Style Sheets) é a linguagem usada para **estilizar** páginas web. Enquanto o HTML define a estrutura, o CSS define a aparência.

### 3 formas de conectar CSS ao HTML:

**1. Inline (na tag) — evitar em produção:**
```html
<p style="color: blue; font-size: 18px;">Texto azul</p>
```

**2. Internal (no `<head>`) — para páginas únicas:**
```html
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
```

**3. External (arquivo separado) — recomendado:**
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### A regra CSS básica:
```css
seletor {
    propriedade: valor;
}
```

### 📝 Exercício 1
Abra `css-exercises/exercicio.html`. Conecte o CSS:
1. Crie um elemento `<style>` no `<head>`
2. Adicione uma regra CSS que muda a cor do `<h1>` para `#d97706` (laranja)
3. Mude o tamanho da fonte do body para `16px`

---

## 🔵 Módulo 2 — DevTools: Inspecionando Elementos e Debug Visual (5 minutos)

### Por que usar DevTools?
O Chrome DevTools é sua melhor ferramenta para debugar CSS. Você pode:
- Visualizar e editar estilos em tempo real
- Ver como o navegador interpreta cada propriedade
- Testar mudanças sem alterar o código

### Como abrir:
- **F12** ou **Ctrl+Shift+I** (Windows)
- **Cmd+Option+I** (Mac)
- Clique direito → **Inspecionar**

### Aba Elements → Styles:
- Mostra todas as regras CSS aplicadas ao elemento
- Editável diretamente (clique para mudar valores)
- checkboxes para ativar/desativar propriedades
- `:hover` para ver estilos de hover

### Aba Computed:
- Mostra os valores finais computados
- Útil para resolver conflitos de herança

### Dica de Debug Visual:
```css
* {
    outline: 1px solid red !important;
}
```
Isso mostra TODOS os elementos na página!

### 📝 Exercício 2
No `exercicio.html`:
1. Abra o navegador e abra DevTools (F12)
2. Inspecione o `<h1>` e mude a cor no painel Styles
3. Use a propriedade `outline` para visualizar a caixa do elemento `<header>`
4. Teste mudar o `padding`直接在DevTools—sem alterar o arquivo

---

## 🟡 Módulo 3 — Display: block, inline,inline-block, none (5 minutos)

### display: block
Ocupa a linha inteira. Quebra para próxima linha.

```css
div, p, h1, h2, ul, ol, li {
    display: block;
}
```

### display: inline
Ocupa apenas o espaço necessário. **Não** quebra linha. **Não** aceita width/height.

```css
span, a, strong, em {
    display: inline;
}
```

### display: inline-block
Fica na mesma linha MAS **aceita** width e height. O melhor dos dois mundos!

```css
.botao {
    display: inline-block;
    padding: 10px 20px;
}
```

### display: none
O elemento some completamente. Não ocupa espaço.

```css
.menu-escondido {
    display: none;
}
```

### 📝 Exercício 3
No `exercicio.html`:
1. Faça o elemento com classe `.botao` ser `inline-block`
2. Faça o elemento com classe `.menu` ser `block`
3. Faça o elemento com classe `.escondido` ser `none`
4. Transforme um `<span>` em `inline-block` com width de 200px

---

## 🟠 Módulo 4 — Seletores, Classes e IDs (5 minutos)

### Tipos de Seletores:

```css
/* Seletor de elemento */
p { }

/* Seletor de classe (.) */
.destaque { }

/* Seletor de ID (#) */
#cabecalho { }

/* Seletor descendant (espaço) */
nav a { }

/* Seletor filho (>) */
ul > li { }

/* Seletor múltiplo (,) */
h1, h2, h3 { }

/* Seletor atributo */
[type="text"] { }
```

### Especificidade (prioridade):
1. `!important` (evitar)
2. Style inline (`style=""`)
3. ID (#)
4. Classe (.)
5. Elemento

### 📝 Exercício 4
No `exercicio.html`:
1. Crie uma classe `.destaque` que deixa o texto em negrito
2. Crie um ID `#banner` com background amarelo
3. Use seletor descendant para estilizar links dentro de `nav`
4. Use seletor múltiplo para `<h1>` e `<h2>`

---

## 🟣 Módulo 5 — Cores, Fontes e Estilização de Texto (5 minutos)

### Cores:
```css
/* Nome */
color: red;

/* Hex */
color: #ff0000;

/* RGB */
color: rgb(255, 0, 0);

/* HSL */
color: hsl(0, 100%, 50%);
```

### background:
```css
background: #f5f5f5;
background-color: white;
background-image: url('imagem.jpg');
```

### Fontes:
```css
font-family: 'Arial', sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
```

### Text:
```css
text-align: center;
text-decoration: none;
line-height: 1.6;
letter-spacing: 2px;
```

### 📝 Exercício 5
No `exercicio.html`:
1. Mude a cor de background do body para `#f5f5f5`
2. Defina a fonte do body como `'Segoe UI', sans-serif`
3. Centralize o texto do `<h1>`
4. Adicione `text-decoration: underline` aos links

---

## 🔴 Módulo 6 — Box Model: padding, margin, border e box-sizing (5 minutos)

### Entendendo o Box Model:

```
┌─────────────────────────────────────┐
│            margin                    │
│  ┌───────────────────────────────┐  │
│  │          border               │  │
│  │  ┌─────────────────────────┐   │  │
│  │  │                      │   │  │
│  │  │        padding        │   │  │
│  │  │  ┌───────────────┐   │   │  │
│  │  │  │              │   │   │  │
│  │  │  │  conteúdo   │   │   │  │
│  │  │  │   (width/    │   │   │  │
│  │  │  │    height)   │   │   │  │
│  │  │  └───────────────┘   │   │  │
│  │  │                    │   │  │
│  │  └─────────────────────────┘   │  │
│  │                             │   │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### padding (espaço dentro da borda):
```css
padding: 20px;
padding: 10px 20px; /* vertical horizontal */
padding-top: 10px;
```

### margin (espaço fora da borda):
```css
margin: 20px;
margin: 10px auto; /* centralizar */
margin-bottom: 20px;
```

### border (borda):
```css
border: 1px solid #ccc;
border-width: 2px;
border-style: solid;
border-color: blue;
border-radius: 8px;
```

### box-sizing (importante!):
```css
/* Padrão: width/height NÃO incluem padding/border */
box-sizing: content-box;

/* CORRETO: width/height INCLUEM padding/border */
box-sizing: border-box;
```

### 📝 Exercício 6
No `exercicio.html`:
1. Adicione `padding: 20px` ao elemento `.card`
2. Adicione `margin-bottom: 20px` ao elemento `.card`
3. Adicione `border: 1px solid #ccc` ao `.card`
4. Adicione `border-radius: 8px` ao `.card`
5. Adicione `box-sizing: border-box` ao universal `*`

---

## ✅ Checklist Final

Depois de completar todos os exercícios, seu `exercicio.html` deve ter:

- [ ] CSS conectado via `<style>` no `<head>`
- [ ] Cores personalizadas aplicadas
- [ ] DevTools usado para debug
- [ ] display: block, inline, inline-block, none aplicados
- [ ] Classe `.destaque` com font-weight bold
- [ ] ID `#banner` com background
- [ ] Seletor descendant (`nav a`)
- [ ] background-color no body
- [ ] font-family definidos
- [ ] text-align centralizado
- [ ] padding aplicado aos cards
- [ ] margin aplicado aos cards
- [ ] border aplicada
- [ ] border-radius aplicado
- [ ] box-sizing: border-box no universal

---

## 🧪 Como Testar

1. Abra `css-exercises/exercicio.html` no VS Code
2. Edite o arquivo conforme os exercícios
3. Abra no navegador: arquivo → clique direito → "Open with Live Server"
4. Use F12 para DevTools e debug
5. Compare com `css-exercises/solucao.html` quando precisar

---

**Bons estudos!** 🎨
