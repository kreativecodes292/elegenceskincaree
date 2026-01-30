import React from "react";
import HeroImg from "../assets/sr2.jpg";

export default function Home() {
  return (
    <section className="min-h-screen bg-[#F6EFEA] text-[#2F2F2F] pt-28 sm:pt-36">

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-14">

        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 text-sm rounded-full bg-white border border-[#6B3F2A]/20 text-[#6B3F2A]">
            🌿 Care your skin naturally
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold leading-tight mb-6">
            Care Beyond <br /> Boundaries
          </h1>

          <p className="text-[#2F2F2F]/70 max-w-lg mb-8 text-base sm:text-lg">
            Natural skincare products crafted to preserve youth, restore
            balance and bring out your bold natural beauty.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-[#E6B65C] text-[#2F2F2F] px-8 py-4 rounded-full font-semibold shadow-md hover:scale-105 transition">
              Shop Now
            </button>

            <div>
              <p className="font-semibold">100% Organic</p>
              <p className="text-sm text-[#2F2F2F]/60">
                Let your skin glow naturally
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex justify-center">

          {/* IMAGE + RING WRAPPER */}
          <div className="relative flex items-center justify-center">

            {/* SINGLE YELLOW RING */}
            <div className="
              absolute
              w-[260px] h-[260px]
              sm:w-[320px] sm:h-[320px]
              lg:w-[420px] lg:h-[420px]
              rounded-full
              border-[16px] sm:border-[20px] lg:border-[24px]
              border-[#E6B65C]
            " />

            {/* IMAGE */}
            <div className="
              relative
              w-[220px] h-[220px]
              sm:w-[280px] sm:h-[280px]
              lg:w-[360px] lg:h-[360px]
              rounded-full
              overflow-hidden
              shadow-xl
              bg-white
              z-10
            ">
              <img
                src={HeroImg}
                alt="Skincare Experts"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BADGE */}
            <div className="
              absolute
              bottom-2 right-2
              w-24 h-24 sm:w-28 sm:h-28
              rounded-full
              flex items-center justify-center
              text-[10px] sm:text-xs
              uppercase tracking-widest
              text-white
              bg-[#6B3F2A]/90
              text-center
              z-20
            ">
              Natural <br /> Beauty <br /> Skin
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM INFO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 mt-20 pb-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-t border-[#6B3F2A]/15 pt-8">
        {[
          { value: "100%", label: "Organic" },
          { value: "Clear", label: "Extra Oil" },
          { value: "Youth", label: "Preserving" },
          { value: "Natural", label: "Growth" },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#E6B65C]">
              {item.value}
            </h3>
            <p className="text-sm text-[#2F2F2F]/60 mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
