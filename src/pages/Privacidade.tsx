/* Política de Privacidade — template LGPD para site institucional sem coleta
   ativa além do formulário HubSpot. REVISAR COM ADVOGADO antes de produção. */
import { useSeo } from "../lib/useSeo";

const navy = "#14181F";
const cream = "#F6F3EE";
const orange = "#E8693B";

const UPDATED_AT = "22 de maio de 2026";

export function Privacidade() {
  useSeo({
    title: "Política de Privacidade | RevTrue",
    description:
      "Como a RevTrue coleta, usa e protege seus dados pessoais. Conformidade com a LGPD.",
    canonical: "/privacidade",
    robots: "index, follow",
  });

  return (
    <main style={{ background: navy, color: cream, minHeight: "70vh" }}>
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "120px 24px 96px",
          fontSize: 16,
          lineHeight: 1.7,
          color: "rgba(246,243,238,.85)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: orange,
            marginBottom: 16,
          }}
        >
          Legal · LGPD
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: cream, lineHeight: 1.15 }}>
          Política de Privacidade
        </h1>
        <p style={{ marginTop: 12, fontSize: 13, color: "rgba(246,243,238,.5)" }}>
          Atualizada em {UPDATED_AT}.
        </p>

        <Section title="1. Quem somos">
          A RevTrue é uma consultoria de Revenue Architecture e Revenue Operations
          (RevOps) para empresas B2B. Esta Política descreve como tratamos os dados
          pessoais que coletamos por meio do site <strong>revtrue.com.br</strong>.
          Para fins desta Política, somos a controladora dos dados nos termos da
          Lei nº 13.709/2018 (LGPD).
        </Section>

        <Section title="2. Quais dados coletamos">
          <p>Coletamos apenas dados que você nos fornece ativamente, principalmente via formulário de contato:</p>
          <ul style={ulStyle}>
            <li>Nome completo</li>
            <li>Nome da empresa</li>
            <li>E-mail corporativo</li>
            <li>Telefone / WhatsApp</li>
            <li>Faixa de faturamento (informação declarada)</li>
            <li>Página de origem (URL) e data/hora do envio, para contexto</li>
          </ul>
          <p>
            Não coletamos dados sensíveis (origem racial, religião, saúde, etc.) e
            não compramos listas de leads de terceiros.
          </p>
        </Section>

        <Section title="3. Para que usamos seus dados">
          <ul style={ulStyle}>
            <li>Responder ao seu contato e agendar conversas de diagnóstico</li>
            <li>Enviar materiais relevantes que você solicitou</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>
          <p>
            Não enviamos cold-mail nem incluímos seus dados em mailings de terceiros.
          </p>
        </Section>

        <Section title="4. Base legal (LGPD)">
          <ul style={ulStyle}>
            <li><strong>Consentimento</strong>: ao enviar o formulário, você consente com o uso dos dados para os fins acima</li>
            <li><strong>Execução de contrato e procedimentos preliminares</strong>: para responder à sua solicitação comercial</li>
            <li><strong>Legítimo interesse</strong>: para registros de auditoria e prevenção a fraude</li>
          </ul>
        </Section>

        <Section title="5. Compartilhamento com terceiros">
          <p>Seus dados são tratados por nós e por processadores essenciais:</p>
          <ul style={ulStyle}>
            <li><strong>HubSpot</strong> (CRM) — armazenamento e gestão do relacionamento comercial</li>
            <li><strong>Vercel</strong> — hospedagem do site (não tem acesso aos dados do formulário)</li>
            <li><strong>Calendly</strong> — agendamento de reuniões, quando você opta por usá-lo</li>
          </ul>
          <p>
            Todos seguem políticas próprias de privacidade e seguranças adequadas.
            Não vendemos, alugamos ou cedemos seus dados a terceiros para fins
            comerciais.
          </p>
        </Section>

        <Section title="6. Por quanto tempo guardamos">
          <p>
            Mantemos os dados enquanto durar a relação comercial ou enquanto for
            necessário para cumprir obrigação legal. Você pode pedir exclusão a
            qualquer momento (ver seção 8).
          </p>
        </Section>

        <Section title="7. Cookies">
          <p>
            O site não utiliza cookies de rastreamento (analytics ou publicidade) no
            momento. Caso isso mude no futuro, será solicitado consentimento
            explícito antes do carregamento.
          </p>
          <p>
            Cookies estritamente necessários ao funcionamento podem ser usados pela
            plataforma de hospedagem (Vercel) e não exigem consentimento conforme a
            LGPD.
          </p>
        </Section>

        <Section title="8. Seus direitos (LGPD, art. 18)">
          <p>A qualquer momento você pode solicitar:</p>
          <ul style={ulStyle}>
            <li>Confirmação da existência de tratamento</li>
            <li>Acesso aos dados</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação</li>
            <li>Portabilidade a outro fornecedor</li>
            <li>Revogação do consentimento</li>
          </ul>
          <p>
            Para exercer qualquer um, envie um e-mail para{" "}
            <a href="mailto:contato@revtrue.com.br" style={{ color: orange }}>
              contato@revtrue.com.br
            </a>{" "}
            com o assunto "LGPD — solicitação". Respondemos em até 15 dias.
          </p>
        </Section>

        <Section title="9. Segurança">
          <p>
            Aplicamos medidas técnicas (criptografia HTTPS, headers de segurança,
            controle de acesso ao CRM) e organizacionais para proteger os dados. Em
            caso de incidente que afete dados pessoais, comunicaremos os titulares e
            a ANPD conforme exige a lei.
          </p>
        </Section>

        <Section title="10. Alterações desta Política">
          <p>
            Podemos atualizar esta Política. A data no topo é sempre a versão vigente.
            Mudanças relevantes serão comunicadas via e-mail (quando aplicável) ou
            destacadas no próprio site.
          </p>
        </Section>

        <Section title="11. Encarregado (DPO) e contato">
          <p>
            Felipe Galli, Founder, atua como ponto focal para questões de privacidade
            até a designação formal de um DPO. Contato:{" "}
            <a href="mailto:contato@revtrue.com.br" style={{ color: orange }}>
              contato@revtrue.com.br
            </a>
            .
          </p>
        </Section>
      </article>
    </main>
  );
}

const ulStyle: React.CSSProperties = {
  margin: "8px 0 12px",
  paddingLeft: 22,
  display: "grid",
  gap: 6,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 36 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: cream,
          marginBottom: 12,
        }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
