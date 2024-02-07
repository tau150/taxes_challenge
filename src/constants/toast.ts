import type { UseToastOptions } from "@chakra-ui/react";

export const TOAST_GENERIC_ERROR: UseToastOptions = {
  title: "Error",
  description: "Oops, something went wrong",
  status: "error",
};

export const TOAST_GENERIC_SUCCESS: UseToastOptions = {
  title: "Succes",
  status: "success",
};
