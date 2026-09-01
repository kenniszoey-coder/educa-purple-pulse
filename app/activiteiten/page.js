import Header from "../components/Header";

import Hero from "../components/activiteiten/Hero";
import EventCalendar from "../components/activiteiten/EventCalendar";
import GallerySection from "../components/activiteiten/GallerySection";

export default function Activiteiten() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0F1020]">
        <Hero />

        <EventCalendar />

        <GallerySection />
      </main>
    </>
  );
}