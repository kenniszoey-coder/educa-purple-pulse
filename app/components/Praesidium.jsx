import HistoricalTeam from "./praesidium/HistoricalTeam";

export default function Praesidium() {
  const members = [
    {
      name: "Praeses",
      description: "Leidt de vereniging en coördineert het praesidium.",
    },
    {
      name: "Vice-praeses",
      description: "Ondersteunt de praeses bij de dagelijkse werking.",
    },
    {
      name: "Quaestor",
      description: "Beheert de financiën van Educa.",
    },
    {
      name: "PR - Ab Actis",
      description: "Verzorgt communicatie, sociale media en administratie.",
    },
    {
      name: "Schachtenmeester",
      description: "Begeleidt de schachten tijdens hun traject.",
    },
    {
      name: "Schachtentemmer",
      description: "Ondersteunt de schachtenmeester en de schachten.",
    },
    {
      name: "Cantor",
      description: "Leidt cantussen en bewaakt de zangtradities.",
    },
    {
      name: "Spocul",
      description: "Organiseert sportieve en culturele activiteiten.",
    },
    {
      name: "Manus",
      description: "Ondersteunt het praesidium waar nodig.",
    },
  ];

  return (
    <>
      <section className="bg-[#121326] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-5xl font-black text-[#C9CED6]">
            Ontmoet het praesidium
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-300">
            Maak kennis met de studenten die zich inzetten voor Educa.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {members.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-purple-700/40 bg-[#211136] p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2"
              >

                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-4xl">
                  👤
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {member.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Historisch overzicht */}
      <HistoricalTeam />
    </>
  );
}