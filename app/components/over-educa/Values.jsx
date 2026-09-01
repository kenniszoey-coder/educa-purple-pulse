"use client";

import { useState } from "react";

export default function Values() {
  const facts = [
    {
      type: "emoji",
      emoji: "💜",
      title: "Paars",
      subtitle: "Wijsheid & rijkdom",
      text: "Paars staat voor wijsheid en rijkdom. Een kleur die mooi past bij de ervaringen, herinneringen en vriendschappen die je bij Educa verzamelt.",
    },
    {
      type: "emoji",
      emoji: "🩶",
      title: "Zilvergrijs",
      subtitle: "Een nieuw begin",
      text: "Zilvergrijs staat voor een nieuw begin. Elk academiejaar verwelkomen we nieuwe studenten die hun eigen hoofdstuk aan de Educa-geschiedenis toevoegen.",
    },
    {
      type: "emoji",
      emoji: "💚",
      title: "Teal",
      subtitle: "Jeugdigheid",
      text: "Teal staat voor jeugdigheid. Het staat voor de energie, spontaniteit en goesting die onze vereniging typeert.",
    },
    {
      type: "image",
      image: "/images/easteregg/educa-monogram.png",
      title: "Ons monogram",
      subtitle: "Meer dan één letter",
      text: "In ons monogram zit de E van Educa verwerkt. Het uitroepteken staat voor onze actieve club. De betekenis van het monogram is 'Ut vivat, crescat et floreat': dat het leeft, groeit en bloeit.",
    },
    {
      type: "emoji",
      emoji: "🎵",
      title: "Onze leus",
      subtitle: "Crescimus ad bonos magistros",
      text: "Crescimus ad bonos magistros is onze leus én de eerste regel van ons clublied. We zingen het lied op de tonen van Oh! Susanna 460. Omdat de eerste regel net iets te lang is voor het ritme, zingen we hem wat sneller dan de andere regels.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#0F1020] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-purple-300">
            KLEINE WEETJES
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Wist je dat?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Educa zit vol kleine details en tradities.
            <br />
            Beweeg over een kaartje en ontdek het verhaal.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {facts.map((fact, index) => {
            const isActive = active === index;

            return (
              <div
                key={fact.title}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : index)}
                className={`
                  group cursor-pointer overflow-hidden rounded-3xl
                  border bg-[#1B1733] shadow-xl
                  transition-all duration-500 ease-out
                  ${
                    isActive
                      ? "border-teal-400 shadow-2xl lg:-translate-y-2"
                      : "border-purple-700/50 hover:-translate-y-1 hover:border-purple-400"
                  }
                `}
              >

                <div className="p-6">

                  <div className="flex items-start gap-4">

                    <div
                      className={`
                        flex h-14 w-14 shrink-0 items-center justify-center
                        overflow-hidden rounded-2xl bg-[#121326]
                        transition-transform duration-300
                        ${
                          isActive
                            ? "scale-110"
                            : "group-hover:scale-105"
                        }
                      `}
                    >

                      {fact.type === "image" ? (
                        <img
                          src={fact.image}
                          alt="Educa monogram"
                          className="h-14 w-14 object-contain"
                        />
                      ) : (
                        <span className="text-3xl">
                          {fact.emoji}
                        </span>
                      )}

                    </div>

                    <div className="min-w-0">

                      <h3 className="text-xl font-black leading-tight text-white">
                        {fact.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold leading-5 text-teal-300">
                        {fact.subtitle}
                      </p>

                    </div>

                  </div>

                </div>

                <div
                  className={`
                    grid transition-all duration-500 ease-out
                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div className="px-6 pb-6">

                      <div className="mb-5 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

                      <p className="text-sm leading-7 text-gray-300">
                        {fact.text}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        <div className="mt-12 text-center">

          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <p className="mt-6 text-2xl font-semibold italic text-teal-300">
            Ut vivat, crescat et floreat. 🌱
          </p>

          <p className="mt-3 text-gray-400">
            Opdat het moge leven, groeien en bloeien.
          </p>

        </div>

      </div>
    </section>
  );
}