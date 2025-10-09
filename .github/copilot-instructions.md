# 🧭 Copilot Instructions – Projeto Portfólio

Estas instruções servem para orientar o GitHub Copilot e outras IAs de código ao sugerir, completar ou modificar código neste repositório.
O objetivo é garantir padronização, legibilidade, performance e consistência visual em todo o projeto.

---

## ⚙️ Tecnologias Principais

- **TypeScript:** linguagem padrão (`.tsx`, `.ts`).
- **React + Vite:** base do frontend.
- **TailwindCSS + shadcn/ui + Radix UI:** sistema de estilização e componentes acessíveis.
- **Material UI (MUI):** usado em telas específicas, seguindo o tema do projeto.
- **React Router DOM:** gerenciamento de rotas SPA.
- **@tanstack/react-query:** gerenciamento de dados assíncronos.
- **Zod + React Hook Form:** validação e manipulação de formulários.
- **Framer Motion:** animações e transições suaves.
- **Three.js + @react-three/fiber/drei:** efeitos 3D e elementos visuais.
- **Sonner / Embla Carousel:** feedbacks e carrosséis visuais.

---

## 🧱 Estrutura do Projeto

src/
├─ components/
├─ hooks/
├─ contexts/
├─ pages/
├─ assets/
├─ utils/
├─ styles/
└─ main.tsx

- Componentização modular: crie componentes reutilizáveis e bem isolados.
- Imports absolutos: use `@/` para caminhos internos.
- Temas e idiomas: controlados via contextos (`ThemeContext`, `LanguageContext`).

---

## 💡 Boas Práticas de Código

- Evite `any`. Sempre tipar com precisão.
- Evite `console.log` em produção.
- Nomes:
  - Variáveis e funções → `camelCase`
  - Componentes e classes → `PascalCase`
  - Constantes globais → `UPPER_SNAKE_CASE`
- Documente funções e hooks com comentários `/** JSDoc */`.
- Evite funções anônimas diretamente no JSX; prefira callbacks nomeados.

---

## 🎨 UI e Estilo

- Use **TailwindCSS** e **shadcn/ui** como padrão.
- Utilize **Material UI** para componentes complexos (Dialog, DataGrid, Autocomplete, etc).
- Siga o tema global (claro/escuro) do contexto.
- Evite estilos inline; prefira classes do Tailwind.
- Use **Framer Motion** para microinterações (fade, slide, hover).
- Garanta **acessibilidade** (`aria-*`, foco navegável, contraste adequado).

---

## 🌍 Internacionalização (i18n)

- Todos os textos devem estar externalizados (`locales/en.json`, `locales/pt.json`).
- Evite strings literais diretas no JSX.
- Prefira `t('chave')` para textos.

---

## 🧠 Hooks e Estado

- Declare dependências corretamente nos `useEffect`.
- Use `useMemo`, `useCallback` e `React.memo` para performance.
- Centralize estados compartilhados em Contexts quando fizer sentido.
- Hooks personalizados devem começar com `use`.

---

## 🧪 Testes

- Escreva testes unitários para componentes e hooks críticos.
- Utilize **Vitest** ou **Jest** com **Testing Library**.
- Cubra comportamento, acessibilidade e renderização.

---

## 🔧 Commits e Pull Requests

- Commits descritivos (ex: `feat: adiciona seção de projetos 3D`).
- Não envie código comentado ou não utilizado.
- PRs devem buildar sem erros de lint.
- Inclua prints ou GIFs para mudanças visuais significativas.

---

## 🚀 Performance e Acessibilidade

- Prefira imagens otimizadas (`.webp`).
- Implemente **lazy loading** em componentes pesados.
- Teste com Lighthouse (meta: >90 em performance e acessibilidade).

---

## 🧩 Estilo de Geração de Código (Copilot)

Ao gerar código neste repositório, siga estas diretrizes:

- Prefira **funções puras e reutilizáveis**.
- Inclua **tipagens completas** em props, retornos e estados.
- Use **Tailwind** para layout e espaçamento.
- Utilize **componentes do shadcn/ui** sempre que possível.
- Adote **Material UI** apenas para elementos complexos.
- Siga a hierarquia de componentes (`atoms` → `molecules` → `organisms`).
- Evite duplicação de componentes; refatore e reutilize.

---

✨ Estas instruções garantem consistência, manutenibilidade e performance de alto nível no projeto.

