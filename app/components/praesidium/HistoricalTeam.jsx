"use client";

import { useState } from "react";

const historicalPraesidia = [
  {
    year: "2015–2016",
    members: [
      {
        function: "Praeses",
        name: "Aaron Van de Velde",
      },
      {
        function: "Vice-Praeses",
        name: "Chesney Geeraerts",
      },
      {
        function: "Quaestor",
        name: "Chesney Geeraerts",
      },
      {
        function: "P.R./Ab-actis",
        name: "Epiphani Cuypers",
      },
      {
        function: "Schachtenmeester",
        name: "Alex Vanderaa",
      },
      {
        function: "Schachtentemmer",
        name: "Jolan Cusin",
      },
      {
        function: "Feestleider",
        name: "Evy Huysmans",
      },
      {
        function: "Spocul",
        name: "Bram Janssens",
      },
    ],
  },

  {
    year: "2016–2017",
    members: [
      {
        function: "Praeses",
        name: "Chesney Geeraerts",
      },
      {
        function: "Vice-Praeses",
        name: "Yorne Thys",
      },
      {
        function: "Quaestor",
        name: "Yorne Thys",
      },
      {
        function: "P.R./Ab-actis",
        name: "Gitte De Vos",
      },
      {
        function: "Schachtenmeester",
        name: "Jolan Cusin",
      },
      {
        function: "Schachtentemmer",
        name: "Stephanie Van Malderen",
      },
      {
        function: "Feestleider",
        name: "Lesly Heyvaert",
      },
      {
        function: "Redactor",
        name: "Kyra Bulinckx",
      },
      {
        function: "Spocul",
        name: "Filip Vercammen",
      },
      {
        function: "Cantor",
        name: "Glenn Parys",
      },
    ],
  },

  {
    year: "2017–2018",
    members: [
      {
        function: "Praeses",
        name: "Filip Vercammen",
      },
      {
        function: "Vice-Praeses",
        name: "Jelle Dauwe",
      },
      {
        function: "Quaestor",
        name: "Senne Cools",
      },
      {
        function: "Ab-actis",
        name: "Bieke Saerens",
      },
      {
        function: "P.R.",
        name: "Annelies Weyts",
      },
      {
        function: "Schachtenmeester",
        name: "Thomas Michiels",
      },
      {
        function: "Schachtentemmer",
        name: "Renske Dauwe",
      },
      {
        function: "Feestleider",
        name: "Jonas Moons",
      },
      {
        function: "Spocul",
        name: "Nina Verreth",
      },
      {
        function: "Cantor",
        name: "Chesney Geeraerts",
      },
    ],
  },

  {
    year: "2018–2019",
    members: [
      {
        function: "Praeses",
        name: "Jelle Dauwe",
      },
      {
        function: "Vice-Praeses",
        name: "Bieke Saerens",
      },
      {
        function: "Quaestor",
        name: "Bieke Saerens",
      },
      {
        function: "P.R./Ab-actis",
        name: "Tristan Somers",
      },
      {
        function: "Schachtenmeester",
        name: "Laura Greven",
      },
      {
        function: "Schachtentemmer",
        name: "Lindsey Van Baelen",
      },
      {
        function: "Feestleider",
        name: "Kenny Verhasselt",
      },
      {
        function: "Spocul",
        name: "Filip Vercammen",
      },
    ],
  },

  {
    year: "2019–2020",
    members: [
      {
        function: "Praeses",
        name: "Lesly Heyvaert",
      },
      {
        function: "Vice-Praeses",
        name: "Yorne Thys",
      },
      {
        function: "Quaestor",
        name: "Isaura Laureys",
      },
      {
        function: "P.R./Ab-actis",
        name: "Annelies Weyts",
      },
      {
        function: "Schachtenmeester",
        name: "Felke Adriaenssens",
      },
      {
        function: "Schachtentemmer",
        name: "Zeno Van de Voorde",
      },
      {
        function: "Spocul",
        name: "Joni De Leus",
      },
    ],
  },

  {
    year: "2020–2021",
    members: [
      {
        function: "Praeses",
        name: "Felke Adriaenssens",
      },
      {
        function: "Vice-Praeses",
        name: "Amélie Ardouille",
      },
      {
        function: "Quaestor",
        name: "Amélie Ardouille",
      },
      {
        function: "P.R./Ab-actis",
        name: "Ines Van den Bogaert",
      },
      {
        function: "Schachtenmeester",
        name: "Inge Weymeers",
      },
      {
        function: "Schachtentemmer",
        name: "Lars Claessen",
      },
      {
        function: "Feestleider",
        name: "Sarah Van den Bulcke",
      },
      {
        function: "Spocul",
        name: "Nele Verlinden",
      },
    ],
  },

  {
    year: "2021–2022",
    members: [
      {
        function: "Praeses",
        name: "Yorne Thys",
      },
      {
        function: "Vice-Praeses",
        name: "Kenny Verhasselt",
      },
      {
        function: "Quaestor",
        name: "Inge Weymeers",
      },
      {
        function: "Ab-actis",
        name: "Kyra Bulinckx",
      },
      {
        function: "P.R.",
        name: "Kato Op de Beeck",
      },
      {
        function: "Schachtenmeester",
        name: "Jelle Dauwe",
      },
      {
        function: "Schachtentemmer",
        name: "Maaike Van Ransbeeck",
      },
      {
        function: "Spocul",
        name: "Nele Verlinden",
      },
    ],
  },

  {
    year: "2022–2023",
    members: [
      {
        function: "Praeses",
        name: "Zeno Van de Voorde",
      },
      {
        function: "Vice-Praeses",
        name: "Yelle Boey",
      },
      {
        function: "Quaestor",
        name: "Yelle Boey",
      },
      {
        function: "P.R./Ab-actis",
        name: "Eline Winkelhorst",
      },
      {
        function: "Schachtenmeester",
        name: "Lies Timmermans",
      },
      {
        function: "Schachtentemmer",
        name: "Samuel Arnoldi",
      },
      {
        function: "Cantor",
        name: "Sander Hullebusch",
      },
    ],
  },

  {
    year: "2023–2024",
    members: [
      {
        function: "Praeses",
        name: "Yana Rinckhout",
      },
      {
        function: "Quaestor",
        name: "Wouter Menten",
      },
      {
        function: "Ab-actis",
        name: "Emile Decker",
      },
      {
        function: "Schachtenmeester",
        name: "Axel De Saedeleir",
      },
      {
        function: "Feestleider",
        name: "Maeva Clabots",
      },
    ],
  },

  {
    year: "2024–2025",
    members: [
      {
        function: "Praeses",
        name: "Daan Seynaeve",
      },
      {
        function: "P.R./Ab-actis",
        name: "Robin Van Eersel",
      },
      {
        function: "Schachtentemmer",
        name: "Thomas Aerts",
      },
      {
        function: "Feestleider",
        name: "Zeno Van de Voorde",
      },
      {
        function: "Zedenmeester",
        name: "Kato Op de Beeck",
      },
      {
        function: "Spocul",
        name: "Emile Decker",
      },
    ],
  },

  {
    year: "2025–2026",
    members: [
      {
        function: "Praeses",
        name: "Maaike Van Ransbeeck",
      },
      {
        function: "Quaestor",
        name: "Milan Van der Poel",
      },
      {
        function: "P.R.",
        name: "Noor Baumers",
      },
      {
        function: "Ab-actis",
        name: "Robin Van Eersel",
      },
      {
        function: "Schachtenmeester",
        name: "Stijn Oste",
      },
      {
        function: "Zedenmeester",
        name: "Kato Op de Beeck",
      },
      {
        function: "Redactor",
        name: "Noa Van Batenburg",
      },
      {
        function: "Spocul",
        name: "Dany Daniels",
      },
      {
        function: "Cantor",
        name: "Tygo Bamps",
      },
    ],
  },
];

const mentors = {
  "2015–2016": "Senne Van Bruggen en Joeri Van Dingene",
  "2016–2017": "Senne Van Bruggen",
  "2017–2018": "Yorne Thys",
  "2018–2019": "Lesly Heyvaert",
  "2019–2020": "Jolan Cusin",
  "2020–2021": "Laura Greven en Jelle Dauwe",
  "2021–2022": "Joni De Leus",
  "2022–2023": "Lars Claessen",
  "2023–2024": "Kato Op de Beeck en Felke Adriaenssens",
  "2024–2025": "Inge Weymeers",
};

export default function HistoricalTeam() {
  const [openYear, setOpenYear] = useState(null);

  return (
    <section className="bg-[#0F1020] px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Titel */}

        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            DOOR DE JAREN HEEN
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Een vereniging met geschiedenis.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Sinds de oprichting van Educa in 2015 hebben verschillende
            praesidia meegebouwd aan de vereniging die we vandaag kennen.
            Ontdek wie doorheen de jaren mee aan het roer stond.
          </p>
        </div>

        {/* Historische praesidia */}

        <div className="space-y-4">
          {historicalPraesidia.map((praesidium) => {
            const isOpen = openYear === praesidium.year;
            const mentor = mentors[praesidium.year];

            return (
              <div
                key={praesidium.year}
                className="overflow-hidden rounded-2xl border border-purple-700/60 bg-[#17182D] shadow-lg"
              >

                {/* Jaar */}

                <button
                  type="button"
                  onClick={() =>
                    setOpenYear(isOpen ? null : praesidium.year)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-purple-900/20 md:px-8"
                >
                  <div>
                    <p className="text-2xl font-black text-white">
                      {praesidium.year}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Praesidium
                    </p>
                  </div>

                  <span
                    className={`text-2xl text-teal-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {/* Inhoud */}

                {isOpen && (
                  <div className="border-t border-purple-700/40 px-6 pb-7 pt-6 md:px-8">

                    <div className="grid gap-4 sm:grid-cols-2">

                      {praesidium.members.map((member, index) => (
                        <div
                          key={`${member.function}-${member.name}-${index}`}
                          className="rounded-xl border border-white/10 bg-[#121326] p-5"
                        >
                          <p className="text-sm font-bold uppercase tracking-wider text-purple-300">
                            {member.function}
                          </p>

                          <p className="mt-2 text-lg font-semibold text-white">
                            {member.name}
                          </p>
                        </div>
                      ))}

                    </div>

                    {/* Mentor */}

                    {mentor && (
                      <div className="mt-6 rounded-xl border border-teal-400/20 bg-[#121326] p-5">
                        <p className="text-sm font-bold uppercase tracking-wider text-teal-300">
                          Mentor
                        </p>

                        <p className="mt-2 text-lg font-semibold text-white">
                          {mentor}
                        </p>
                      </div>
                    )}

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}