# TechStore Portal - Next.js 15 em Ação

## Por que Next.js?

Next.js é um dos frameworks React mais populares, com números impressionantes:

- **8+ milhões** de downloads por semana no npm
- **135k+ estrelas** no GitHub
- Usado por **TikTok, Netflix, Twitch, Nike, Notion, OpenAI, Kabum, Nubank, entre e etc...**
- Criado e mantido pela **Vercel** (valuation em $9.3 bilhões)

## Sobre este Projeto

Projeto demonstrativo criado para mostrar os principais recursos do Next.js 15 de forma prática, funcionando em um cenário real: um portal de atendimento ao cliente.

### O que você vai encontrar:

- Diferentes formas de renderizar páginas (SSR, SSG, ISR, CSR)
- Server Actions (backend sem criar API)
- Streaming e loading states
- Sistema de rotas dinâmicas
- Formulários com validação
- Error handling

## Começando

### Você vai precisar

- Node.js 18 ou superior
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/aula-nextjs.git
cd aula-nextjs

# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev
```

Abra http://localhost:3000 no seu navegador.

### Comandos úteis

```bash
pnpm dev          # Roda web + API
pnpm dev:web      # Apenas Next.js
pnpm dev:api      # Apenas NestJS
pnpm build        # Build de produção
pnpm lint         # Checar código
```

## Explorando os Exemplos

A melhor forma de aprender é explorando. Acesse http://localhost:3000/examples e você vai encontrar 6 exemplos práticos:

### 1. Estratégias de Renderização

Veja as 4 formas de renderizar páginas no Next.js:

- **SSR**: Dados sempre frescos (ideal para dashboards)
- **SSG**: Gerado no build (ideal para blogs)
- **ISR**: Híbrido - atualiza a cada X segundos (ideal para e-commerce)
- **CSR**: Renderiza no browser (ideal para apps interativos)

### 2. Server Actions

Lista de tarefas que mostra como criar funcionalidades de backend sem escrever rotas de API. Simplesmente escreva uma função com `"use server"` e pronto.

### 3. Streaming

Demonstra como carregar partes da página progressivamente. O usuário não precisa esperar tudo carregar - vê o que está pronto primeiro.

### 4. Sistema de Rotas

Exemplos de rotas dinâmicas (`/produtos/[id]`), catch-all routes e query parameters. Tudo baseado na estrutura de pastas.

### 5. Formulários

Validação profissional usando React Hook Form + Zod. Veja como criar forms com validação em tempo real.

### 6. Error Handling

Como lidar com erros e estados de loading de forma elegante, sem quebrar a experiência do usuário.

## Estrutura do Projeto

```
apps/web/                 # Aplicação Next.js
├── app/                  # App Router
│   ├── page.tsx         # Página inicial
│   ├── layout.tsx       # Layout principal
│   └── examples/        # Exemplos práticos
└── components/
    ├── ui/              # Componentes base (shadcn/ui)
    ├── layout/          # Header, Footer, Nav
    └── sections/        # Seções das páginas

apps/api/                 # Backend NestJS (suporte)
```

## Stack Tecnológico

**Frontend**:

- Next.js 15.5
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui (componentes)
- React Hook Form + Zod (formulários)

**Backend**:

- NestJS
- TypeScript

**Monorepo**:

- Turborepo
- pnpm workspaces

## Como Aprender com Este Projeto

### Se você é iniciante em Next.js

1. Comece rodando o projeto
2. Explore cada exemplo em `/examples`
3. Abra o código-fonte de cada exemplo e veja como funciona
4. Tente modificar algo e veja o que acontece
5. Crie sua própria página seguindo os exemplos

### Se você já conhece Next.js

1. Veja os exemplos de Server Actions
2. Explore o sistema de Streaming
3. Analise como o cache e revalidação funcionam
4. Use como referência para seus projetos

## Principais Conceitos

### Server Components (Padrão)

Por padrão, componentes rodam no servidor. Isso traz benefícios:

- Melhor SEO (HTML já vem pronto)
- Bundle JavaScript menor
- Acesso direto a banco de dados e APIs

```tsx
// Isso é um Server Component (padrão)
export default async function Page() {
  const data = await fetch("...");
  return <div>{data.name}</div>;
}
```

### Client Components (Quando Necessário)

Use `"use client"` quando precisar de interatividade:

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Rotas Baseadas em Arquivos

Criar uma pasta = criar uma rota. Simples assim.

```
app/
  sobre/
    page.tsx          → /sobre
  produtos/
    [id]/
      page.tsx        → /produtos/123
```

## Deploy

### Vercel (Mais Fácil)

O jeito mais simples é fazer deploy na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Outras Plataformas

Next.js funciona em qualquer plataforma que suporte Node.js:

- Netlify
- AWS (Amplify, EC2, ECS)
- Railway
- Digital Ocean

## Curiosidades sobre Next.js

### É só para sites ou serve para apps também?

**Ambos!** Next.js é usado para:

- **Sites**: Blogs, e-commerce, landing pages, documentação
- **Apps**: Dashboards, SaaS, plataformas, admin panels

Empresas como TikTok e Notion usam Next.js para aplicações complexas com milhões de usuários, não só sites estáticos.

### Fico preso à Vercel?

**Não!** Next.js é open source (licença MIT). Você pode hospedar em qualquer lugar que rode Node.js:

- AWS (Amplify, EC2, ECS, Lambda)
- Google Cloud Platform
- Microsoft Azure
- Netlify, Railway, Digital Ocean

Vercel é só a opção mais fácil, não obrigatória.

### Precisa usar TypeScript?

Não é obrigatório, mas é altamente recomendado. TypeScript previne muitos bugs e melhora a experiência de desenvolvimento com autocomplete inteligente.

### Minhas bibliotecas React funcionam?

Sim! A vasta maioria funciona direto. Se a lib usar hooks ou eventos do browser, só precisa adicionar `"use client"` no topo do arquivo. Exemplos que funcionam: React Hook Form, Zustand, Redux, TanStack Query, etc.

### Next.js é difícil de aprender?

Se você já sabe React, a curva é suave. Next.js adiciona funcionalidades, mas mantém a simplicidade do React. Em 1-2 semanas você já está produtivo.

### Quanto custa hospedar?

**Vercel** (criadora do Next.js):

- Free tier: 100GB bandwidth, projetos ilimitados
- Pro: $20/mês por usuário

**AWS Amplify**: ~$12/mês para apps pequenos

**Outras opções**: Railway ($5/mês), Digital Ocean ($12/mês)

### Por que Next.js ao invés de Create React App?

Create React App foi descontinuado. A própria equipe do React agora recomenda usar frameworks como Next.js porque eles incluem:

- Roteamento nativo
- Otimizações automáticas (imagem, fonte, código)
- SSR/SSG out of the box
- Melhor performance e SEO

## Recursos Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Tutorial Interativo](https://nextjs.org/learn)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

## Contribuindo

Encontrou algum problema ou tem sugestões? Sinta-se livre para:

- Abrir uma issue
- Enviar um pull request
- Compartilhar o que você aprendeu

## Licença

MIT - Use como quiser...

---

Feito com Next.js 15 para demonstrar suas capacidades em cenários reais.
