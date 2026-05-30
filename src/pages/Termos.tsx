/* Termos de Uso — template para site institucional. REVISAR COM ADVOGADO. */
import { useSeo } from "../lib/useSeo";

const navy = "#14181F";
const cream = "#F6F3EE";
const orange = "#E8693B";

const UPDATED_AT = "22 de maio de 2026";

export function Termos() {
  useSeo({
    title: "Termos de Uso | RevTrue",
    description:
      "Termos e condições de uso do site revtrue.com.br e dos materiais publicados pela RevTrue.",
    canonical: "/termos",
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
          Legal
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: cream, lineHeight: 1.15 }}>
          Termos de Uso
        </h1>
        <p style={{ marginTop: 12, fontSize: 13, color: "rgba(246,243,238,.5)" }}>
          Atualizados em {UPDATED_AT}.
        </p>

        <Section title="1. Aceite">
          Ao acessar e usar o site <strong>revtrue.com.br</strong>, você concorda
          com estes Termos. Se não concordar, por favor não utilize o site.
        </Section>

        <Section title="2. Propósito do site">
          O site é um canal institucional da RevTrue. O conteúdo apresentado tem
          natureza informativa sobre serviços de consultoria em Revenue
          Architecture, Revenue Operations e estruturação comercial B2B. Não
          constitui oferta vinculante de serviço — propostas comerciais ocorrem em
          atendimento individual após contato.
        </Section>

        <Section title="3. Propriedade intelectual">
          <p>
            Todo o conteúdo do site — incluindo textos, marca, logos, layout,
            metodologia descrita e materiais — é de propriedade da RevTrue ou de
            seus licenciantes, e protegido pela legislação de direitos autorais e
            propriedade industrial.
          </p>
          <p>
            É permitido o uso pessoal e não comercial do conteúdo, com citação da
            fonte. É proibida a reprodução total ou parcial, cópia para fins
            comerciais, ou criação de obras derivadas sem autorização prévia por
            escrito.
          </p>
        </Section>

        <Section title="4. Marcas de terceiros">
          Nomes de empresas, produtos e metodologias mencionados (Winning by Design,
          Receita Previsível, HubSpot, Oracle, etc.) são marcas registradas de seus
          respectivos titulares e citados apenas para fins descritivos.
        </Section>

        <Section title="5. Uso aceitável">
          <p>Ao usar o site você concorda em não:</p>
          <ul style={ulStyle}>
            <li>Tentar burlar mecanismos de segurança</li>
            <li>Realizar scraping automatizado em massa</li>
            <li>Enviar informações falsas pelo formulário de contato</li>
            <li>Usar o site para distribuir conteúdo ilegal, ofensivo ou malicioso</li>
            <li>Interferir no funcionamento do site ou na experiência de outros usuários</li>
          </ul>
        </Section>

        <Section title="6. Limitação de responsabilidade">
          <p>
            Os conteúdos publicados refletem a visão e a experiência da RevTrue, e
            não devem ser interpretados como aconselhamento garantido para sua
            empresa. Cada operação tem contexto próprio.
          </p>
          <p>
            Na máxima extensão permitida em lei, a RevTrue não se responsabiliza
            por decisões tomadas exclusivamente com base no conteúdo do site, sem
            engajamento formal de consultoria.
          </p>
        </Section>

        <Section title="7. Links externos">
          O site pode conter links para sites de terceiros (Calendly, HubSpot,
          LinkedIn, etc.). Não controlamos nem nos responsabilizamos pelo conteúdo,
          políticas ou práticas desses sites.
        </Section>

        <Section title="8. Privacidade">
          O tratamento de dados pessoais é regido pela{" "}
          <a href="/privacidade" style={{ color: orange }}>
            Política de Privacidade
          </a>
          .
        </Section>

        <Section title="9. Alterações">
          Podemos atualizar estes Termos a qualquer momento. A versão vigente é
          sempre a publicada no site, com a data de atualização no topo. O uso
          continuado após mudanças significa aceite.
        </Section>

        <Section title="10. Lei aplicável e foro">
          Estes Termos são regidos pela legislação brasileira. Fica eleito o foro
          da Comarca onde está sediada a RevTrue para dirimir eventuais
          controvérsias, com renúncia a qualquer outro, por mais privilegiado que
          seja.
        </Section>

        <Section title="11. Contato">
          Dúvidas sobre estes Termos:{" "}
          <a href="mailto:contato@revtrue.com.br" style={{ color: orange }}>
            contato@revtrue.com.br
          </a>
          .
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
