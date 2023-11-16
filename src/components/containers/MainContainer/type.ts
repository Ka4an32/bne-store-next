import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainContainerInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  el: "div" | "section";
}
