import Image from "next/image";

export default function Sponsors() {
  const sponsors = [
    {
      name: "Frutties",
      image: "/images/sponsors/frutties.png",
      url: "https://www.instagram.com/frutties/",
    },
    {
      name: "Monster Energy",
      image: "/images/sponsors/monster.png",
      url: "https://www.monsterenergy.com/nl-be/",
    },
    {
      name: "Tout Bien",
      image: "/images/sponsors/tout_bien.svg",
      url: "https://toutbienpils.com/",
    },
  ];

  return (
    <section className="border-t border-white/10 bg-[#121026] py-16">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          Onze partners
        </p>

        <h2 className="mt-3 text-3xl font-black text-white">
          Met dank aan onze sponsors
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Dankzij onze partners kunnen we samen nog meer geweldige activiteiten
          en momenten organiseren voor onze leden.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">

          {sponsors.map((sponsor) => (

            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Bezoek ${sponsor.name}`}
              className="group flex h-32 w-52 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >

              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={180}
                height={100}
                className="max-h-20 w-auto object-contain transition duration-300 group-hover:scale-110"
              />

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}