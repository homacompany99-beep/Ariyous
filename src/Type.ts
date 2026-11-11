
import type { ReactNode } from "react";

//navbar
export interface navbarItem {
  title?: string;
  href: string;
  icon?: string;
  alt?: string;
}
export interface navbarProps {
  logo: string;
  menus: navbarItem[];
  contacts: navbarItem[];
}
//waves
export interface WaveProps {
  color: string;
  backgroundColor: string;
  direction?: "top" | "bottom";
  height?: number;
  className?: string;
}
//services
export interface serviceCardProps {
  cardImagSrc: string;
  faTitle: string;
  enTitle: string;
  description: string;
}
export interface services {
  items: serviceCardProps[]
}