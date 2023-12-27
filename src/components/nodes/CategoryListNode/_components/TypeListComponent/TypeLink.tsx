import clsx from "clsx";
import Link from "next/link"
import { usePathname } from "next/navigation";

import s from './style.module.scss'

const TypeLink: React.FC<typeof Link.defaultProps & { name: string }> = ({ name, href = '/', ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link className={clsx(s['type-link'], isActive && s['type-link__active'])} href={href} {...props}>
      {name}
    </Link>
  )
}

export default TypeLink