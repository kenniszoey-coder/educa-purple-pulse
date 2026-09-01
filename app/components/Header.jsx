"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/over-educa", label: "Over Educa" },
    { href: "/activiteiten", label: "Activiteiten" },
    { href: "/praesidium", label: "Praesidium" },
    { href: "/galerij", label: "Galerij" },
    { href: "/merchandise", label: "Merchandise" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Als mobiel menu openstaat, header altijd zichtbaar houden
      if (mobileMenuOpen) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Helemaal bovenaan = header zichtbaar
      if (currentScrollY < 20) {
        setShowHeader(true);
      }

      // Naar beneden scrollen = header verbergen
      else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      }

      // Naar boven scrollen = header tonen
      else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  // Mobiel menu sluiten wanneer je naar een andere pagina gaat
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[94%] max-w-7xl -translate-x-1/2 transition-all duration-500 ease-in-out md:top-5 ${
        showHeader || mobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-32 opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-purple-700/40 bg-[#1A1233]/90 shadow-2xl backdrop-blur-xl">

        {/* HOOFDBALK */}
        <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">

          {/* LOGO */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 md:gap-4"
          >
            <img
              src="/images/logo.png"
              alt="Educa"
              className="h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
            />

            <div className="min-w-0">
              <h1 className="text-xl font-black tracking-widest text-white md:text-2xl">
                EDUCA
              </h1>

              <p className="hidden text-sm italic text-teal-300 sm:block">
                Crescimus ad bonos magistros
              </p>
            </div>
          </Link>


          {/* DESKTOP NAVIGATIE */}
          <nav className="hidden items-center gap-8 lg:flex">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition duration-300 ${
                  pathname === item.href
                    ? "text-purple-300"
                    : "text-gray-200 hover:text-purple-300"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/word-lid"
              className="rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              🌱 Lid worden
            </Link>

          </nav>


          {/* MOBIELE MENUKNOP */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/40 bg-[#121326] text-2xl text-white transition hover:border-teal-400 lg:hidden"
            aria-label={
              mobileMenuOpen
                ? "Navigatie sluiten"
                : "Navigatie openen"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* MOBIEL MENU */}
        <div
          className={`grid transition-all duration-500 ease-in-out lg:hidden ${
            mobileMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">

            <nav className="border-t border-purple-700/30 px-4 pb-5 pt-3">

              <div className="grid grid-cols-2 gap-2">

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                      pathname === item.href
                        ? "bg-purple-600/20 text-purple-300"
                        : "text-gray-200 hover:bg-white/5 hover:text-purple-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

              </div>

              <Link
                href="/word-lid"
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 px-5 py-3 font-bold text-white"
              >
                🌱 Lid worden
              </Link>

            </nav>

          </div>
        </div>

      </div>
    </header>
  );
}