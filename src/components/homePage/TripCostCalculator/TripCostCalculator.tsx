// components/PlanYourTrip.tsx
"use client";

import { useMemo, useState } from "react";
import { Plane, Hotel, Utensils, Ticket, Sparkles, Check, Crown, Gem } from "lucide-react";

interface CostItem {
  label: string;
  icon: React.ReactNode;
  perDay: number;
}

interface TierConfig {
  key: "basic" | "gold" | "premium";
  name: string;
  tagline: string;
  multiplier: number;
  icon: React.ReactNode;
  badge?: string;
  cardBg: string;
  accentText: string;
  accentBg: string;
  buttonStyle: string;
  perks: string[];
  highlight?: boolean;
}

const baseItems: CostItem[] = [
  { label: "Flights", icon: <Plane className="w-4 h-4" />, perDay: 40 },
  { label: "Hotel", icon: <Hotel className="w-4 h-4" />, perDay: 60 },
  { label: "Food", icon: <Utensils className="w-4 h-4" />, perDay: 25 },
  { label: "Activities", icon: <Ticket className="w-4 h-4" />, perDay: 20 },
];

const tiers: TierConfig[] = [
  {
    key: "basic",
    name: "Basic",
    tagline: "Smart travel, no frills",
    multiplier: 0.7,
    icon: <Sparkles className="w-5 h-5" />,
    cardBg: "bg-white",
    accentText: "text-teal-600",
    accentBg: "bg-teal-50",
    buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
    perks: ["Shared transport", "3-star hotels", "Standard support"],
  },
  {
    key: "gold",
    name: "Gold",
    tagline: "Comfort meets value",
    multiplier: 1,
    icon: <Crown className="w-5 h-5" />,
    badge: "Most Popular",
    cardBg: "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900",
    accentText: "text-orange-300",
    accentBg: "bg-white/10",
    buttonStyle: "bg-gradient-to-r from-fuchsia-500 to-orange-400 hover:opacity-90 text-white",
    perks: ["Private transport", "4-star hotels", "24/7 priority support", "Free cancellation"],
    highlight: true,
  },
  {
    key: "premium",
    name: "Premium",
    tagline: "Luxury, fully curated",
    multiplier: 1.8,
    icon: <Gem className="w-5 h-5" />,
    cardBg: "bg-white",
    accentText: "text-fuchsia-600",
    accentBg: "bg-fuchsia-50",
    buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
    perks: ["Private chauffeur", "5-star resorts", "Dedicated travel expert", "VIP airport lounge"],
  },
];

export default function TripCostCalculator() {
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);

  const tierTotals = useMemo(() => {
    return tiers.map((tier) => {
      const breakdown = baseItems.map((item) => ({
        ...item,
        total: Math.round(item.perDay * tier.multiplier * days * travelers),
      }));
      const grandTotal = breakdown.reduce((sum, i) => sum + i.total, 0);
      return { ...tier, breakdown, grandTotal };
    });
  }, [days, travelers]);

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-slate-900">Plan Your</span>{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent italic">
            Trip
          </span>
        </h1>
        <p className="text-slate-500 mt-4 text-sm sm:text-base">
          One budget, three styles — choose the one that best suits your journey.
        </p>
      </div>

      {/* Shared Controls */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-5 sm:p-6 mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-slate-600 font-medium">Duration</span>
            <span className="font-semibold text-slate-900">{days} days</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full accent-fuchsia-500"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-slate-600 font-medium">Travelers</span>
            <span className="font-semibold text-slate-900">{travelers}</span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
            className="w-full accent-fuchsia-500"
          />
        </div>
      </div>

      {/* Tier Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
        {tierTotals.map((tier) => (
          <div
            key={tier.key}
            className={`relative rounded-3xl p-6 sm:p-7 shadow-xl border transition-transform duration-300 hover:-translate-y-1 ${
              tier.cardBg
            } ${tier.highlight ? "border-transparent md:scale-105 shadow-2xl" : "border-slate-100"}`}
          >
            {tier.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white shadow-md">
                {tier.badge}
              </span>
            )}

            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${tier.accentBg} ${tier.accentText}`}>
                {tier.icon}
              </div>
              <h3 className={`text-lg font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                {tier.name}
              </h3>
            </div>
            <p className={`text-xs mb-6 ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
              {tier.tagline}
            </p>

            {/* Breakdown */}
            <div className="space-y-2.5 mb-5">
              {tier.breakdown.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`${tier.highlight ? "text-slate-300" : "text-slate-400"}`}>
                    {item.icon}
                  </div>
                  <span className={`text-sm flex-1 ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {item.label}
                  </span>
                  <span className={`text-sm font-semibold ${tier.highlight ? "text-white" : "text-slate-800"}`}>
                    ${item.total.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Perks */}
            <div className={`space-y-2 mb-6 pt-4 border-t ${tier.highlight ? "border-white/10" : "border-slate-100"}`}>
              {tier.perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 shrink-0 ${tier.accentText}`} />
                  <span className={`text-xs sm:text-sm ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* Total + CTA */}
            <div className={`pt-4 border-t ${tier.highlight ? "border-white/10" : "border-slate-100"}`}>
              <div className="flex items-end justify-between mb-4">
                <span className={`text-xs ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  Estimated Total
                </span>
                <span
                  className={`text-2xl sm:text-3xl font-bold ${
                    tier.highlight
                      ? "bg-gradient-to-r from-fuchsia-400 to-orange-300 bg-clip-text text-transparent"
                      : tier.accentText
                  }`}
                >
                  ${tier.grandTotal.toLocaleString()}
                </span>
              </div>
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${tier.buttonStyle}`}
              >
                Choose {tier.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}