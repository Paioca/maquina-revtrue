import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description?: string;
  canonical?: string;
  robots?: string;
  jsonLd?: object | object[];
}

const SITE_URL = "https://revtrue.com.br";

function setOrCreate<T extends HTMLElement>(
  selector: string,
  factory: () => T,
  apply: (el: T) => void,
): T {
  let el = document.head.querySelector<T>(selector);
  let created = false;
  if (!el) {
    el = factory();
    created = true;
  }
  apply(el);
  if (created) document.head.appendChild(el);
  return el;
}

export function useSeo({ title, description, canonical, robots, jsonLd }: SeoOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const removers: Array<() => void> = [() => (document.title = prevTitle)];

    if (description !== undefined) {
      const prev = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
      const el = setOrCreate<HTMLMetaElement>(
        'meta[name="description"]',
        () => {
          const m = document.createElement("meta");
          m.name = "description";
          return m;
        },
        (m) => {
          m.content = description;
        },
      );
      removers.push(() => {
        if (prev !== undefined) el.content = prev;
      });
    }

    const canonicalHref = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${SITE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
      : null;
    if (canonicalHref) {
      const prev = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
      const el = setOrCreate<HTMLLinkElement>(
        'link[rel="canonical"]',
        () => {
          const l = document.createElement("link");
          l.rel = "canonical";
          return l;
        },
        (l) => {
          l.href = canonicalHref;
        },
      );
      removers.push(() => {
        if (prev) el.href = prev;
      });
    }

    if (robots) {
      const prev = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content;
      const el = setOrCreate<HTMLMetaElement>(
        'meta[name="robots"]',
        () => {
          const m = document.createElement("meta");
          m.name = "robots";
          return m;
        },
        (m) => {
          m.content = robots;
        },
      );
      removers.push(() => {
        if (prev !== undefined) el.content = prev;
      });
    }

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.useSeo = "route";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      removers.push(() => script.remove());
    }

    return () => {
      removers.forEach((r) => r());
    };
  }, [title, description, canonical, robots, JSON.stringify(jsonLd)]);
}
