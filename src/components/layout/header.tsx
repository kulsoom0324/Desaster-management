"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/#disasters", label: "Disasters" },
  { href: "/#partners", label: "Partners" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 shadow-md backdrop-blur-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg"
          prefetch={false}
        >
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-headline">Disaster Management</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-foreground/80 transition-colors hover:text-foreground"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="#contact">Request a Demo</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-lg"
                  prefetch={false}
                  onClick={closeSheet}
                >
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <span className="font-headline">Disaster Management</span>
                </Link>
                <nav className="grid gap-2 text-base font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-2 py-1 text-foreground/80 hover:text-foreground"
                      prefetch={false}
                      onClick={closeSheet}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Link
                      href="#contact"
                      className="block px-2 py-1 text-foreground/80 hover:text-foreground"
                      prefetch={false}
                      onClick={closeSheet}
                    >
                      Contact
                    </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
