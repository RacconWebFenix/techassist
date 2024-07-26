"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import MenuIcon from "./MenuIcon";

import Logo from "@/assets/img/logo_header.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeaderMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-4 lg:px-6 h-20 flex items-center transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-background shadow-md z-50"
          : ""
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <div className="w-[300px]">
          <Sheet>
            <SheetTrigger asChild>
              <Image src={Logo} alt="Logo" />
            </SheetTrigger>
          </Sheet>
        </div>
        <div className="flex w-full justify-center">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/sobre"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  Sobre
                </Link>
              </NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/servicos"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Desenvolvimento Web
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Criamos soluções web personalizadas.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Design Gráfico
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Criamos designs modernos e atraentes.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Marketing Digital
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Ajudamos a impulsionar sua presença online.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  Contato
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto w-[150px] hidden lg:flex">
          <Button>Orçamento</Button>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden ">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <Image src={Logo} alt="Logo" />
          <SheetTitle hidden>Menu</SheetTitle>
          <Link href="#" prefetch={false}>
            <span className="sr-only">TechAssist</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Sobre
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Serviços
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contato
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
