import Image from "next/image";
import Zwifi from "../easteregg/Zwifi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <Image
        src="/images/galerij/foto1.jpg"
        alt="Educa groepsfoto"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-28 text-center sm:px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300 sm:text-base sm:tracking-[0.35em]">
          ACTIVITEITEN
        </p>

        <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:mt-6 md:text-7xl">
          Herinneringen
          <br />
          maak je samen.
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:mt-8 md:text-2xl md:leading-9">
          Van sporttoernooien en uitstappen tot thema-avonden,
          weekends en gezellige activiteiten.
          Dit is waar herinneringen ontstaan.
        </p>

      </div>

      {/* Scroll-indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-10">

        <div className="flex flex-col items-center text-white/80">

          <span className="mb-2 whitespace-nowrap text-xs uppercase tracking-[0.2em] sm:text-sm sm:tracking-widest">
            Scroll
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7"
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

      {/* Zwifi */}

      <Zwifi
        id="activiteiten"
        image="/images/easteregg/zwifi-sport.png"
        className="bottom-10 left-6"
      />

    </section>
  );
}