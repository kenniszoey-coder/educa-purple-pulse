import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0F1020] flex items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        {/* Zwifi */}

        <div className="flex justify-center mb-8">
          <img
            src="/images/easteregg/zwifi.png"
            alt="Zwifi"
            className="h-auto w-36 drop-shadow-2xl animate-bounce"
          />
        </div>

        {/* Tekst */}

        <p className="text-purple-400 text-lg font-semibold uppercase tracking-[0.25em]">
          Oeps... Zwifi is verdwaald
        </p>

        <h1 className="mt-4 text-7xl md:text-8xl font-black text-white">
          404
        </h1>

        <h2 className="mt-5 text-3xl font-black text-white">
          Deze pagina bestaat niet.
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Zwifi heeft overal gezocht, maar deze pagina blijkbaar
          niet kunnen vinden. 🌭
        </p>

        <p className="mt-3 text-lg italic text-teal-300">
          Misschien is hij gewoon even gaan feesten.
        </p>

        {/* Knop */}

        <div className="mt-9">

          <Link
            href="/"
            className="inline-block rounded-full bg-teal-500 px-9 py-4 font-bold text-white transition hover:scale-105 hover:bg-teal-400"
          >
            Terug naar Educa
          </Link>

        </div>

      </div>

    </main>
  );
}