import Header from "../components/Header";

import Hero from "../components/over-educa/Hero";
import Story from "../components/over-educa/Story";
import Values from "../components/over-educa/Values";
import ClubSong from "../components/over-educa/ClubSong";
import CTA from "../components/over-educa/CTA";

export default function OverEduca() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0F1020] overflow-hidden">

        <Hero />

        <Story />

        <Values />

        <ClubSong />

        <CTA />

      </main>
    </>
  );
}