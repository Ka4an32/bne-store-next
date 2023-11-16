import Link from "next/link";

import { data } from "@data/index";

import s from "./style.module.scss";

const MenuComponent = () => (
  <ul className={s.menu}>
    {data.menu.map(({ name, url }) => (
      <li key={name}>
        <Link className={s.menu__link} href={url}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuComponent;
