import Image from "next/image";
import Zwifi from "../easteregg/Zwifi";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <Image
        src="/images/praesidium/groep.jpg"
        alt="Praesidium Educa"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#0F1020]/70" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-24 text-center sm:px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300 sm:text-base sm:tracking-[0.35em]">
          PRAESIDIUM
        </p>

        <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:mt-6 md:text-7xl">
          Maak kennis met
          <br />
          ons praesidium.
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-200 sm:text-xl md:mt-8 md:text-2xl md:leading-9">
          Achter elke activiteit staat een enthousiast team vrijwilligers
          dat zich inzet om van Educa een warme en gezellige vereniging
          te maken.
        </p>

      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce sm:bottom-10">

        <div className="flex flex-col items-center text-center text-white/80">

          <span className="whitespace-nowrap text-xs uppercase tracking-widest sm:text-sm">
            Ontmoet het team
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 h-6 w-6 sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>

        </div>

      </div>

      <Zwifi
        id="praesidium"
        image="/images/easteregg/zwifi-praeses.png"
        className="bottom-8 left-8"
      />

    </section>
  );
}