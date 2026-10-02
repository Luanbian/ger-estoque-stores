# ger-estoque-stores

Vitrine multi-tenant (uma loja por subdomínio). React 19 + Vite 7 + TS + Tailwind v4 + shadcn/Radix + Zustand 5. O carrinho envia um "pedido" (`POST /order`) sem pagamento. O projeto está em desenvolvimento e só existe ambiente local, sem produção.

## Comandos
- `npm install` · `npm run dev` · `npm run build` · `npm run preview` · `npm run lint`
- `build` roda `tsc -b` antes do `vite build`: é o único typecheck. Não há testes nem Prettier.
- Para abrir uma loja no dev: `http://<subdominio>.localhost:5173`.

## Componentes
- `src/app/**/layout.tsx` é o container (stores, efeitos, navegação) e `page.tsx` é apresentacional. Os nomes lembram Next, mas as rotas são declaradas à mão em `src/App.tsx`.
- Props no formato `interface Props { data: {...}; actions: {...} }`, com `export const X`. Layout e page usam `export default`.
- Use as primitivas de `@/components/ui/*` (shadcn new-york com `forwardRef`), `cn()` de `@/lib/utils` e `cva` para variantes, como em `button.tsx`. Não copie os `<button>` crus com classes repetidas de `pages/order/page.tsx`.
- Preços estão em centavos (`*InCents`); exiba com `convertFromCents`. Imagens: `` `${ASSETS_BASE_URL}${path}` ``.

## Stores (`src/features/<domínio>/`)
- Arquivos: `<domínio>.ts` (store), `request(s).ts` (axios) e `types.ts` (inclui o tipo `XStore`).
- `create<XStore>()(persist((set, get) => ({...}), { name: "x-store" }))`.
- As funções de request nunca lançam erro: devolvem os dados ou `{ success: false, message }`. A store zera `request` no início da ação, separa os casos com `"success" in data` e grava `request: { success, message }`. A UI mostra o erro com `RequestError` (`app/components/requestError`).
- Exceção: `makeOrder` devolve `{ success, message }` direto, e quem chama dispara o toast.

## Regras de negócio
- O preço que vale é `finalPriceInCents ?? basePriceInCents`, inclusive no total: use sempre `getPriceInCents()` (`@/utils/getPriceInCents`).
- Um envio com sucesso limpa o carrinho (na store) e fecha o dialog; se der erro, o form mantém os dados.
- Não assuma que o backend recalcula preços ou valida `tenantId`/`domain`; isso não foi confirmado.

## Armadilhas
- `loadConfig()` (`src/constants/api.ts`) **sobrescreve** `API_BASE_URL` no boot com o `url` de `https://luanbian.github.io/ger-estoque-config/data.json`. É intencional durante o desenvolvimento. `VITE_PUBLIC_API_BASE_URL` só vale quando esse fetch falha.
- `API_BASE_URL` é um `export let` que muda depois do import: leia dentro de funções, nunca no topo do módulo.
- `getSubdomain()` só reconhece `*.localhost`. É intencional enquanto não existe produção.
- As 3 stores persistem o estado inteiro no localStorage, sem `version`/`partialize`. Se mudar a forma de um tipo persistido, adicione `version`/`migrate`.
- Toda ação que troca `catalog.items` precisa definir `selectedCategoryId` antes do `await` e conferi-lo depois; é assim que respostas fora de ordem são descartadas.
- O efeito do catálogo em `app/layout.tsx` depende de `showcase?._id`, não do objeto: `fetchShowcase` cria um objeto novo a cada carga.
- `CatalogItem.quantity` é campo do carrinho misturado ao tipo que vem da API.
- Não recoloque `baseUrl` nem `ignoreDeprecations` nos tsconfigs: `paths` funciona sem eles, e o valor `"6.0"` quebra o `tsc -b` no TS 5.9.
- Tailwind v4 via `@tailwindcss/vite` + `src/index.css`. O `tailwind.config.js` não é lido (não há `@config`).
- `components/ui/sonner.tsx` não é usado: `App.tsx` importa `Toaster` direto de `sonner`.
- Todo `VITE_*` vai para o bundle. O `.gitignore` só cobre `.env` e `*.local`, então um `.env.production` seria commitado.
