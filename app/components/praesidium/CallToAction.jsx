import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mt-16 sm:mt-24">

      <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-[#1A1333] to-[#23194A] px-6 py-12 text-center sm:px-8 sm:py-16">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300 sm:text-base sm:tracking-[0.35em]">
          ZIN GEKREGEN?
        </p>

        <h2 className="mt-4 break-words text-4xl font-black leading-tight text-white sm:mt-5 sm:text-5xl">
          Word deel van de Educa-familie.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300 sm:mt-6 sm:text-xl sm:leading-9">
          Nieuwe vrienden, onvergetelijke activiteiten, cantussen,
          weekends en herinneringen voor het leven.
          Misschien sta jij hier volgend jaar ook tussen.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 sm:gap-5">

          <Link
            href="/word-lid"
            className="rounded-full bg-teal-500 px-7 py-3.5 font-bold text-white transition hover:scale-105 hover:bg-teal-400 sm:px-8 sm:py-4"
          >
            Word lid
          </Link>

          <Link
            href="/activiteiten"
            className="rounded-full border-2 border-purple-500 px-7 py-3.5 font-bold text-white transition hover:scale-105 hover:bg-purple-600 sm:px-8 sm:py-4"
          >
            Bekijk activiteiten
          </Link>

        </div>

      </div>

    </section>
  );
}