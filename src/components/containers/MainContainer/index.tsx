import type { PropsWithChildren } from "react";

import clsx from "clsx";

import type { MainContainerInterface } from "./type";

import s from "./style.module.scss";

const MainContainer: React.FC<PropsWithChildren<MainContainerInterface>> = ({ el, children, className }) => {
  const Component = el;
  return <Component className={clsx(s["main-container"], className)}>{children}</Component>;
};

export default MainContainer;
