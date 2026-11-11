"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduce || conn?.saveData) return;
    setPlay(true);
  }, []);

  useEffect(() => {
    if (play) ref.current?.play().catch(() => {});
  }, [play]);

  return (
    <div className="hero-media" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/hero-poster.webp" alt="" width={1600} height={900} fetchPriority="high" decoding="async" />
      {play && (
        <video ref={ref} muted loop playsInline preload="auto" poster="/media/hero-poster.webp" tabIndex={-1}>
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export function VideoCard({ label }: { label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [on, setOn] = useState(false);
  return (
    <div className="media-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/service-5.webp" alt="Freshly renovated bathroom with vanity unit and tiled walls" width={800} height={900} loading="lazy" decoding="async" />
      <video ref={ref} muted loop playsInline preload="none" style={{ opacity: on ? 1 : 0 }} aria-label="Bathroom renovation video" onClick={() => { ref.current?.pause(); setOn(false); }}>
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="btn btn-primary play"
        aria-pressed={on}
        onClick={() => {
          if (on) { ref.current?.pause(); setOn(false); } else { ref.current?.play().catch(() => {}); setOn(true); }
        }}
      >
        {on ? "Pause" : label}
      </button>
    </div>
  );
}
