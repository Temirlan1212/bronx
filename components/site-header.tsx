"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BARBERSHOP_NAME } from "@/lib/consts";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[95px] bg-gradient-to-b from-black/80 to-transparent">
      <div className="container flex h-full items-center justify-between">
        <a
          href="/"
          className="text-2xl font-black uppercase tracking-tight text-white"
          style={{
            textShadow:
              "-1px -1px 0 #a6ce39, 1px -1px 0 #a6ce39, -1px 1px 0 #a6ce39, 1px 1px 0 #a6ce39",
          }}
        >
          {BARBERSHOP_NAME}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Drawer
          open={open}
          showSwipeHandle
          onOpenChange={setOpen}
          swipeDirection="left"
        >
          <DrawerTrigger className="flex h-10 w-10 items-center justify-center text-white lg:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </DrawerTrigger>
          <DrawerContent className="backdrop-blur-md w-[80dvw] border">
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-black uppercase tracking-tight text-white mt-[18px]">
                {BARBERSHOP_NAME}{" "}
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col p-6 mt-[20px]">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-3 text-base uppercase text-white/80",
                    index !== NAV_LINKS.length - 1 &&
                      "border-b border-white/10 ",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
