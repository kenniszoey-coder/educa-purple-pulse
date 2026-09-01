export default function ActivityCards() {
  const cards = [
    {
      emoji: "🏹",
      title: "Sport",
      text: "Van bijlwerpen tot zwemmen en bowling. Samen sporten brengt studenten dichter bij elkaar.",
    },
    {
      emoji: "🎭",
      title: "Cultuur",
      text: "Ontdek nieuwe plaatsen, culturele uitstappen en unieke ervaringen met Educa.",
    },
    {
      emoji: "💜",
      title: "Vriendschap",
      text: "Een vereniging waar nieuwe vriendschappen ontstaan en herinneringen worden gemaakt.",
    },
  ];

  return (
  <section
  id="over-educa"
  className="bg-[#0F1020] py-24 px-6"
>  

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-black text-center text-[#C9CED6]">
          Waar staat Educa voor?
        </h2>

        <p className="text-center text-gray-300 mt-5 max-w-2xl mx-auto text-lg">
          Educa is een studentenvereniging waar sport, cultuur en vriendschap samenkomen.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-[#211136] border border-purple-700/40 p-8 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-6">{card.emoji}</div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {card.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {card.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}