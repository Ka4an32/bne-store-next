"use client";

import { laptopMaxMedia, mobileMaxMedia, tabletMaxMedia } from "./constants";

import useMediaQuery from "../useMediaQuery";

const useMobile = () => useMediaQuery(mobileMaxMedia);

const useTablet = () => useMediaQuery(tabletMaxMedia);

const useLaptop = () => useMediaQuery(laptopMaxMedia);

export { useMobile, useTablet, useLaptop };
