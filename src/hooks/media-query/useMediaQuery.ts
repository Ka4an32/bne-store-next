"use client";

import { useState } from "react";

import useIsomorphicLayoutEffect from "../isomorphic-effect/useIsomorphicLayoutEffect";

export default function useMediaQuery(
  mediaExpression: string,
  /**
   * Will be used during SSR (or when `typeof window === undefined`)
   */
  initialValue = false
) {
  const [result, setResult] = useState(initialValue);

  useIsomorphicLayoutEffect(() => {
    const match = window.matchMedia(mediaExpression);

    const changeListener = () => {
      setResult(match.matches);
    };

    changeListener();
    match.addEventListener("change", changeListener);

    return () => {
      match.removeEventListener("change", changeListener);
    };
  }, [mediaExpression]);

  return result;
}
