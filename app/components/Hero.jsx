import Link from "next/link";
import Zwifi from "./easteregg/Zwifi";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,16,32,.75), rgba(15,16,32,.88)), url('/images/home/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="relative z-10 max-w-5xl text-center px-6">

        <p className="text-xl font-semibold text-purple-400 mb-5">
          Altijd vriendschap hier!
        </p>

        <h1
          className="text-7xl md:text-8xl font-black tracking-wider"
          style={{
            color: "#C9CED6",
            textShadow: "0 0 20px rgba(255,255,255,.18)",
          }}
        >
          EDUCA
        </h1>

        <p className="mt-5 text-xl md:text-2xl italic text-teal-300">
          Crescimus ad bonos magistros
        </p>

        <div className="flex justify-center my-8">
          <div className="h-[2px] w-44 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>

        <div className="space-y-6 text-lg leading-8 text-gray-200">
          <p>
            Beleef onvergetelijke momenten, maak vrienden voor het leven en word
            deel van de Educa-familie.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/over-educa"
            className="rounded-full bg-teal-500 px-10 py-4 font-bold text-white transition hover:scale-105 hover:bg-teal-400"
          >
            Ontdek Educa
          </Link>

          <Link
            href="/word-lid"
            className="rounded-full border-2 border-purple-500 px-10 py-4 font-bold text-white transition hover:scale-105 hover:bg-purple-600"
          >
            Lid worden
          </Link>

        </div>

      </div>

      <Zwifi
        id="home"
        image="/images/easteregg/zwifi.png"
        className="bottom-6 right-6"
      />

    </section>
  );
}