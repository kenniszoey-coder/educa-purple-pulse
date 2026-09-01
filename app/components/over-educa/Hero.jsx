import Image from "next/image";
import Zwifi from "../easteregg/Zwifi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <Image
        src="/images/over-educa/over-educa-cover.jpg"
        alt="Educa groepsfoto"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#0F1020]/45"></div>

      <div className="relative z-10 w-full max-w-5xl text-center px-4 sm:px-6 pt-24 pb-24">

        <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-purple-300 font-semibold">
          OVER EDUCA
        </p>

        <h1 className="mt-6 text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
          Meer dan een
          <br />
          studentenvereniging.
        </h1>

        <p className="mt-8 text-lg sm:text-xl md:text-2xl leading-8 md:leading-9 text-gray-200 max-w-3xl mx-auto">
          Educa brengt studenten samen door vriendschap,
          traditie en onvergetelijke activiteiten.
          Een plaats waar herinneringen ontstaan
          en waar iedereen zichzelf kan zijn.
        </p>

      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <div className="flex flex-col items-center text-white/80">

          <span className="text-sm tracking-widest uppercase mb-2">
            Ontdek meer
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
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
        id="over"
        image="/images/easteregg/zwifi-student.png"
        className="bottom-8 right-6"
      />

    </section>
  );
}