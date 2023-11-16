import type { ReactNode, MouseEventHandler } from "react";


type AccordionItemType = { item: [string, ReactNode | string], onClick?: MouseEventHandler<HTMLButtonElement> };

export interface AccordionButtonListInterface {
  className?: string;
  elementClassName?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  contentContainerClassName?: string;
  activeContentContainerClassName?: string;
  pointer?: ReactNode;
  item: AccordionItemType[];
  initialActiveItem?: number | '';
}

export interface AccordionContentInterface {
  contentContainerClassName?: AccordionButtonListInterface["contentContainerClassName"];
  activeContentContainerClassName?: AccordionButtonListInterface["activeContentContainerClassName"];
  content: AccordionButtonListInterface["item"][number]['item'][1]
  isActive: boolean;
}
