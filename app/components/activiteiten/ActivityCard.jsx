import Image from "next/image";

export default function ActivityCard({
  title,
  description,
  image,
  reverse = false,
}) {
  return (
    <section>
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="rounded-3xl bg-[#151127] border border-purple-500/20 p-6 shadow-2xl">

          <div className="relative h-[420px] w-full">

            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-contain transition duration-500 hover:scale-105"
            />

          </div>

        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-purple-300 font-semibold">
            Activiteit
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            {title}
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            {description}
          </p>

        </div>

      </div>
    </section>
  );
}