import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-32">

      <div className="rounded-[32px] bg-gradient-to-r from-[#2A1245] to-[#3A1F66] p-12 text-center border border-purple-500/40 shadow-2xl">

        <p className="uppercase tracking-[0.35em] text-purple-300 font-semibold">
          JOUW VERHAAL START HIER
        </p>

        <h2 className="mt-5 text-5xl font-black text-white">
          Klaar om deel uit te maken
          <br />
          van Educa?
        </h2>

        <p className="mt-8 max-w-2xl mx-auto text-xl leading-9 text-gray-200">
          Ontdek hoe je lid kan worden, leer onze vereniging kennen
          en beleef samen met ons een studententijd vol herinneringen.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/word-lid"
            className="rounded-full bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 transition duration-300"
          >
            🌱 Word lid
          </Link>

          <Link
            href="/activiteiten"
            className="rounded-full border-2 border-purple-400 hover:bg-purple-600 text-white font-bold px-8 py-4 transition duration-300"
          >
            🎉 Bekijk activiteiten
          </Link>

        </div>

      </div>

    </section>
  );
}