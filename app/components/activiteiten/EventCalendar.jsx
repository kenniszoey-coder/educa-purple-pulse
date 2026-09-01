"use client";

import { useState } from "react";

const months = [
  {
    month: 9,
    year: 2026,
    name: "September 2026",
    days: 30,
    firstDay: 1,
  },
  {
    month: 10,
    year: 2026,
    name: "Oktober 2026",
    days: 31,
    firstDay: 3,
  },
  {
    month: 11,
    year: 2026,
    name: "November 2026",
    days: 30,
    firstDay: 6,
  },
  {
    month: 12,
    year: 2026,
    name: "December 2026",
    days: 31,
    firstDay: 1,
  },
];

const events = {
  "2026-09-18": {
    title: "👋 Ledenwelkom",
    description:
      "Welkom terug! Gezellige bijeenkomst voor de start van het nieuwe academiejaar!.",
  },

  "2026-09-23": {
    title: "🧠 Quiz",
    description:
      "Een gezellige quizavond met verschillende rondes, leuke vragen en natuurlijk heel wat Educa-sfeer.",
  },

  "2026-09-24": {
    title: "🍻 Heet In De Keet",
    description:
      "Tijd voor een TD! Hou zeker de socials in de gaten voor meer info.",
  },

  "2026-10-01": {
    title: "🎉 All For More",
    description:
      "Educa trekt samen met andere studentenverenigingen naar All For More. Het fastival voor alle Thomas More studenten",
  },

  "2026-10-02": {
    title: "ℹ️ Infomoment",
    description:
      "Een infomoment voor studenten die meer willen weten over Educa en wat er allemaal te beleven valt.",
  },

  "2026-10-07": {
    title: "🏴‍☠️ Doop",
    description:
      "De Educa-doop staat volledig in het teken van piraten. Meer informatie volgt later.",
  },

  "2026-10-16": {
    title: "🏴‍☠️ Nadoop",
    description:
      "Het piratenavontuur van Educa gaat verder tijdens de nadoop. Meer informatie volgt later.",
  },

  "2026-10-21": {
    title: "⚔️ Schachtenconvent",
    description:
      "Een moment waarop onze schachten samenkomen en meer leren over de tradities van Educa.",
  },

  "2026-10-30": {
    title: "🎃 Halloweenweekend",
    description:
      "Een volledig Educa-weekend van vrijdag 30 oktober tot en met zondag 1 november. Meer informatie volgt later.",
  },

  "2026-11-04": {
    title: "🎲 Spelletjesavond",
    description:
      "Een gezellige avond vol spelletjes, plezier en natuurlijk heel wat Educa-sfeer.",
  },

  "2026-11-06": {
    title: "🍻 Steun-cantus voor Renske",
    description:
      "Een cantus ten voordele van Renske, gecombineerd met het ophalen van de verkochte wafels. Samen steunen we Renske!",
  },

  "2026-11-11": {
    title: "🕵️ Spocul",
    description:
      "Een activiteit georganiseerd door onze Spocul. Meer informatie volgt later.",
  },

  "2026-11-20": {
    title: "🍺 Bierkoning(in) Cantus",
    description:
      "Wie worden dit jaar onze bierkoning en bierkoningin? Ontdek het tijdens de Bierkoning(in) Cantus van Educa.",
  },

  "2026-12-01": {
    title: "🤸 Arenal trampolinepark",
    description:
      "Samen met Toeristika trekken we naar Arenal voor een sportieve en gezellige activiteit.",
  },

  "2026-12-04": {
    title: "🎅 Sintercantus",
    description:
      "Een gezellige cantus volledig in de sfeer van Sinterklaas.",
  },

  "2026-12-09": {
    title: "🎄 Kerstmarkt",
    description:
      "Educa trekt richting de kerstperiode met een gezellige kerstmarkt. Meer informatie volgt later.",
  },

  "2026-12-16": {
    title: "🍻 Café-avond / FAC",
    description:
      "We sluiten het semester gezellig af tijdens een café-avond / FAC. Meer informatie volgt later.",
  },
};

function getDateKey(year, month, day) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

export default function EventCalendar() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeMonth, setActiveMonth] = useState(0);

  const currentMonth = months[activeMonth];

  const calendarDays = [];

  for (let i = 0; i < currentMonth.firstDay; i++) {
    calendarDays.push({
      type: "empty",
      id: `empty-${i}`,
    });
  }

  for (let day = 1; day <= currentMonth.days; day++) {
    calendarDays.push({
      type: "day",
      day,
      id: `day-${day}`,
    });
  }

  return (
    <section className="bg-[#0F1020] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* Titel */}

        <div className="mb-7 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300 sm:text-base sm:tracking-[0.35em]">
            WAT STAAT ER OP DE PLANNING?
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Activiteitenkalender
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
            Ontdek hier alle activiteiten van Educa.
            <br />

            <span className="font-semibold text-teal-300">
              🖱️ Beweeg over een activiteit voor meer info.
            </span>
          </p>

        </div>


        {/* Kalender */}

        <div className="rounded-3xl border border-purple-700/50 bg-[#1B1733] p-3 shadow-2xl sm:p-4 md:p-6">

          {/* Maand navigatie */}

          <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6 sm:gap-4">

            <button
              type="button"
              onClick={() => {
                setActiveMonth((prev) =>
                  prev === 0 ? months.length - 1 : prev - 1
                );
                setActiveEvent(null);
              }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-600/50 bg-[#121326] text-lg text-white transition hover:border-teal-400 hover:bg-[#21183B] sm:h-10 sm:w-10 sm:text-xl"
              aria-label="Vorige maand"
            >
              ←
            </button>

            <div className="min-w-0 text-center">
              <h3 className="text-xl font-black text-white sm:text-2xl md:text-3xl">
                {currentMonth.name}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveMonth((prev) =>
                  prev === months.length - 1 ? 0 : prev + 1
                );
                setActiveEvent(null);
              }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-600/50 bg-[#121326] text-lg text-white transition hover:border-teal-400 hover:bg-[#21183B] sm:h-10 sm:w-10 sm:text-xl"
              aria-label="Volgende maand"
            >
              →
            </button>

          </div>


          {/* Weekdagen */}

          <div className="mb-1 grid grid-cols-7 gap-1 sm:gap-1.5 md:gap-2">

            {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map((day) => (

              <div
                key={day}
                className="py-1 text-center text-[10px] font-bold uppercase tracking-wide text-teal-300 sm:text-xs md:text-sm"
              >
                {day}
              </div>

            ))}

          </div>


          {/* Kalender */}

          <div className="grid grid-cols-7 gap-1 sm:gap-1.5 md:gap-2">

            {calendarDays.map((item) => {

              if (item.type === "empty") {
                return (
                  <div
                    key={item.id}
                    className="h-14 sm:h-16 md:h-20"
                  />
                );
              }

              const day = item.day;

              const dateKey = getDateKey(
                currentMonth.year,
                currentMonth.month,
                day
              );

              const event = events[dateKey];

              const isActive = activeEvent === dateKey;

              const calendarPosition =
                currentMonth.firstDay + day - 1;

              const row = Math.floor(calendarPosition / 7);

              const popupAbove = row >= 2;

              return (

                <div
                  key={item.id}
                  className="relative h-14 sm:h-16 md:h-20"
                  onMouseEnter={() => {
                    if (event) {
                      setActiveEvent(dateKey);
                    }
                  }}
                  onMouseLeave={() => {
                    if (event) {
                      setActiveEvent(null);
                    }
                  }}
                >

                  <button
                    type="button"
                    onClick={() => {
                      if (event) {
                        setActiveEvent(
                          isActive ? null : dateKey
                        );
                      }
                    }}
                    className={`
                      relative z-10 h-full w-full rounded-lg border
                      p-1.5 text-left transition-all duration-300
                      sm:rounded-xl sm:p-2 md:p-3

                      ${
                        event
                          ? "cursor-pointer border-purple-500/70 bg-[#21183B] hover:-translate-y-1 hover:border-teal-400 hover:bg-[#281D46]"
                          : "border-white/5 bg-[#15162A]"
                      }

                      ${
                        isActive
                          ? "border-teal-400 bg-[#253047] ring-2 ring-teal-400/20"
                          : ""
                      }
                    `}
                  >

                    <span
                      className={`
                        text-[10px] font-bold sm:text-xs md:text-sm
                        ${
                          event
                            ? "text-white"
                            : "text-gray-500"
                        }
                      `}
                    >
                      {day}
                    </span>

                    {event && (
                      <p className="mt-0.5 line-clamp-2 text-[7px] font-bold leading-2.5 text-teal-300 sm:mt-1 sm:text-[9px] sm:leading-3 md:text-xs md:leading-4">
                        {event.title}
                      </p>
                    )}

                  </button>


                  {/* Activiteit uitleg */}

                  {event && isActive && (

                    <div
                      className={`
                        absolute left-1/2 z-50 w-[calc(100vw-2rem)]
                        max-w-64 -translate-x-1/2
                        rounded-2xl border border-teal-400/70
                        bg-[#17152D]/95 p-4 text-center
                        shadow-2xl backdrop-blur-md
                        sm:w-64
                        md:w-72

                        ${
                          popupAbove
                            ? "bottom-[calc(100%+10px)]"
                            : "top-[calc(100%+10px)]"
                        }
                      `}
                    >

                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-300">
                        Activiteit
                      </p>

                      <h3 className="mt-1 text-base font-black text-white sm:text-lg">
                        {event.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-gray-300">
                        {event.description}
                      </p>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </div>


        {/* Kleine afsluiter */}

        <p className="mt-5 text-center text-xs italic leading-5 text-gray-500">
          💡 De planning kan doorheen het academiejaar nog wijzigen.
          Nieuwe activiteiten en extra informatie worden hier toegevoegd.
        </p>

      </div>
    </section>
  );
}