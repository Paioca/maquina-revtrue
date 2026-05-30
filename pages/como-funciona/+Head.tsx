const SITE_URL = "https://revtrue.com.br";

export default function HeadComoFunciona() {
  return (
    <>
      <link rel="canonical" href={`${SITE_URL}/como-funciona`} />
      <meta property="og:url" content={`${SITE_URL}/como-funciona`} />
      <meta property="og:title" content="How it works — Revtrue" />
      <meta
        property="og:description"
        content="Como funciona o modelo fracionado da Revtrue. Cinco perguntas sobre cadeira de receita, escopo e Sessão de Receita."
      />
      <meta name="twitter:title" content="How it works — Revtrue" />
      <meta
        name="twitter:description"
        content="Como funciona o modelo fracionado da Revtrue. Cinco perguntas sobre cadeira de receita, escopo e Sessão de Receita."
      />
    </>
  );
}
