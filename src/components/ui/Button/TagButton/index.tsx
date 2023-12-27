import { PropsWithChildren } from "react"
import Button from ".."
import { BaseButtonInterface } from "../type"

import s from './style.module.scss';
import clsx from "clsx";

interface TagButtonInterface extends BaseButtonInterface {
}


const TagButton: React.FC<PropsWithChildren<TagButtonInterface>> = ({ children, className, ...props }) => {
  return (
    <Button className={clsx(s['tag-btn'], className)} {...props}>
      {children}
    </Button>
  )
}

export default TagButton