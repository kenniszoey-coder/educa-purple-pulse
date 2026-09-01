import Header from "../components/Header";

import Hero from "../components/word-lid/Hero";
import Curtain from "../components/word-lid/Curtain";
import Timeline from "../components/word-lid/Timeline";
import FAQ from "../components/word-lid/FAQ";

export default function WordLid() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0F1020] overflow-hidden">

        <Curtain />

        <Hero />

        <Timeline />

        <FAQ />

      </main>
    </>
  );
}