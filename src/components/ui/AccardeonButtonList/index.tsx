"use client";

import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import type {
  AccordionButtonListInterface,
  AccordionContentInterface,
} from "./types";

import s from "./style.module.scss";

const AccordionContent: React.FC<AccordionContentInterface> = ({
  content,
  isActive,
  contentContainerClassName,
  activeContentContainerClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.maxHeight = `${isActive ? el.scrollHeight + 15 : 0}px`;
    }
  }, [isActive]);
  return (
    <div
      style={{ overflow: "hidden" }}
      className={clsx(
        contentContainerClassName,
        isActive && activeContentContainerClassName
      )}
      ref={ref}
    >
      {content}
    </div>
  );
};

const AccordionButtonList: React.FC<AccordionButtonListInterface> = ({
  item,
  pointer,
  className,
  elementClassName,
  buttonClassName,
  activeButtonClassName,
  contentContainerClassName,
  activeContentContainerClassName,
  initialActiveItem = -1,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveItem);
  return (
    <ul className={clsx(s.accordion, className)}>
      {item.map(({ item: [name, content], onClick = () => { } }, index) => (
        <li className={elementClassName} key={name}>
          <button
            className={clsx(
              buttonClassName,
              index === activeIndex && activeButtonClassName
            )}
            onClick={(e) => {
              setActiveIndex((active) => (index === active ? -1 : index));
              onClick(e);
            }}
          >
            {name}
            {pointer}
          </button>
          <AccordionContent
            content={content}
            isActive={index === activeIndex}
            contentContainerClassName={contentContainerClassName}
            activeContentContainerClassName={activeContentContainerClassName}
          />
        </li>
      ))}
    </ul>
  );
};

export default AccordionButtonList;
