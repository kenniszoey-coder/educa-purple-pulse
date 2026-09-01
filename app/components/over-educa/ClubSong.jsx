export default function ClubSong() {
  return (
    <section className="bg-[#0F1020] px-6 pt-10 pb-24">
      <div className="mx-auto max-w-5xl">

        {/* Intro */}

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
            STUDENTENTRADITIE
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            De Heilige Drievuldigheid
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Binnen Educa vormen{" "}
            <span className="font-semibold text-teal-300">
              Io Vivat
            </span>
            ,{" "}
            <span className="font-semibold text-teal-300">
              Gaudeamus Igitur
            </span>{" "}
            en ons eigen clublied samen onze Heilige Drievuldigheid.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
            De eerste twee liederen vind je volledig terug in de
            Studentencodex. Ons eigen clublied kan je hieronder alvast
            meezingen.
          </p>

        </div>

        {/* Clublied */}

        <div className="rounded-3xl border border-purple-700/60 bg-[#1B1733] p-8 shadow-2xl md:p-12">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-purple-300">
              ONS CLUBLIED
            </p>

            <h3 className="mt-4 text-4xl font-black text-white">
              Crescimus ad bonos magistros
            </h3>

            <p className="mt-3 italic text-teal-300">
              Op de tonen van Oh! Susanna 460
            </p>

          </div>

          {/* Liedtekst */}

          <div className="mx-auto mt-10 max-w-2xl text-center text-lg leading-9 text-gray-300">

            {/* Strofe */}

            <div>
              <p>
                <span className="font-bold text-white">
                  Crescimus ad bonos magistros,
                </span>
                <br />
                dat is onze leus.
                <br />
                Wij worden goeie leerkrachten,
                <br />
                ja, dat worden we heus.
                <br />
                Ons schild kleurt paars, grijs, groen.
                <br />
                Dat dragen we met eer.
                <br />
                Als we cantussen of feesten,
                <br />
                dan is er altijd sfeer!
              </p>
            </div>

            {/* Scheiding */}

            <div className="my-10 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

            {/* Refrein */}

            <div>

              <p className="font-black text-2xl text-teal-300">
                Prosit Educa!
              </p>

              <p>
                Altijd vriendschap hier.
                <br />
                En als we samen drinken,
                <br />
                dan vloeit er zeer veel bier!
              </p>

              <div className="mt-6" />

              <p className="font-black text-2xl text-teal-300">
                Prosit Educa!
              </p>

              <p>
                Het leven is een feest.
                <br />
                Feesten gelijk de beesten,
                <br />
                dat doen we om ter 't meest!
              </p>

            </div>

          </div>

          {/* Codex */}

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-purple-700/50 bg-[#121326] p-7 text-center">

            <p className="text-3xl">
              📖
            </p>

            <h4 className="mt-3 text-2xl font-black text-white">
              Ontdek de volledige Studentencodex
            </h4>

            <p className="mt-3 leading-7 text-gray-300">
              Wil je ook{" "}
              <span className="font-semibold text-teal-300">
                Io Vivat
              </span>{" "}
              en{" "}
              <span className="font-semibold text-teal-300">
                Gaudeamus Igitur
              </span>{" "}
              ontdekken?
              <br />
              Deze vind je samen met ons clublied terug in de online
              Studentencodex.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=be.icedesign.studentencodex&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-teal-400 px-7 py-3 font-bold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              📱 Bekijk de Studentencodex
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}