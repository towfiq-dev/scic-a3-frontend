"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Users,
  Search,
  ChevronDown,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Compass,
} from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Free cancellation" },
  { icon: BadgeCheck, label: "Best price guarantee" },
  { icon: Clock3, label: "24/7 expert support" },
  { icon: Compass, label: "Instant confirmation" },
];

const destinations = ["Bali, Indonesia", "Maldives", "Santorini, Greece", "Sajek Valley, Bangladesh"];

const backgroundImages = [
  "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2400&q=80",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0B0F0E] pb-32 sm:pb-28">
      {/* ---------- Cinematic background photo ---------- */}
      <div className="absolute inset-0 h-[100vh] min-h-[640px] overflow-hidden">
        {backgroundImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full origin-center object-cover kenburns transition-opacity duration-[1500ms] ease-in-out ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* colour grade + legibility gradients */}
        <div className="absolute inset-0 bg-[#0B0F0E]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/55 to-[#0B0F0E]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F0E]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_35%,transparent_0%,#0B0F0E_100%)] opacity-60" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="relative mx-auto flex min-h-[100vh] min-h-[640px] max-w-4xl flex-col items-center justify-center px-6 pt-32 text-center">
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0A868]/30 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F0A868] backdrop-blur-sm transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#F0A868]" />
          Limited-time offer — save up to 30%
        </div>

        <h1
          className={`font-serif text-[2.75rem] leading-[1.05] tracking-tight text-[#F7F2E7] sm:text-6xl md:text-[5rem] transition-all duration-700 delay-100 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          Your next adventure
          <br />
          <span className="italic text-[#7FD9D2]">starts now</span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-lg text-balance text-base text-[#F7F2E7]/75 sm:text-lg transition-all duration-700 delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          Join over 15,000 travelers who trust Elevate Journeys for extraordinary
          journeys — expert guides, seamless booking, unforgettable memories.
        </p>

        <div
          className={`mt-9 flex flex-col items-center gap-3 sm:flex-row transition-all duration-700 delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <button className="group inline-flex items-center gap-2 rounded-full bg-[#F7F2E7] px-7 py-3.5 text-sm font-semibold text-[#0B0F0E] shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white">
            Book your trip today
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <button className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-[#F7F2E7] backdrop-blur-sm transition-colors duration-200 hover:bg-white/10">
            Explore destinations
          </button>
        </div>

        <ul
          className={`mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs text-[#F7F2E7]/65 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-1.5">
              <Icon className="h-3.5 w-3.5 text-[#F0A868]" strokeWidth={2} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Signature: floating "plan your trip" search card  */}
      <div
        className={`relative z-10 mx-auto -mt-16 w-[min(1040px,92vw)] transition-all duration-700 delay-500 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl sm:grid-cols-[1.4fr_1fr_1fr_auto]">
          {/* destination */}
          <label className="group flex cursor-pointer flex-col gap-1 bg-[#0B0F0E]/40 px-6 py-4 text-left transition-colors hover:bg-[#0B0F0E]/55 sm:px-7">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#F7F2E7]/50">
              <MapPin className="h-3.5 w-3.5 text-[#F0A868]" />
              Destination
            </span>
            <span className="flex items-center justify-between gap-2 text-sm font-medium text-[#F7F2E7]">
              <select
                defaultValue={destinations[0]}
                className="w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-[#F7F2E7] outline-none [&>option]:text-[#0B0F0E]"
              >
                {destinations.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <ChevronDown className="h-3.5 w-3.5 shrink-0 text-[#F7F2E7]/50" />
            </span>
          </label>

          {/* dates */}
          <label className="flex cursor-pointer flex-col gap-1 bg-[#0B0F0E]/40 px-6 py-4 text-left transition-colors hover:bg-[#0B0F0E]/55 sm:px-7">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#F7F2E7]/50">
              <CalendarDays className="h-3.5 w-3.5 text-[#F0A868]" />
              Dates
            </span>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full bg-transparent text-sm font-medium text-[#F7F2E7] placeholder:text-[#F7F2E7]/40 outline-none"
            />
          </label>

          {/* travelers */}
          <label className="flex cursor-pointer flex-col gap-1 bg-[#0B0F0E]/40 px-6 py-4 text-left transition-colors hover:bg-[#0B0F0E]/55 sm:px-7">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#F7F2E7]/50">
              <Users className="h-3.5 w-3.5 text-[#F0A868]" />
              Travelers
            </span>
            <input
              type="text"
              placeholder="2 adults"
              className="w-full bg-transparent text-sm font-medium text-[#F7F2E7] placeholder:text-[#F7F2E7]/40 outline-none"
            />
          </label>

          {/* search button */}
          <button
            aria-label="Search trips"
            className="group flex items-center justify-center gap-2 bg-[#F0A868] px-8 py-4 text-sm font-semibold text-[#0B0F0E] transition-colors hover:bg-[#F5BD87] sm:px-9"
          >
            <Search className="h-4 w-4" strokeWidth={2.5} />
            <span className="sm:hidden">Search trips</span>
          </button>
        </div>
      </div>

      <style>{`
        .kenburns {
          animation: kenburns 24s ease-in-out infinite alternate;
        }
        @keyframes kenburns {
          0%   { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.12) translate(-1.5%, -1.5%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .kenburns { animation: none; }
        }
      `}</style>
    </section>
  );
}