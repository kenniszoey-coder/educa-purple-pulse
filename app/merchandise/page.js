import Header from "../components/Header";

export default function Merchandise() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen items-center justify-center bg-[#121326] px-5 py-32 sm:px-6">

        <div className="w-full max-w-3xl text-center">

          <p className="mb-4 text-lg font-semibold text-purple-400 sm:text-xl">
            👕 Binnenkort verkrijgbaar
          </p>

          <h1 className="break-words text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Merchandise
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl sm:leading-9">
            Achter de schermen werken we aan exclusieve Educa-merchandise.
            Denk aan hoodies, T-shirts, truien en nog veel meer.
          </p>

          <div className="mt-10 rounded-3xl border-2 border-dashed border-purple-600 p-7 sm:mt-12 sm:p-10 md:p-12">

            <div className="mb-5 text-5xl sm:mb-6 sm:text-6xl md:text-7xl">
              👕🧢☕
            </div>

            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Coming Soon...
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Zodra onze collectie klaar is, verschijnt ze hier.
            </p>

          </div>

        </div>

      </main>
    </>
  );
}