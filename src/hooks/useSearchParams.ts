import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useSearchParams(key: string): { [x: string]: string | null } {
  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  return { [key]: searchParams.get(key) };
}
