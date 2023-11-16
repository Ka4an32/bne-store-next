"use client";

import { useTablet } from "@/src/hooks/media-query/instance";
import MenuList from "./Menu";
import HeaderMobileMenu from "./MobileMenu";
import SearchField from "./SearchField";

import s from "./style.module.scss";

const HeaderMenu = () => {
  const isTablet = useTablet();

  if (isTablet) {
    return <HeaderMobileMenu />;
  }

  return (
    <nav className={s["desktop-menu"]}>
      <div className={s["desktop-menu__menu-container"]}>
        <MenuList className={s["desktop-menu__link-list"]} />
        <SearchField />
      </div>
    </nav>
  );
};

export default HeaderMenu;
