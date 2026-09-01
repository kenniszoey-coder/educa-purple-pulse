import Zwifi from "../easteregg/Zwifi";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <div className="relative z-10 w-full max-w-5xl px-5 text-center sm:px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-lg sm:tracking-[0.25em]">
          🌱 Welkom, biet.
        </p>

        <h1 className="mt-5 text-4xl font-black leading-[1.05] text-[#F4F4F4] sm:text-5xl md:text-7xl">
          Iedere schacht begon
          <br />
          ooit als een biet.
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
          Zin om naast je studie nieuwe mensen te leren kennen,
          tradities te ontdekken en herinneringen te maken die je
          nog lang bijblijven? Bij Educa is iedereen welkom.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-6 sm:text-base sm:leading-7">
          Je hoeft geen geboren studentikoos type te zijn. Je hoeft
          alleen maar jezelf te zijn en zin te hebben om erbij te horen.
        </p>

        <p className="mt-8 text-xl font-semibold italic text-teal-300 sm:mt-10 sm:text-2xl">
          Durf jij het avontuur aan?
        </p>

      </div>

      <Zwifi
        id="wordlid"
        image="/images/easteregg/zwifi-feest.png"
        className="bottom-8 right-6"
      />

    </section>
  );
}