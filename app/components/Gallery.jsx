export default function Gallery() {
  const photos = [
    "/images/galerij/foto1.jpg",
    "/images/galerij/foto2.jpg",
    "/images/galerij/foto3.jpg",
    "/images/galerij/foto4.jpg",
    "/images/galerij/foto5.jpg",
    "/images/galerij/foto6.jpg",
    "/images/galerij/foto7.jpg",
    "/images/galerij/foto8.jpg",
    "/images/galerij/foto9.jpg",
    "/images/galerij/foto10.jpg",
    "/images/galerij/foto11.jpg",
    "/images/galerij/foto12.jpg",
  ];

  return (
    <section
      id="galerij"
      className="bg-[#121326] px-6 pb-24 pt-32"
    >

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-5 text-center text-5xl font-black text-white">
          Sfeerbeelden
        </h2>

        <p className="mb-16 text-center text-lg text-gray-300">
          Een blik op de gezellige momenten binnen Educa.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-purple-700 shadow-lg"
            >
              <img
                src={photo}
                alt={`Educa ${index + 1}`}
                className="h-80 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}