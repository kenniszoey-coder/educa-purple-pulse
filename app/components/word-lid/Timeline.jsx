export default function Timeline() {
  const steps = [
    {
      number: "01",
      icon: "🌱",
      title: "Kennismaken",
      text: "Ontdek Educa, leer nieuwe mensen kennen en ontdek wat onze vereniging voor jou kan betekenen.",
    },
    {
      number: "02",
      icon: "⚓",
      title: "Doop of nadoop",
      text: "Zet je eerste stap als schacht tijdens onze doop of nadoop.",
    },
    {
      number: "03",
      icon: "💜",
      title: "Schacht",
      text: "Na een geslaagde doop maak je officieel deel uit van de Educa-familie.",
    },
    {
      number: "04",
      icon: "🎓",
      title: "Beleef Educa",
      text: "Geniet van activiteiten, tradities, cantussen en vooral heel veel vriendschap.",
    },
  ];

  return (
    <section className="bg-[#0F1020] px-5 py-16 sm:px-6 sm:py-20">

      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center sm:mb-14">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300 sm:tracking-[0.35em]">
            VAN BIET TOT SCHACHT
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:mt-5 sm:text-4xl md:text-5xl">
            Jouw Educa-avontuur
          </h2>

        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-purple-700/50 bg-[#17152D] p-6 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:border-teal-400/60 sm:p-7"
            >

              <p className="text-xs font-black tracking-[0.3em] text-purple-400">
                {step.number}
              </p>

              <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/40 bg-[#121326] text-2xl sm:mt-5 sm:h-16 sm:w-16 sm:text-3xl">
                {step.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {step.text}
              </p>

              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden text-xl text-teal-400 md:block">
                  →
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}