const jokes = {
  "Vice-praeses": "Nog even aan het oefenen voor de camera. 📸",
  "Quaestor": "Was de fotograaf nog aan het betalen. 💸",
  "Schachtenmeester": "lag nog onder Reeza haar sloef. 🍻",
  "Spocul": "had weer geen tijd 'zijn vriendin was jarig'. 🏐",
  "Cantor": "tellie was gepikt in brussel. 🎶",
  "Manus": "Was purree aan het eten ofzo. 🔨",
  "Mentor": "had geen 4g meer in mexico. 📚",
};

export default function PlaceholderCard({ role }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-dashed border-purple-500/40 bg-[#1A1333] transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]">

      <div className="h-[320px] flex flex-col items-center justify-center text-center px-6">

        <div className="mb-6 h-24 w-24 rounded-full border-2 border-dashed border-purple-400/50 bg-white/5"></div>

        <p className="mb-3 uppercase tracking-[0.3em] text-purple-300 text-sm font-semibold">
          {role}
        </p>

        <h3 className="text-2xl font-black text-white">
          Wilde niet in
          <br />
          de preview 👀
        </h3>

        <p className="mt-5 text-gray-400 leading-7">
          {jokes[role]}
        </p>

      </div>

    </div>
  );
}