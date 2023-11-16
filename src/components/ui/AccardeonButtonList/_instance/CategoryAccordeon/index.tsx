import AccordionButtonList from "../..";
import type { AccordionButtonListInterface } from "../../types";

import s from "./style.module.scss";

const CategoryAccordion: React.FC<{
  item: AccordionButtonListInterface["item"];
  initialActiveItem?: AccordionButtonListInterface['initialActiveItem']
}> = ({ ...props }) => (
  <AccordionButtonList
    className={s["category-accordion"]}
    elementClassName={s["category-accordion__el"]}
    buttonClassName={s["category-accordion__btn"]}
    activeButtonClassName={s["category-accordion__btn_active"]}
    contentContainerClassName={s["category-accordion__content"]}
    activeContentContainerClassName={s["category-accordion__content_active"]}
    {...props}
  />
);

export default CategoryAccordion;
