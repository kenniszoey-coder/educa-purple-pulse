import Image from "next/image";
import Countdown from "./Countdown";

export default function Curtain() {
  return (
    <section className="relative w-full overflow-hidden px-0 pt-20 sm:pt-24 md:pt-28">

      {/* Gordijnen */}

      <div className="relative min-h-[680px] w-full overflow-hidden sm:min-h-[720px] md:min-h-[760px]">

        <Image
          src="/images/word-lid/gordijnen.png"
          alt="Theatergordijnen"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Donkere overlay */}

        <div className="absolute inset-0 bg-[#0F1020]/20" />

        {/* Tekst */}

        <div className="absolute inset-0 z-10 flex items-center justify-center px-5 text-center sm:px-6">

          <div className="w-full max-w-6xl">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-300 sm:text-sm sm:tracking-[0.4em] md:text-lg md:tracking-[0.45em]">
              ⚓ DOOP 2026 ⚓
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[0.95] text-white drop-shadow-2xl sm:text-5xl md:mt-5 md:text-7xl lg:text-8xl">
              KLAAR OM
              <br />
              AAN BOORD TE KOMEN?
            </h1>

            {/* Ohe kameraad */}

            <p className="mt-6 text-xl font-semibold italic text-teal-300 sm:mt-7 sm:text-2xl md:mt-8 md:text-3xl">
              Ohe kameraad.
            </p>

            {/* Introductietekst */}

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-200 sm:mt-5 sm:text-lg sm:leading-8 md:text-xl">
              Op woensdag 7 oktober begint een nieuw hoofdstuk
              voor onze toekomstige schachten. Stap aan boord en
              ontdek wat Educa als studentenvereniging voor jou
              in petto heeft.
            </p>

            {/* Verzameltijd */}

            <div className="mt-7 inline-flex max-w-full rounded-full border border-teal-400/40 bg-[#0F1020]/70 px-5 py-3 backdrop-blur-md sm:mt-8 sm:px-7">

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-300 sm:text-sm sm:tracking-[0.2em] md:text-base md:tracking-[0.25em]">
                VERZAMELEN OM 16:45
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Countdown */}

      <div className="relative z-20 -mt-10 flex justify-center px-4 sm:-mt-12 sm:px-6 md:-mt-16">

        <div className="w-full max-w-md rounded-3xl border border-white/15 bg-[#1B1733]/95 px-4 py-5 shadow-2xl backdrop-blur-xl sm:px-6 sm:py-6 md:max-w-fit md:px-8">

          <Countdown />

        </div>

      </div>

    </section>
  );
}