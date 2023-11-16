import { PropsWithChildren } from "react"
import Button from ".."
import { BaseButtonInterface } from "../type"

import s from './style.module.scss';
import clsx from "clsx";

interface RootButtonInterface extends BaseButtonInterface {
  theme?: 'default' | 'dark'
}


const RootButton: React.FC<PropsWithChildren<RootButtonInterface>> = ({ children, theme = 'default', className }) => {
  return (
    <Button className={clsx(s['root'], s[theme], className)}>
      {children}
    </Button>
  )
}

export default RootButton