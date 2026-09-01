import Image from "next/image";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0F1020] flex items-center justify-center px-6">

      <div className="text-center">

        <div className="flex justify-center">
          <Image
            src="/images/easteregg/zwifi.png"
            alt="Zwifi"
            width={110}
            height={110}
            className="drop-shadow-2xl animate-bounce"
          />
        </div>

        <p className="mt-8 text-2xl font-black text-white">
          Even geduld...
        </p>

        <p className="mt-3 text-gray-400">
          Zwifi is de pagina aan het zoeken. 🌭
        </p>

        <div className="mx-auto mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-[#21183B]">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-teal-400" />
        </div>

      </div>

    </main>
  );
}