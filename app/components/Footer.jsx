import Sponsors from "./Sponsors";

export default function Footer() {
  return (
    <footer className="bg-[#0F1020]">

      {/* SPONSORS */}
      <Sponsors />

      {/* FOOTER */}
      <div className="border-t border-white/10 py-6">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm leading-7 text-gray-400">
            Met veel koffie ☕, weinig slaap 😴 en heel veel liefde 💜
            gebouwd voor Hoogstudentenvereniging Educa.
          </p>

          <div className="mt-4 flex justify-center gap-3">

            <a
              href="https://www.instagram.com/hoogstudentenvereniging_educa/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-600"
            >
              📸 Instagram
            </a>

            <a
              href="https://www.facebook.com/HoogstudentenverenigingEduca"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-teal-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              👍 Facebook
            </a>

          </div>

          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Hoogstudentenvereniging Educa
          </p>

        </div>

      </div>

    </footer>
  );
}