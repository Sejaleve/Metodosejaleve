# Método Seja Leve

Site estático inspirado no layout criado no Lovable, preparado para GitHub Pages.

## Estrutura

- `index.html`: página principal do portal
- `css/`: estilos separados por área
- `js/modules.js`: lista dos módulos do portal
- `js/main.js`: renderização dos cards e menu mobile
- `pages/`: páginas individuais de cada módulo

## Publicar no GitHub Pages

1. Envie todos os arquivos para um repositório no GitHub.
2. Vá em Settings > Pages.
3. Em Source, selecione Deploy from a branch.
4. Escolha a branch `main` e a pasta `/root`.

## Módulo Jornada Seja Leve

O card `Jornada Seja Leve` abre `pages/jornada-seja-leve.html`. O conteúdo do diário foi separado em:

- `pages/jornada-seja-leve.html`
- `css/jornada.css`
- `js/jornada.js`

Assim o módulo fica isolado do portal principal.
