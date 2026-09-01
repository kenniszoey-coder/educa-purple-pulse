export default function Story() {
  return (
    <section className="bg-[#121326] px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Geschiedenis */}

          <div>

            <p className="font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-purple-300">
              ONZE GESCHIEDENIS
            </p>

            <h2 className="mt-5 text-4xl sm:text-5xl font-black leading-tight text-white">
              Van een idee
              <br />
              naar een familie.
            </h2>

            <p className="mt-8 text-lg sm:text-xl leading-8 sm:leading-9 text-gray-300">
              Educa werd opgericht vanuit een eenvoudig idee:
              studenten samenbrengen in een warme vereniging waar
              vriendschap, traditie en plezier centraal staan.
            </p>

            <div className="mt-10 space-y-8">

              {/* 2014-2015 */}

              <div className="relative border-l-2 border-purple-500 pl-6 sm:pl-8">

                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/40"></div>

                <p className="text-sm font-bold uppercase tracking-widest text-purple-300">
                  2014–2015
                </p>

                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                  Het idee ontstaat
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  Educa ontstond naar het idee van{" "}
                  <span className="font-semibold text-white">
                    Aaron Van de Velde
                  </span>
                  . Al snel vond hij in{" "}
                  <span className="font-semibold text-white">
                    Chesney Geeraerts
                  </span>{" "}
                  iemand die dezelfde ideologie deelde.
                  Later vervoegde{" "}
                  <span className="font-semibold text-white">
                    Evy Huysmans
                  </span>{" "}
                  hen. Samen vormden zij de drie oprichters van Educa.
                </p>

              </div>

              {/* 15 april 2015 */}

              <div className="relative border-l-2 border-teal-500 pl-6 sm:pl-8">

                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-teal-400 shadow-lg shadow-teal-400/40"></div>

                <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
                  15 APRIL 2015
                </p>

                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                  Educa wordt geboren
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  Het eerste praesidium werd gedoopt door de toen nog
                  actieve studentenclubs in Mechelen:
                  <span className="font-semibold text-white">
                    {" "}Imaxys, Lama, Retabo en Toeristika.
                  </span>{" "}
                  Diezelfde dag kreeg iedereen officieel zijn of haar
                  lint overhandigd. Vanaf dat moment was Educa
                  officieel geboren als studentenvereniging.
                </p>

              </div>

              {/* 2015-2016 */}

              <div className="relative border-l-2 border-purple-500 pl-6 sm:pl-8">

                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/40"></div>

                <p className="text-sm font-bold uppercase tracking-widest text-purple-300">
                  2015–2016
                </p>

                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                  De eerste leden
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  Hoewel Educa in 2015 werd opgericht, kreeg de
                  vereniging vanaf academiejaar 2015–2016 haar eerste
                  actieve leden. Daarmee begon het studentenleven
                  zoals we Educa vandaag kennen.
                </p>

              </div>

            </div>

          </div>

          {/* Rechter kaart */}

          <div className="relative overflow-hidden rounded-3xl border border-purple-700/50 bg-[#1B1733] p-6 sm:p-10 shadow-2xl">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl"></div>

            <div className="relative min-w-0">

              <p className="text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-300">
                SINDS 2015
              </p>

              <h3 className="mt-5 text-3xl sm:text-4xl font-black leading-tight text-white">
                Meer dan een
                <br />
                studentenvereniging.
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Wat begon met drie mensen en een idee groeide uit
                tot een vereniging waarin studenten elkaar leren
                kennen, samen activiteiten beleven en herinneringen
                maken die nog jaren meegaan.
              </p>

              <div className="my-8 h-px w-full bg-gradient-to-r from-purple-500 via-teal-400 to-transparent"></div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">

                <div className="min-w-0">
                  <p className="text-4xl font-black text-purple-300">
                    2015
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Oprichtingsjaar
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="text-4xl font-black text-teal-300">
                    15/04
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Geboortedatum Educa
                  </p>
                </div>

              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-black/10 p-5 sm:p-6">

                <p className="text-lg sm:text-xl italic leading-8 text-gray-200">
                  "Een vereniging groeit door de mensen die haar
                  geschiedenis schrijven."
                </p>

                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-purple-300">
                  Educa
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}