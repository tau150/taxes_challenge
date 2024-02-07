/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { RenderResult, render as rtlRender } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

function AppProviders({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter> {children} </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export function render(ui: React.ReactNode, ...renderOptions: unknown[]): RenderResult {
  const returnValue = {
    ...rtlRender(ui, { wrapper: AppProviders, ...renderOptions }),
  };

  return returnValue;
}

export * from "@testing-library/react";
