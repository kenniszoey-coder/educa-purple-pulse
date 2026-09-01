"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ZwifiSecretPage() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const found = JSON.parse(
      sessionStorage.getItem("zwifi-found") || "[]"
    );

    if (found.length >= 5) {
      setAllowed(true);
    } else {
      window.location.replace("/");
    }
  }, []);

  if (!allowed) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F1020] px-5 py-12 sm:px-6 sm:py-16">

      {/* Achtergrond */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl animate-pulse sm:h-80 sm:w-80" />

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl animate-pulse sm:h-96 sm:w-96" />

      </div>


      {/* Confetti */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-3 w-2 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "#9333EA"
                  : i % 3 === 1
                  ? "#2DD4BF"
                  : "#C9CED6",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

      </div>


      {/* Inhoud */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-3xl items-center justify-center">

        <div className="w-full text-center">

          {/* Label */}

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 sm:text-sm sm:tracking-[0.35em]">
            🎉 GEHEIME PAGINA
          </p>


          {/* Titel */}

          <h1 className="mt-5 text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Achievement
            <br />
            Unlocked!
          </h1>


          {/* Subtitel */}

          <p className="mt-5 text-xl font-bold text-teal-300 sm:mt-6 sm:text-2xl">
            🌭 Master of Zwifi 🌭
          </p>


          {/* Zwifi */}

          <div className="my-8 flex justify-center sm:my-10 md:my-12">

            <Image
              src="/images/easteregg/zwifi-super.png"
              alt="Super Zwifi"
              width={320}
              height={320}
              priority
              className="h-auto w-56 max-w-full transition hover:scale-110 sm:w-64 md:w-80"
            />

          </div>


          {/* Tekst */}

          <div className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 md:text-xl md:leading-9">

            <p>
              Ongelooflijk...
            </p>

            <p className="mt-5 sm:mt-6">
              Je hebt alle Zwifi's gevonden!
            </p>

            <p className="mt-5 sm:mt-6">
              Blijkbaar ben jij nieuwsgierig genoeg om werkelijk
              overal op de website rond te klikken.
            </p>

            <p className="mt-5 sm:mt-6">
              Welkom bij de exclusieve Zwifi Club. 🌭💜
            </p>

          </div>


          {/* Knop */}

          <div className="mt-10 sm:mt-12 md:mt-14">

            <Link
              href="/"
              className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-7 py-3.5 text-sm font-bold text-white transition hover:scale-105 sm:px-10 sm:py-4 sm:text-base"
            >
              Terug naar de website
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}