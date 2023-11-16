import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import s from "./style.module.scss";

const MenuLink: React.FC<{
  name: string;
  url: string;
}> = ({ name, url }) => {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <Link className={clsx(s["menu-link"], isActive && s.active)} href={url}>
      {name}
    </Link>
  );
};

export default MenuLink;
