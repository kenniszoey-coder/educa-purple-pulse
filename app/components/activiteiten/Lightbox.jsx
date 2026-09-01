"use client";

import Image from "next/image";

export default function Lightbox({ image, title, onClose }) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-6"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-5xl font-light hover:text-purple-300"
      >
        ×
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full h-full flex items-center justify-center"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}