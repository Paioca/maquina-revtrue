import { useSeo } from "../lib/useSeo";

export function NotFound() {
  useSeo({
    title: "404 — Página não encontrada | RevTrue",
    description: "A página que você tentou acessar não existe. Volta pra home.",
    robots: "noindex, nofollow",
  });

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-rev-500 font-semibold">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white">
          Essa página não existe.
        </h1>
        <p className="mt-3 text-true-300">
          O link pode estar quebrado ou a página foi movida. Volta pra home e
          continua de lá.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-rev-500 px-6 py-3 font-semibold text-white transition hover:bg-rev-600"
        >
          Voltar pra home
        </a>
      </div>
    </main>
  );
}
