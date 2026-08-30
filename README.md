# seeds — website (Vite + React + Tailwind)

Estrutura idêntica ao protótipo HTML, agora dividida em componentes React.

## Como correr

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    Navbar.jsx        top nav fixo com blur
    Hero.jsx           secção principal, foto + badge do rebento
    Marquee.jsx         faixa de texto em loop
    Stats.jsx           3 números de destaque
    About.jsx           foto da equipa + texto "quem somos"
    Services.jsx        grid de 4 cartões de serviços (data-driven)
    Process.jsx          4 fases do processo (data-driven)
    Projects.jsx        grid de 3 cartões de projetos (data-driven)
    Testimonial.jsx      citação + avatar
    CTA.jsx              chamada final para contacto
    Footer.jsx           newsletter (form controlado) + redes sociais + colunas
  hooks/
    useReveal.js         hook de scroll-reveal (IntersectionObserver)
  index.css              Tailwind + estilos base (grain, seleção, reduced-motion)
  App.jsx                junta todos os componentes
  main.jsx                ponto de entrada React
```

## Personalização

- **Cores, fontes e formas "pod"**: tudo em `tailwind.config.js` (`theme.extend`) — muda ali e propaga-se a todo o site.
- **Textos de serviços/processo/projetos**: são arrays no topo de cada componente (`services`, `steps`, `projects`) — editar aí em vez de mexer no JSX.
- **Newsletter**: `Footer.jsx` tem um `handleSubmit` de exemplo — liga à tua API (Mailchimp, Resend, etc.) onde diz o comentário.
- **Imagens**: atualmente vêm do Unsplash como placeholders — substitui os `src` pelas fotos reais da equipa/projetos quando as tiveres.
