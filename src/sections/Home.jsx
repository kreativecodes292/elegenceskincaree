import React from "react";
import HeroImg from "../assets/sr2.jpg";

export default function Home() {
  return (
    <section className="min-h-screen bg-[#F6EFEA] text-[#2F2F2F] relative overflow-hidden pt-20 sm:pt-28 lg:pt-40">

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 sm:gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* TAG */}
          <span className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full bg-white border border-[#6B3F2A]/20 text-[#6B3F2A]">
            🌿 Care your skin naturally
          </span>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold leading-tight sm:leading-snug mb-4 sm:mb-6">
            Care Beyond <br /> Boundaries
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#2F2F2F]/70 max-w-md sm:max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 text-base sm:text-lg">
            Natural skincare products crafted to preserve youth, restore balance, and bring out your bold natural beauty.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <button className="bg-[#E6B65C] text-[#2F2F2F] px-6 sm:px-9 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Shop Now
            </button>

            <div className="text-sm sm:text-base leading-snug text-center sm:text-left">
              <p className="font-semibold">100% Organic</p>
              <p className="text-[#2F2F2F]/60">Let your skin glow naturally</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 relative flex justify-center lg:justify-end mt-12 lg:mt-0">

          {/* GOLD RING */}
          <div className="absolute w-44 h-44 sm:w-64 sm:h-64 lg:w-[480px] lg:h-[480px] rounded-full border-6 sm:border-16 lg:border-[26px] border-[#E6B65C] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

          {/* IMAGE */}
          <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-white">
            <img
              src={HeroImg}
              alt="Skincare Experts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BADGE */}
          <div className="absolute bottom-0 right-4 sm:right-6 lg:right-6 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full flex items-center justify-center text-[9px] sm:text-[12px] uppercase tracking-widest text-white bg-[#6B3F2A]/90 backdrop-blur z-20 text-center">
            Natural <br /> Beauty <br /> Skin
          </div>
        </div>
      </div>

      {/* BOTTOM INFO STRIP */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 mt-16 sm:mt-24 lg:mt-32 pb-10 sm:pb-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center border-t border-[#6B3F2A]/15 pt-6 sm:pt-10">
        {[
          { value: "100%", label: "Organic" },
          { value: "Clear", label: "Extra Oil" },
          { value: "Youth", label: "Preserving" },
          { value: "Natural", label: "Growth" },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#E6B65C]">{item.value}</h3>
            <p className="text-[#2F2F2F]/60 mt-1 sm:mt-2 text-xs sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
