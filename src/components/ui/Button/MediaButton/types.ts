import { SocialMediaTypes } from "@/src/types/socialMediaTypes";
import { BaseButtonInterface } from "../type";

export interface MediaButtonInterface extends BaseButtonInterface {
  socialMedia: SocialMediaTypes
}