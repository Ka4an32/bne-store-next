import { data } from "@data/index";

import s from "./style.module.scss";

export type CopyRightLinksType = (typeof data)["copyRight"]["links"][number];

const CopyRightLinks: React.FC<CopyRightLinksType> = ({ href, name }) => (
  <a className={s["copy-right-block__link"]} href={href}>
    {name}
  </a>
);

const CopyRightBlock = () => (
  <section className={s["copy-right-block"]}>
    <span className={s["copy-right-block__text"]}>{data.copyRight.text}</span>
    <ul className={s["copy-right-block__link-list"]}>
      {data.copyRight.links.map((item) => (
        <li key={item.name}>
          <CopyRightLinks {...item} />
        </li>
      ))}
    </ul>
  </section>
);

export default CopyRightBlock;
