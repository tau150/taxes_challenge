import { ROUTES } from "@/routes/routes.types";

interface Params {
  key?: string;
  value: string;
}

export const generatePath = (route: ROUTES, { key = ":id", value }: Params) => {
  return route.replace(key, value);
};
