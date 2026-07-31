"use client";

import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const frame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b border-navy/8 bg-canvas/90 backdrop-blur-md"
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Logo />
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {siteConfig.navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2",
                  active
                    ? "bg-cobalt/10 text-cobalt"
                    : "text-navy/75 hover:bg-navy/5 hover:text-navy",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Start a conversation
          </Button>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>
      <div
        id={menuId}
        className={cn(
          "border-t border-navy/8 bg-canvas md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {siteConfig.navigation.map((item, index) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                onClick={closeMenu}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt",
                  active ? "bg-cobalt/10 text-cobalt" : "text-navy",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            href="/contact"
            className="mt-2 w-full"
            onClick={closeMenu}
          >
            Start a conversation
          </Button>
        </Container>
      </div>
    </header>
  );
}
