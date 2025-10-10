# Deploy na Vercel - Guia Completo

Este guia explica como fazer deploy deste monorepo Turborepo na Vercel.

## Opções de Deploy

### Opção 1: Deploy apenas do App Web (Recomendado para Demo)

Se você quer apenas demonstrar o frontend Next.js:

#### Passo a Passo

1. **Acesse a Vercel**
   - Vá em [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

2. **Importe o Repositório**
   - Clique em "Add New Project"
   - Selecione o repositório `aula-nextjs`

3. **Configure o Projeto**
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web` ⚠️ IMPORTANTE
   - **Build Command**: `cd ../.. && pnpm build --filter=web`
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `pnpm install`

4. **Variáveis de Ambiente** (opcional)
   ```
   NEXT_PUBLIC_API_URL=sua-api-url-aqui
   ```

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build completar

### Opção 2: Deploy de Ambos (Web + API)

Se você precisa do backend NestJS também:

#### App Web (Next.js)

Siga os mesmos passos da Opção 1.

#### API (NestJS)

**Importante**: A Vercel não é ideal para NestJS. Considere alternativas:

1. **Railway.app** (Recomendado)
   - Suporte nativo a NestJS
   - Deploy automático via GitHub
   - Free tier disponível

2. **Render.com**
   - Boa para aplicações Node.js
   - Free tier com limitações

3. **Heroku**
   - Tradicional e confiável
   - Sem free tier

## Configuração Específica do Turborepo

A Vercel detecta automaticamente Turborepo, mas certifique-se de:

### Build Command Customizado

Para garantir que o Turbo funcione corretamente:

```bash
cd ../.. && pnpm turbo build --filter=web
```

Ou simplesmente:

```bash
pnpm turbo build --filter=web
```

### Configuração de Cache

A Vercel otimiza automaticamente o cache do Turborepo. Não é necessário configuração adicional.

## Troubleshooting

### Erro: "pnpm not found"

Se a Vercel não reconhecer o pnpm:
1. Vá em Project Settings → General
2. Em "Node.js Version", selecione a versão mais recente (20.x+)
3. A Vercel detecta automaticamente o `packageManager` no package.json

### Build Timeout

Se o build estourar o tempo limite:
1. Verifique se o `Root Directory` está configurado como `apps/web`
2. Use apenas `--filter=web` no build command
3. Considere otimizar dependências

### Erro de Módulos

Se houver erro de módulos não encontrados:
1. Certifique-se que o install command está como `pnpm install`
2. Verifique se todas as dependências estão no package.json correto
3. Limpe o cache da Vercel e faça redeploy

## Exemplo de Configuração Final

```json
{
  "buildCommand": "pnpm turbo build --filter=web",
  "devCommand": "pnpm --filter web dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": "apps/web/.next"
}
```

## Domínio Customizado

Após o deploy:
1. Vá em Project Settings → Domains
2. Adicione seu domínio customizado
3. Configure DNS conforme instruções da Vercel

## Variáveis de Ambiente de Produção

Recomendações:
- Use `NEXT_PUBLIC_` prefix para variáveis expostas ao cliente
- Configure em Production, Preview e Development separadamente
- Nunca comite secrets no código

## Links Úteis

- [Vercel Turborepo Guide](https://vercel.com/docs/monorepos/turborepo)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI](https://vercel.com/docs/cli)

## Deploy via CLI (Alternativa)

```bash
# Instale a Vercel CLI
pnpm add -g vercel

# Na raiz do projeto
vercel

# Siga as instruções
# Quando perguntar pelo diretório, selecione: apps/web
```
