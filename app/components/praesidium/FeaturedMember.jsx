import Image from "next/image";

export default function FeaturedMember({
  image,
  name,
  role,
  description,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-purple-500/30 bg-[#1A1333] transition duration-300 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">

      <div className="grid lg:grid-cols-[420px_1fr]">

        {/* FOTO */}

        <div className="relative h-[380px] sm:h-[480px] lg:min-h-[520px] lg:h-auto">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:1024px) 100vw, 420px"
            className="object-cover"
          />
        </div>

        {/* TEKST */}

        <div className="flex min-w-0 flex-col justify-center p-7 sm:p-10 lg:p-12">

          <span className="inline-block w-fit max-w-full rounded-full bg-purple-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
            {role}
          </span>

          <h2 className="mt-5 break-words text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {name}
          </h2>

          <p className="mt-6 break-words text-lg leading-8 text-gray-300 sm:text-xl sm:leading-9 lg:mt-8 lg:text-xl lg:leading-10">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}