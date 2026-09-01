import Header from "../components/Header";

import Hero from "../components/praesidium/Hero";
import Team from "../components/praesidium/Team";
import HistoricalTeam from "../components/praesidium/HistoricalTeam";

export default function PraesidiumPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen overflow-hidden bg-[#0F1020]">

        <Hero />

        <Team />

        <HistoricalTeam />

      </main>
    </>
  );
}