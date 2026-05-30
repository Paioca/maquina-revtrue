# Auditoria de Responsividade Mobile — RevTrue

**Data:** 2026-05-04
**Metodologia:** Opção C (mix) — Chrome headless via CDP com mobile emulation real (`setDeviceMetricsOverride`) + medição programática de bounding rects + análise estática do código fonte de formulários e CTAs.
**Viewports testados:** 320, 375, 414, 768, 1440

> ⚠️ **Heads-up sobre metodologia**: as primeiras screenshots feitas via `--window-size` simples (sem `setDeviceMetricsOverride`) tinham bug de rendering — o Chrome tratava como desktop em viewport estreito e quebrava layout. As screenshots finais em `/audit/screenshots/` foram regeneradas via CDP com mobile emulation ligado, refletindo o que um iPhone/Android real vê.

---

## Sumário executivo

- **Site funciona bem em mobile** em viewports padrão (375, 414). Cards stackam, tipografia escala, formulário do modal é exemplar (16px anti-zoom iOS, autocomplete em todos os inputs, altura ≥48px).
- **1 bug crítico a 320px**: logo da Revtrue desaparece no header (width=0 por flex shrink), em todas as rotas. iPhone SE 1ª geração vê só "Sobre" + botão CTA, sem identidade visual da marca.
- **2 issues importantes**: botão "Fechar" do modal tem 40px de altura (abaixo do mínimo 44px iOS HIG); a `/sobre` em 320px quebra "A Revtrue." com "A" sozinho na primeira linha.
- **0 problemas de scroll horizontal** — `document.scrollWidth == viewport` em todas as combinações testadas. Element overflow detectado é o glow decorativo do Hero, contido por `overflow: hidden`.
- **Acessibilidade do form é boa**: todos os inputs têm `font-size: 16px`, `autocomplete` correto, `type` adequado e altura ≥48px.

---

## Problemas críticos (bloqueantes)

### [P1] Logo desaparece a 320px no header

- **Rota:** `/` e `/sobre`
- **Viewport:** 320px
- **Componente:** `src/components/StickyHeader.tsx`
- **Sintoma:** width do `<a aria-label="Topo">` (logo) renderiza como **0px** a 320px de viewport. Visualmente, só aparece "Sobre" + botão laranja "Agendar uma conversa". Identidade da marca ausente.
- **Screenshot:** `audit/screenshots/home/320.png`, `audit/screenshots/sobre/320.png`
- **Causa provável:** flex container `<div style={{display: "flex", justifyContent: "space-between", gap: 24, padding: "18px 40px"}}>` não consegue acomodar logo + link + botão a 320px. Logo (com `width: auto`) é o único item flexível e colapsa pra 0. Sobre (37px) e botão (212px, `flex-shrink: 0`) consomem todo o espaço.
- **Sugestão de correção:** uma das opções:
  1. Adicionar `flex-shrink: 0` no `<Link to="/">` do logo
  2. Reduzir padding do header em mobile (`padding: 14px 20px` em vez de `18px 40px`)
  3. Esconder o link "Sobre" do header em viewports <360px (ele já tá no footer e na §06 Time)
  4. Implementar menu hamburger pra mobile (escopo maior)

---

## Problemas importantes (degradação significativa)

### [P2] Botão "Fechar" do modal abaixo do touch target mínimo

- **Rota:** qualquer rota (modal aberto via CTA)
- **Viewport:** 320, 375, 414
- **Componente:** componente `Dialog` em `src/ui/` (close button do shadcn/Radix)
- **Sintoma:** Botão de fechar tem **40px × 36px** — abaixo do mínimo 44×44px do iOS HIG (e WCAG 2.5.5). Risco de mistap, especialmente em viewport pequeno onde fica colado às bordas.
- **Causa provável:** estilo default do componente `Dialog` (provavelmente Radix UI sem override de tamanho).
- **Sugestão de correção:** adicionar `width: 44px; height: 44px` (ou padding interno equivalente) no botão de fechar do `Dialog`.

### [P3] Headline "A Revtrue." quebra com "A" sozinho a 320px

- **Rota:** `/sobre`
- **Viewport:** 320px
- **Componente:** `src/pages/Sobre.tsx` — `<Hero>` interno
- **Sintoma:** A 320px o H1 "A Revtrue." quebra em "A" / "Revtrue." — palavra "A" fica sozinha numa linha, perde hierarquia visual.
- **Screenshot:** `audit/screenshots/sobre/320.png`
- **Causa provável:** `font-size: clamp(48px, 6vw, 72px)` — a 320px = 48px. O glyph "A" + espaço em Hongkong Black 48px ocupa ~40px, e "Revtrue." ocupa ~245px. Soma > 280px (viewport-padding). Quebra forçada.
- **Sugestão de correção:** reduzir `clamp` minimum pra 40px ou aplicar `text-wrap: balance` no h1.

### [P4] Modal copy menciona nome dos sócios ("Felipe e PH")

- **Rota:** qualquer (modal aberto)
- **Viewport:** todos
- **Componente:** `src/components/BookingModal.tsx:89`
- **Sintoma:** Texto "60 minutos com Felipe e PH. Documento escrito ao final, sem custo." Inconsistente com o resto do site que removeu nomes próprios em favor de "dois sócios".
- **Nota:** Fora do escopo estrito da auditoria de **responsividade**, mas detectado durante inspeção e relevante pra coerência. Reportar separado.
- **Sugestão de correção:** trocar por "60 minutos com os dois sócios. Documento escrito ao final, sem custo."

---

## Problemas menores (polimento)

### [P5] Select "Faturamento anual" sem `autocomplete`

- **Rota:** modal de booking
- **Viewport:** todos
- **Componente:** `src/components/CustomBookingForm.tsx` — `SelectField`
- **Sintoma:** todos os outros inputs têm `autocomplete` (`given-name`, `organization`, `email`, `tel`). O `<select>` de faturamento não tem. Acessibilidade menor — selects de fato não têm muitos `autocomplete` tokens úteis, mas seria nice-to-have.
- **Sugestão de correção:** opcional. Pode ignorar.

### [P6] FinalCTA headline com line-break awkward

- **Rota:** `/`
- **Viewport:** 320, 375
- **Componente:** `src/sections/FinalCTA.tsx`
- **Sintoma:** "Pronto pra ver / **onde** / tá o `gargalo`?" — palavra "onde" fica sozinha numa linha. Headline centralizada com 3 quebras desbalanceadas.
- **Screenshot:** `audit/screenshots/home/375-full.png` (chunk inferior)
- **Sugestão de correção:** aplicar `text-wrap: balance` ou ajustar o `<br>` manual se houver.

### [P7] "5 min preenchendo · sem custo · agendamento em seguida" wraps tarde

- **Rota:** `/` → §05 Como Começa
- **Viewport:** 320, 375
- **Componente:** `src/sections/Process.tsx` (subtitle do CTA)
- **Sintoma:** texto `font-mono` 12px wrap em "agendamento" ficando bem colado à borda direita. Não é cut, mas é tight.
- **Sugestão de correção:** adicionar `padding-right` extra ou separar em duas linhas no markup.

### [P8] Header sem menu mobile dedicado

- **Rota:** todas
- **Viewport:** 320, 375, 414
- **Componente:** `src/components/StickyHeader.tsx`
- **Sintoma:** Header tem 3 elementos inline (logo + link + CTA). Não tem hamburger menu pra mobile. Funciona aceitável a 375+, mas a 320 causa o P1 (logo collapse).
- **Sugestão de correção:** se o site planeja adicionar mais links de navegação no header (Blog, Cases, etc.), implementar menu hamburger pra mobile vira obrigatório. Hoje com só 1 link ("Sobre") + 1 CTA, dá pra resolver com fixes pontuais (P1).

---

## Conformidade — checklist por rota

### `/` (home)

| Item | 320 | 375 | 414 | 768 | Notas |
|---|---|---|---|---|---|
| Sem scroll horizontal | ✅ | ✅ | ✅ | ✅ | docW == viewport em todos |
| Conteúdo não cortado | ❌ | ✅ | ✅ | ✅ | logo desaparece a 320 (P1) |
| Imagens redimensionam OK | ✅ | ✅ | ✅ | ✅ | (home não tem images de partner) |
| Padding lateral ≥16px | ✅ | ✅ | ✅ | ✅ | seções usam padding 40px ou 20px |
| Headlines mantêm hierarquia | ✅ | ✅ | ✅ | ✅ | clamp escalando bem |
| Body mínimo 16px | ✅ | ✅ | ✅ | ✅ | parágrafos usam 17–22px |
| Eyebrows legíveis | ✅ | ✅ | ✅ | ✅ | Roboto Condensed 11–13px funciona |
| Cards stackam vertical | ✅ | ✅ | ✅ | ✅ | grid 1fr em <880px |
| Botões ≥44×44 | ✅* | ✅* | ✅* | ✅* | * exceto close do modal (P2) |
| Espaço entre CTAs ≥8px | ✅ | ✅ | ✅ | ✅ | |
| Hover states com fallback touch | ✅ | ✅ | ✅ | ✅ | sem hover crítico |

### `/sobre`

| Item | 320 | 375 | 414 | 768 | Notas |
|---|---|---|---|---|---|
| Sem scroll horizontal | ✅ | ✅ | ✅ | ✅ | |
| Cards sócios stackam | ✅ | ✅ | ✅ | ✅ | grid 1fr <880px |
| Photos renderizam OK | ✅ | ✅ | ✅ | ✅ | object-fit cover, top |
| Hierarquia "empresas > nome" mantida | ✅ | ✅ | ✅ | ✅ | empresas em laranja uppercase preservado |
| Headlines não quebram mal | ❌ | ✅ | ✅ | ✅ | "A Revtrue." quebra a 320 (P3) |
| Footer 3 cols → 1 col | ✅ | ✅ | ✅ | ⚠️ | 768 ainda 3 cols (estica o link list) |

### Modal de booking (overlay em todas as rotas)

| Item | 320 | 375 | 414 | Notas |
|---|---|---|---|---|
| Inputs altura ≥44px | ✅ (48) | ✅ (48) | ✅ (48) | |
| Inputs `font-size` ≥16px (anti-zoom iOS) | ✅ | ✅ | ✅ | todos 16px |
| Labels visíveis (não placeholder-only) | ✅ | ✅ | ✅ | "NOME *", "EMPRESA *", etc. acima do input |
| Type correto pro tipo de input | ✅ | ✅ | ✅ | email, tel, text |
| Autocomplete attrs corretos | ⚠️ | ⚠️ | ⚠️ | inputs ok, select sem (P5) |
| Botão submit ≥44px | ✅ | ✅ | ✅ | 48px |
| Botão "Fechar" ≥44px | ❌ | ❌ | ❌ | 40×36 (P2) |
| Mensagem de erro acessível | ✅ | ✅ | ✅ | inline, abaixo dos campos |
| Modal não cortado por viewport | ✅ | ✅ | ✅ | scroll interno funciona |

---

## Recomendações priorizadas

| # | Ação | Esforço | Impacto |
|---|---|---|---|
| 1 | **Fix P1** — adicionar `flex-shrink: 0` no logo do header **OU** reduzir padding em viewports <400px | Baixo (1 linha) | Alto (320px volta a ter identidade) |
| 2 | **Fix P2** — aumentar close button do modal pra 44×44px | Baixo (1–3 linhas no Dialog) | Médio (acessibilidade WCAG) |
| 3 | **Fix P4** — trocar "Felipe e PH" por "os dois sócios" no `BookingModal.tsx:89` | Baixo (1 linha) | Médio (coerência de copy) |
| 4 | **Fix P3** — `text-wrap: balance` no h1 do hero da `/sobre` | Baixo (1 propriedade) | Baixo (só polimento a 320) |
| 5 | **Fix P6** — `text-wrap: balance` no headline do FinalCTA | Baixo | Baixo |
| 6 | (Decisão) — implementar hamburger menu mobile? | Médio | Médio se forem adicionar mais links no header |
| 7 | (Optional) `autocomplete` no select de faturamento | Baixo | Muito baixo |

**Recomendo começar pelos itens 1, 2 e 3** — todos < 30min de trabalho cada, alto sinal/ruído.

---

## Arquivos de referência

- Screenshots por rota/viewport: `audit/screenshots/{home,sobre,modal}/{320,375,414,768,1440}{,-full}.png`
- Scripts de medição: `audit-screenshots.mjs`, `audit-elements.mjs`, `audit-modal.mjs`, `audit-overflow.mjs` (raiz do projeto)
- Dados brutos: `/tmp/audit-data.json`, `/tmp/audit-modal.json`
