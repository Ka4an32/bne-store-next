import type { PropsWithChildren } from "react";

import s from "./style.module.scss";

const PageContainer: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <main className={s["page-container"]}>{children}</main>
);

export default PageContainer;
