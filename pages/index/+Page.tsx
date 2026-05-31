import { EmpresaHero } from "../../src/sections/EmpresaHero";
import { EmpresaEpiphany } from "../../src/sections/EmpresaEpiphany";
import { EmpresaFelipe } from "../../src/sections/EmpresaFelipe";
import { EmpresaProblema } from "../../src/sections/EmpresaProblema";
import { EmpresaCasos } from "../../src/sections/EmpresaCasos";
import { EmpresaOQueFazemos } from "../../src/sections/EmpresaOQueFazemos";
import { EmpresaOferta } from "../../src/sections/EmpresaOferta";
import { EmpresaFechamento } from "../../src/sections/EmpresaFechamento";

export default function Page() {
  return (
    <main>
      <EmpresaHero />
      <EmpresaEpiphany />
      <EmpresaFelipe />
      <EmpresaProblema />
      <EmpresaCasos />
      <EmpresaOQueFazemos />
      <EmpresaOferta />
      <EmpresaFechamento />
    </main>
  );
}
