# Portfolio

Portfólio pessoal, em desenvolvimento (MVP v1). Veja a Issue #1 para escopo e critérios de aceitação.

## Como rodar localmente

Site estático (HTML/CSS/JS puro), sem build. Basta servir a raiz do projeto:

```bash
npx serve .
```

Depois acesse a URL indicada no terminal (por padrão `http://localhost:3000`).

## Lint e formatação

O projeto usa [Biome](https://biomejs.dev):

```bash
npm run lint    # aponta problemas de lint
npm run format  # formata os arquivos
npm run check   # lint + format, aplicando correções
```
