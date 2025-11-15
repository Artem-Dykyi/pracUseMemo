import { useMemo } from "react";

export const useDouble = (number) => {
  const doubled = useMemo(() => {
    return number * 2;
  }, [number]);

  return doubled;
};