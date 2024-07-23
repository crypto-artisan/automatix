"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";
import ScrollUpProvider from "@/components/scrollUpProvider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <ScrollUpProvider>
          {children}
        </ScrollUpProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
