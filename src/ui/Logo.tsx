import { ImgHTMLAttributes } from "react";
import logoPrimary from "../logo/logo-primary.svg";
import logoLight from "../logo/logo-light.svg";
import iconOrange from "../logo/icon-orange.svg";

type LogoVariant = "primary" | "light" | "icon-orange";

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  variant?: LogoVariant;
  alt?: string;
}

const sources: Record<LogoVariant, string> = {
  primary: logoPrimary,
  light: logoLight,
  "icon-orange": iconOrange,
};

// Aspect ratios extraídos do viewBox dos SVGs originais.
// Renderizamos width/height explícitos pra evitar CLS — Lighthouse pede
// "Defina uma largura e altura explícitas em elementos de imagem".
const ASPECT_RATIOS: Record<LogoVariant, number> = {
  primary: 362.821 / 124.779,
  light: 362.821 / 124.779,
  "icon-orange": 1,
};

export function Logo({ variant = "primary", alt = "Revtrue", style, width, height, ...props }: LogoProps) {
  const styleHeight = typeof style?.height === "number" ? style.height : undefined;
  const h = typeof height === "number" ? height : styleHeight ?? 28;
  const w = typeof width === "number" ? width : Math.round(h * ASPECT_RATIOS[variant]);
  return <img src={sources[variant]} alt={alt} width={w} height={h} style={style} {...props} />;
}
