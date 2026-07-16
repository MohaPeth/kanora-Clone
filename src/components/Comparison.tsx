"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { comparison } from "@/data/site";

const { youtubeId, title: videoTitle } = comparison.video;

function VideoPreview() {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
  );

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Lire la vidéo : ${videoTitle}`}
      className="group absolute inset-0 h-full w-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={videoTitle}
        onError={() => setThumb(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <span className="absolute left-1/2 top-1/2 grid h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-kanora-orange text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
        <Play className="ml-1 h-8 w-8" fill="currentColor" strokeWidth={0} />
      </span>
      <span className="absolute bottom-5 left-5 right-5 text-left font-display text-[20px] font-bold text-white drop-shadow-sm sm:text-[24px]">
        {videoTitle}
      </span>
    </button>
  );
}

export function Comparison() {
  return (
    <section className="bg-kanora-cream py-16 md:py-24">
      <div className="kanora-container">
        <h2 className="reveal text-center font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
          {comparison.title}
        </h2>

        <div className="reveal mx-auto mt-12 max-w-[820px] overflow-hidden rounded-[28px] bg-white shadow-[0_10px_40px_rgba(36,23,18,0.08)]">
          <div className="relative aspect-video w-full">
            <VideoPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
