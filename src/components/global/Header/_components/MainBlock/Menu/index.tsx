import { data } from "@/src/assets/data";
import MenuLink from "./MenuLink";

import s from "../style.module.scss";
import { Dispatch, SetStateAction } from "react";

const MenuList: React.FC<{ className?: string, setOpenStatus: Dispatch<SetStateAction<boolean>> }> = ({ className, setOpenStatus }) => {
  return (
    <ul className={className}>
      {data.menu.map((props) => (
        <li onClick={() => { setOpenStatus(false) }} className={s["link-container"]} key={props.name}>
          <MenuLink {...props} />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
