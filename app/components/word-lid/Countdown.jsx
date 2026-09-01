"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-07T16:45:00+02:00");

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - Date.now();

      if (difference <= 0) {
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }

      return {
        days: String(
          Math.floor(difference / (1000 * 60 * 60 * 24))
        ).padStart(2, "0"),

        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),

        minutes: String(
          Math.floor((difference / (1000 * 60)) % 60)
        ).padStart(2, "0"),

        seconds: String(
          Math.floor((difference / 1000) % 60)
        ).padStart(2, "0"),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const blocks = [
    {
      value: timeLeft.days,
      label: "Dagen",
    },
    {
      value: timeLeft.hours,
      label: "Uren",
    },
    {
      value: timeLeft.minutes,
      label: "Minuten",
    },
    {
      value: timeLeft.seconds,
      label: "Seconden",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 md:gap-5">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="w-full min-w-[75px] rounded-2xl border border-white/20 bg-white/10 px-3 py-3 text-center shadow-xl backdrop-blur-md sm:w-20 sm:py-4 md:w-24"
        >
          <p className="text-2xl font-black text-white sm:text-3xl md:text-4xl">
            {block.value}
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-300 sm:text-xs md:text-sm">
            {block.label}
          </p>
        </div>
      ))}
    </div>
  );
}