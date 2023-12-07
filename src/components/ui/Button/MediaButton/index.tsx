import { SocialMediaList } from "@/src/constants/social_media"
import RootButton from "../RootButton"
import { MediaButtonInterface } from "./types"

import s from './style.module.scss'
import clsx from "clsx"

const MediaButton: React.FC<MediaButtonInterface> = ({
  socialMedia
}) => {
  const Media = SocialMediaList[socialMedia]
  return (
    <RootButton className={clsx(s['media-button'], s['white'])}>
      <Media />
    </RootButton>
  )
}

export default MediaButton