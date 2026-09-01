export default function ActivityCards() {
  const activities = [
    {
      emoji: "🏹",
      title: "Bijlwerpen",
      date: "Oktober 2026",
      description: "Test je precisie tijdens een gezellige avond bijlwerpen.",
    },
    {
      emoji: "🏊",
      title: "Zwemavond",
      date: "November 2026",
      description: "Ontspannen zwemmen en plezier maken met medestudenten.",
    },
    {
      emoji: "🎳",
      title: "Bowling",
      date: "December 2026",
      description: "Wie wordt de bowlingkampioen van Educa?",
    },
  ];

  return (
  <section
  id="activiteiten"
  className="bg-[#0F1020] py-28 px-6"
>  

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-black text-center text-[#C9CED6]">
          Komende activiteiten
        </h2>

        <p className="text-center text-gray-300 mt-5 max-w-2xl mx-auto text-lg">
          Een kleine greep uit onze activiteiten. De volledige kalender volgt binnenkort.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {activities.map((activity) => (
            <div
              key={activity.title}
              className="rounded-3xl bg-[#211136] border border-purple-700/40 p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{activity.emoji}</div>

              <p className="text-teal-300 font-semibold mb-2">
                {activity.date}
              </p>

              <h3 className="text-3xl font-bold text-white mb-4">
                {activity.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {activity.description}
              </p>

              <button className="mt-8 bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-full font-semibold transition">
                Meer info
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}