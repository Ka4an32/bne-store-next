import Link from "next/link";

import LogoIcon from "@/images/logo/logo.svg";

import s from "./style.module.scss";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <LogoIcon className={s["icon"]} />
    </Link>
  );
};

export default HeaderLogo;
