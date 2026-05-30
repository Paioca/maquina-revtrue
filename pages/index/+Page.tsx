import { Hero } from "../../src/sections/Hero";
import { Problem } from "../../src/sections/Problem";
import { Method } from "../../src/sections/Method";
import { RaaSModel } from "../../src/sections/RaaSModel";
import { Team } from "../../src/sections/Team";
import { ICP } from "../../src/sections/ICP";
import { Process } from "../../src/sections/Process";
import { FinalCTA } from "../../src/sections/FinalCTA";

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Method />
      <RaaSModel />
      <ICP />
      <Process />
      <Team />
      <FinalCTA />
    </main>
  );
}
