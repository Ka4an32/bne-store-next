import { useState } from "react";

import clsx from "clsx";
import { Squash } from "hamburger-react";

import ContactPhone from "@/src/components/nodes/tel/ContactPhone";
import { useMobile } from "@/src/hooks/media-query/instance";

import SearchField from "../SearchField";

import s from "./style.module.scss";
import MenuList from "../Menu";

const HeaderMobileMenu: React.FC = () => {
  const [open, setOpenStatus] = useState(false);
  const isMobile = useMobile();
  return (
    <div className={s["mobile-menu"]}>
      {!isMobile && (
        <div className={s["search-input-tablet"]}>
          <SearchField />
        </div>
      )}
      <nav className={clsx(s["mobile-menu__menu"], open && s.open)}>
        <MenuList />
        {isMobile && (
          <div className={s["mobile-menu__contact"]}>
            <SearchField className={s["search-input"]} />
            <ContactPhone
              containerClassName={s["mobile-menu__phone-container"]}
              telClassName={s["mobile-menu__phone"]}
            />
          </div>
        )}
      </nav>
      <Squash
        color="white"
        toggled={open}
        onToggle={() => setOpenStatus((state) => !state)}
      />
    </div>
  );
};

export default HeaderMobileMenu;
