import "@/styles/globals.css";
import "@/styles/main.scss";

import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import InitCustomCursor from "@/components/InitCustomCursor";
import NextLink from "next/link";
import Image from "next/image"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col xl:flex-row h-auto">
            <Navbar />
            <main className="z-[1] overflow-y-auto w-full">
              {children}
              <footer className="w-full bg-theme py-6">
                <div className="flex items-center justify-center md:justify-between w-full xl:w-[1200px] mx-auto px-8 xl:px-0">
                  <NextLink className="hidden md:flex justify-start items-center gap-1" href="/">
                    <Image src="/logo.png" alt="logo" width={120} height={40} style={{ height: "20px" }} />
                  </NextLink>
                  <h2 className="text-[18px] text-white">© 2024 Automatic. All Rights Reserved.</h2>
                </div>
              </footer>
            </main>
            <InitCustomCursor />
          </div>
        </Providers>
      </body>
    </html>
  );
}
