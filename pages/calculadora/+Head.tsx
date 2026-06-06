const SITE_URL = "https://maquina.revtrue.com.br";

export default function HeadCalculadora() {
  return (
    <>
      <title>Calculadora de Meta · Revtrue</title>
      <link rel="canonical" href={`${SITE_URL}/calculadora`} />
      <meta property="og:url" content={`${SITE_URL}/calculadora`} />
      <meta property="og:title" content="Calculadora de Meta · Revtrue" />
      <meta
        property="og:description"
        content="Quantas reuniões a sua meta de faturamento realmente exige? Calcule o funil de trás pra frente."
      />
      <meta name="twitter:title" content="Calculadora de Meta · Revtrue" />
      <meta
        name="twitter:description"
        content="Quantas reuniões a sua meta de faturamento realmente exige? Calcule o funil de trás pra frente."
      />
    </>
  );
}
