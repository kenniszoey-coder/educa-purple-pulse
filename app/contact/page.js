import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#121326] px-6 pt-40 pb-24">

        {/* Achtergrond glow */}

        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

        <div className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"></div>

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"></div>


        {/* Content */}

        <div className="relative z-10 mx-auto max-w-6xl text-center">

          <p className="text-lg font-semibold uppercase tracking-[0.3em] text-purple-400">
            WE HOREN GRAAG VAN JE
          </p>

          <h1 className="mt-5 text-5xl font-black text-white md:text-7xl">
            Contact
          </h1>

          <div className="mx-auto my-7 h-[2px] w-32 rounded-full bg-gradient-to-r from-purple-500 to-teal-400"></div>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
            Heb je een vraag, wil je meer weten over Educa of wil je
            gewoon even hallo zeggen?
            <br />
            Neem gerust contact met ons op!
          </p>


          {/* Contactkaarten */}

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">


            {/* Algemene info */}

            <a
              href="mailto:info@educamechelen.com"
              className="group rounded-3xl border border-purple-500/50 bg-[#17182e]/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:bg-purple-500/10"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-4xl transition group-hover:scale-110">
                📧
              </div>

              <h2 className="mt-5 text-2xl font-black text-white">
                Algemene vragen
              </h2>

              <p className="mt-4 break-all text-sm leading-6 text-gray-400">
                info@educamechelen.com
              </p>

              <p className="mt-4 text-sm font-semibold text-purple-400">
                Stuur ons een mail →
              </p>

            </a>


            {/* Praeses */}

            <a
              href="mailto:praeses@educamechelen.com"
              className="group rounded-3xl border border-purple-500/50 bg-[#17182e]/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:bg-purple-500/10"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-4xl transition group-hover:scale-110">
                👑
              </div>

              <h2 className="mt-5 text-2xl font-black text-white">
                Praeses
              </h2>

              <p className="mt-4 break-all text-sm leading-6 text-gray-400">
                praeses@educamechelen.com
              </p>

              <p className="mt-4 text-sm font-semibold text-purple-400">
                Contacteer de praeses →
              </p>

            </a>


            {/* Quaestor */}

            <a
              href="mailto:quaestor@educamechelen.com"
              className="group rounded-3xl border border-purple-500/50 bg-[#17182e]/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:bg-purple-500/10"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 text-4xl transition group-hover:scale-110">
                💰
              </div>

              <h2 className="mt-5 text-2xl font-black text-white">
                Quaestor
              </h2>

              <p className="mt-4 break-all text-sm leading-6 text-gray-400">
                quaestor@educamechelen.com
              </p>

              <p className="mt-4 text-sm font-semibold text-teal-300">
                Contacteer de quaestor →
              </p>

            </a>


            {/* Oude algemene mailbox */}

            <a
              href="mailto:educahoogstudentenvereniging@gmail.com"
              className="group rounded-3xl border border-purple-500/30 bg-[#17182e]/60 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:bg-purple-500/10"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-4xl transition group-hover:scale-110">
                📮
              </div>

              <h2 className="mt-5 text-2xl font-black text-white">
                algemene mailbox
              </h2>

              <p className="mt-4 break-all text-sm leading-6 text-gray-400">
                educahoogstudentenvereniging@gmail.com
              </p>

              <p className="mt-4 text-sm font-semibold text-purple-400">
                Stuur ons een mail →
              </p>

            </a>


            {/* Instagram */}

            <a
              href="https://www.instagram.com/hoogstudentenvereniging_educa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-purple-500/50 bg-[#17182e]/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:bg-purple-500/10"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-4xl transition group-hover:scale-110">
                📸
              </div>

              <h2 className="mt-5 text-2xl font-black text-white">
                Instagram
              </h2>

              <p className="mt-4 whitespace-nowrap text-xs text-gray-400 md:text-sm">
                @hoogstudentenvereniging_educa
              </p>

              <p className="mt-4 text-sm font-semibold text-purple-400">
                Bekijk onze Instagram →
              </p>

            </a>


            {/* Facebook */}

            <a
              href="https://www.facebook.com/HoogstudentenverenigingEduca"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-teal-500/50 bg-[#17182e]/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-teal-400 hover:bg-teal-500/10"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 text-4xl transition duration-300 group-hover:scale-110"
              >
                👍
              </div>

              <h2 className="mt-5 text-2xl font-black text-white">
                Facebook
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Hoogstudentenvereniging Educa
              </p>

              <p className="mt-4 text-sm font-semibold text-teal-300">
                Bekijk onze Facebook →
              </p>

            </a>

          </div>


          {/* Onderaan */}

          <p className="mt-16 text-sm italic text-gray-500">
            Crescimus ad bonos magistros 💜
          </p>

        </div>

      </main>
    </>
  );
}