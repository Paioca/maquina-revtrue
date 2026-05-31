import { EmpresaHero } from "../../src/sections/EmpresaHero";
import { EmpresaEpiphany } from "../../src/sections/EmpresaEpiphany";
import { EmpresaProblema } from "../../src/sections/EmpresaProblema";
import { EmpresaFelipe } from "../../src/sections/EmpresaFelipe";
import { EmpresaOQueFazemos } from "../../src/sections/EmpresaOQueFazemos";
import { EmpresaOferta } from "../../src/sections/EmpresaOferta";
import { EmpresaFechamento } from "../../src/sections/EmpresaFechamento";

export default function Page() {
  return (
    <main>
      {/* 1. Hook — headline de posicionamento */}
      <EmpresaHero />
      {/* 2. Epiphany Bridge — quebra a crença errada */}
      <EmpresaEpiphany />
      {/* 3. O Vilão — amplia o problema com os sinais reais */}
      <EmpresaProblema />
      {/* 4. O Guia — Felipe com empatia + autoridade */}
      <EmpresaFelipe />
      {/* 5. O Método — Value Ladder em 3 fases */}
      <EmpresaOQueFazemos />
      {/* 6. A Oferta — stack de valor + diferenciação */}
      <EmpresaOferta />
      {/* 7. Stakes + CTA Final */}
      <EmpresaFechamento />
    </main>
  );
}
