import "../src/styles/globals.css";

// Self-hosted fonts (substitui Google Fonts CDN — só subset latin, audiência BR)
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import "@fontsource/jetbrains-mono/latin-700.css";

import { StickyHeader } from "../src/components/StickyHeader";
import { Footer } from "../src/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-true-950 text-white antialiased">
      {/* Google Tag Manager (noscript) */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFB4W4BK" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
      <StickyHeader />
      {children}
      <Footer />
    </div>
  );
}
