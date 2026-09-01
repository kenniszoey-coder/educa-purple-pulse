"use client";

import { useEffect, useState } from "react";

export default function Zwifi({
  id = "home",
  image = "/images/easteregg/zwifi.png",
  className = "",
}) {
  const [showToast, setShowToast] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const found = JSON.parse(
      sessionStorage.getItem("zwifi-found") || "[]"
    );

    setCount(found.length);
  }, []);

  const handleClick = () => {
    const found = JSON.parse(
      sessionStorage.getItem("zwifi-found") || "[]"
    );

    if (found.includes(id)) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3500);

      return;
    }

    found.push(id);

    sessionStorage.setItem(
      "zwifi-found",
      JSON.stringify(found)
    );

    setCount(found.length);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3500);

    if (found.length === 5) {
      setTimeout(() => {
        window.location.href = "/zwifi";
      }, 2500);
    }
  };

  const messages = {
    1: "Psst... Ik heb nog 4 vriendjes verstopt! 🌭",
    2: "Je bent goed bezig... 👀",
    3: "Halfweg! Nog even zoeken! 🌭",
    4: "Nog eentje... Hij verstopt zich écht goed!",
    5: "🎉 Alle Zwifi's gevonden! Tijd voor je verrassing!",
  };

  return (
    <>
      {/* VERBORGEN ZWIFI */}
      <button
        type="button"
        onClick={handleClick}
        className={`absolute z-30 transition duration-300 hover:scale-110 active:scale-95 ${className}`}
        aria-label="Zwifi"
      >
        <img
          src={image}
          alt="Zwifi"
          className="h-auto w-20 drop-shadow-2xl"
        />
      </button>

      {/* MELDING */}
      {showToast && (
        <div className="fixed bottom-28 right-6 z-[9999] w-80 rounded-2xl border border-purple-500 bg-[#17132d] p-5 shadow-2xl">
          <p className="text-2xl font-black text-white">
            🌭 Zwifi gevonden!
          </p>

          <p className="mt-2 font-bold text-teal-300">
            {count}/5 gevonden
          </p>

          <p className="mt-3 leading-7 text-gray-300">
            {messages[count]}
          </p>
        </div>
      )}
    </>
  );
}