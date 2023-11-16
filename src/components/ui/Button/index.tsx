import { PropsWithChildren } from "react";
import { BaseButtonInterface } from "./type";

import s from './style.module.scss'
import clsx from "clsx";

const Button: React.FC<PropsWithChildren<BaseButtonInterface>> = ({ children, className, ...props }) => (
  <button className={clsx(className, s['button'])} {...props}>{children}</button>
);

export default Button;
