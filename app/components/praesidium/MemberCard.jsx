import Image from "next/image";

export default function MemberCard({
  image,
  name,
  role,
  description,
  imageFit = "cover",
  imagePosition = "center",
}) {
  return (
    <div className="h-full min-w-0 overflow-hidden rounded-3xl border border-purple-500/30 bg-[#1A1333] transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">

      {/* FOTO */}

      <div className="relative h-[360px] bg-[#1A1333] sm:h-[420px]">

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className={`${
            imageFit === "contain"
              ? "object-contain"
              : "object-cover"
          } transition duration-500 hover:scale-105`}
          style={{
            objectPosition: imagePosition,
          }}
        />

      </div>

      {/* TEKST */}

      <div className="min-w-0 p-7 sm:p-10">

        <span className="inline-block max-w-full rounded-full bg-purple-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
          {role}
        </span>

        <h3 className="mt-5 break-words text-4xl font-black leading-tight text-white sm:text-5xl">
          {name}
        </h3>

        <p className="mt-5 break-words text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
          {description}
        </p>

      </div>

    </div>
  );
}