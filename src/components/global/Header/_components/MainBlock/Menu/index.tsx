import { data } from "@/src/assets/data";
import MenuLink from "./MenuLink";

import s from "../style.module.scss";

const MenuList: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ul className={className}>
      {data.menu.map((props) => (
        <li className={s["link-container"]} key={props.name}>
          <MenuLink {...props} />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
