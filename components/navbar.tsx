import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import Image from "next/image"
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  ArrowIcon,
} from "@/components/icons";

export const Navbar = () => {

  return (
    <div className="fixed w-full z-[10] bg-transparent">
      <NextUINavbar position="sticky">
        <div className="flex flex-row w-full justify-between items-center">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Image src="/logo.png" alt="logo" width={160} height={40} />
            </NextLink>
          </NavbarBrand>
          <ul className="hidden md:flex gap-4 justify-start ml-2 items-center">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-[#334155]",
                  )}
                  href={item.href}

                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
          <NextLink href={siteConfig.links.dapp}>
            <Button className="customBtn hidden md:flex flex-row p-4 py-6 text-[16px] border-1 self-start"
              endContent={<ArrowIcon color='#ffffff' />}
            >
              Launch Dapp
            </Button>
          </NextLink>
        </div>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    "primary"
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </div>
  );
};
