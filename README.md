# Pet Black Amoroso

Projeto React + Vite publicado no Netlify.

## Comandos

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Variavel de base do deploy

O Vite usa a opcao `base` para decidir de onde os arquivos finais serao carregados no navegador.

- No Netlify, quando o site fica na raiz do dominio, a base correta e `/`
- Em hospedagens com subpasta, a base precisa apontar para essa subpasta

Exemplo em [.env.example](.env.example):

- `VITE_BASE_PATH=/`
- `VITE_BASE_PATH=/pixel-perfect-ui/`

## Erro analisado neste projeto

O site ficou em branco no Netlify porque o build de producao estava gerando URLs como:

- `/pixel-perfect-ui/assets/index-xxxxx.js`
- `/pixel-perfect-ui/assets/index-xxxxx.css`

Isso quebra quando o deploy real esta na raiz do dominio, porque esses arquivos passam a ser procurados no endereco errado.

O ponto corrigido foi em [vite.config.ts](vite.config.ts), deixando a base padrao como `/` e permitindo sobrescrever com `VITE_BASE_PATH` apenas quando necessario.

## Como identificar esse tipo de erro sozinho

### 1. Verifique o sintoma no navegador

Se a pagina abrir em branco:

- abra o DevTools com `F12`
- confira a aba `Console`
- confira a aba `Network`

Sinais comuns:

- erro `Failed to load module script`
- erro `404` para arquivos em `/assets/...` ou em uma subpasta errada
- erro de MIME type por arquivo HTML sendo retornado no lugar do JS

### 2. Inspecione o HTML gerado no build

Rode:

```bash
npm run build
```

Depois abra `dist/index.html` e procure por `script` e `link`.

Se aparecer algo como:

```html
<script type="module" src="/pixel-perfect-ui/assets/index-xxxx.js"></script>
```

mas seu site esta publicado em:

```text
https://seusite.netlify.app/
```

entao a base do build esta errada.

### 3. Descubra onde a URL base e controlada

Em projetos Vite, normalmente o controle fica em [vite.config.ts](vite.config.ts).

Verifique a opcao:

```ts
base: "/"
```

ou alguma variacao com ambiente, por exemplo:

```ts
base: process.env.VITE_BASE_PATH || "/"
```

### 4. Confira o router

Se o projeto usa `react-router-dom`, verifique se o `BrowserRouter` acompanha a mesma base.

Neste projeto ele usa [src/App.tsx](src/App.tsx), com:

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

Isso esta correto porque reaproveita a mesma base definida pelo Vite.

## Fluxo de revisao rapido para deploy em branco

1. Confirmar se o deploy terminou sem erro no provedor.
2. Abrir o site e inspecionar `Console` e `Network`.
3. Procurar `404` ou caminhos errados para JS e CSS.
4. Rodar `npm run build` localmente.
5. Abrir `dist/index.html` e conferir os caminhos dos assets.
6. Corrigir o `base` do Vite se o caminho estiver errado.
7. Se houver router, alinhar o `basename` com `import.meta.env.BASE_URL`.
8. Publicar novamente.

## Observacao pratica

Quando o deploy mostra `Published` mas a pagina abre em branco, nao assuma que o problema esta no Netlify. Muitas vezes o deploy foi concluido com sucesso, mas o bundle final foi gerado com caminhos errados.
