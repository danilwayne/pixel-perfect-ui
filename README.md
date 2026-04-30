# Pet Black Amoroso

Projeto React + Vite publicado no Netlify.

## Comandos

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run build:github`
- `npm run preview`

## Passo a passo para publicar

### Netlify

1. Conecte o repositorio no painel do Netlify.
2. Defina o comando de build como `npm run build`.
3. Defina o diretorio de publicacao como `dist`.
4. Nao defina `VITE_BASE_PATH` (o padrao ja e `/`, que e o correto para raiz do dominio).
5. Confirme que o arquivo `public/_redirects` existe com o conteudo:
   ```
   /* /index.html 200
   ```
   Sem ele, ao atualizar qualquer pagina interna o servidor responde 404.
6. Faca um push na branch `main` para acionar o deploy automatico.
7. Acesse `https://petblackamoroso.netlify.app` e verifique no DevTools (`F12`)
   que os arquivos em `Network` estao sendo carregados de `/assets/...` (sem subpasta).

### GitHub Pages

1. Va em Settings > Pages no repositorio.
2. Defina Source como `GitHub Actions`.
3. O arquivo `.github/workflows/deploy.yml` ja esta configurado com `VITE_BASE_PATH: /pixel-perfect-ui/`.
4. Faca um push na branch `main`.
5. Aguarde o Action terminar (aba Actions do repositorio).
6. Acesse `https://danilwayne.github.io/pixel-perfect-ui/` e verifique no DevTools (`F12`)
   que os arquivos em `Network` estao sendo carregados de `/pixel-perfect-ui/assets/...`.

### Como testar localmente antes de publicar

Para simular o build do Netlify:
```bash
npm run build
npx serve dist
# acesse http://localhost:3000
```

Para simular o build do GitHub Pages:
```bash
npm run build:github
npx serve dist
# acesse http://localhost:3000/pixel-perfect-ui/
```

---

## Observacao sobre comentarios no package.json

O arquivo [package.json](package.json) segue o padrao JSON puro, que nao aceita comentarios de linha (`//`) nem bloco (`/* */`).

Por isso, a documentacao do script alterado fica aqui no README:

- `npm run build`: build padrao para hospedagem na raiz do dominio (ex.: Netlify).
- `npm run build:github`: build para GitHub Pages com base em subpasta `/pixel-perfect-ui/`.

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
