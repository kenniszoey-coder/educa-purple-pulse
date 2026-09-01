"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "./Lightbox";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src, title) => {
    setSelectedImage({ src, title });
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24">

        {/* Bovenste rij */}

        <div className="mb-8 grid gap-8 lg:mb-10 lg:grid-cols-2">

          <div className="group">

            <h2 className="mb-4 text-2xl font-black text-white sm:text-3xl">
              🪓 Bijlwerpen
            </h2>

            <div
              onClick={() =>
                openImage(
                  "/images/activiteiten/bijlwerpen.jpg",
                  "Bijlwerpen"
                )
              }
              className="cursor-pointer rounded-3xl border border-white/10 bg-[#18142d] p-3 shadow-2xl sm:p-4"
            >
              <Image
                src="/images/activiteiten/bijlwerpen.jpg"
                alt="Bijlwerpen"
                width={900}
                height={600}
                className="h-auto w-full rounded-2xl transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

          </div>

          <div className="group">

            <h2 className="mb-4 text-2xl font-black text-white sm:text-3xl">
              🚶 Jeneverwandeling
            </h2>

            <div
              onClick={() =>
                openImage(
                  "/images/activiteiten/jenever.jpg",
                  "Jeneverwandeling"
                )
              }
              className="cursor-pointer rounded-3xl border border-white/10 bg-[#18142d] p-3 shadow-2xl sm:p-4"
            >
              <Image
                src="/images/activiteiten/jenever.jpg"
                alt="Jeneverwandeling"
                width={900}
                height={600}
                className="h-auto w-full rounded-2xl transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

          </div>

        </div>

        {/* Voetbal */}

        <section className="mb-10">

          <h2 className="mb-5 text-3xl font-black text-white sm:mb-6 sm:text-4xl">
            ⚽ Voetbaltoernooi
          </h2>

          <div
            onClick={() =>
              openImage(
                "/images/activiteiten/voetbal-team.jpg",
                "Voetbalteam"
              )
            }
            className="mb-6 flex cursor-pointer justify-center rounded-3xl border border-white/10 bg-[#18142d] p-3 shadow-2xl sm:p-4"
          >
            <Image
              src="/images/activiteiten/voetbal-team.jpg"
              alt="Voetbalteam"
              width={1400}
              height={700}
              className="max-h-[650px] w-auto max-w-full rounded-2xl"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div
              onClick={() =>
                openImage(
                  "/images/activiteiten/voetbal-spelers.jpg",
                  "Spelers"
                )
              }
              className="cursor-pointer rounded-3xl border border-white/10 bg-[#18142d] p-3 shadow-xl sm:p-4"
            >
              <Image
                src="/images/activiteiten/voetbal-spelers.jpg"
                alt="Spelers"
                width={700}
                height={500}
                className="h-auto w-full rounded-2xl transition duration-500 hover:scale-[1.02]"
              />
            </div>

            <div
              onClick={() =>
                openImage(
                  "/images/activiteiten/voetbal-supporters.jpg",
                  "Supporters"
                )
              }
              className="cursor-pointer rounded-3xl border border-white/10 bg-[#18142d] p-3 shadow-xl sm:p-4"
            >
              <Image
                src="/images/activiteiten/voetbal-supporters.jpg"
                alt="Supporters"
                width={700}
                height={500}
                className="h-auto w-full rounded-2xl transition duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>

        </section>

        {/* Kiesweek */}

        <section className="mb-16 sm:mb-20">

          <h2 className="mb-4 text-2xl font-black text-white sm:text-3xl">
            🎭 Kiesweek
          </h2>

          <div
            onClick={() =>
              openImage(
                "/images/activiteiten/friends.jpg",
                "Kiesweek"
              )
            }
            className="flex cursor-pointer justify-center rounded-3xl border border-white/10 bg-[#18142d] p-3 shadow-2xl sm:p-4"
          >
            <Image
              src="/images/activiteiten/friends.jpg"
              alt="Kiesweek"
              width={900}
              height={600}
              className="max-h-[650px] w-auto max-w-full rounded-2xl transition duration-500 hover:scale-[1.02]"
            />
          </div>

        </section>

        {/* Galerij knop */}

        <div className="text-center">

          <Link
            href="/galerij"
            className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-6 py-3 text-base font-bold text-white transition hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
          >
            Bekijk de volledige galerij
          </Link>

        </div>

      </section>

      <Lightbox
        image={selectedImage?.src}
        title={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />

    </>
  );
}