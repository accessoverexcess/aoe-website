"use client";

import { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <main className="min-h-screen bg-black text-black">
      {/* HEADER */}
      <header className="relative z-50 bg-[#e9e3dc]">
        <div className="grid h-[92px] grid-cols-3 items-center px-6 md:px-10">
          {/* LOGO */}
          <div className="flex flex-col items-start">
            <div className="font-serif text-[42px] leading-none tracking-[0.08em]">
              AOE
            </div>

            <div className="mt-1 text-[10px] tracking-[0.12em]">
              ACCESS OVER EXCESS
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center justify-center gap-16 md:flex">
            {/* MENS */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("mens")}
                className="flex items-center gap-2 text-[16px] font-medium tracking-[0.05em]"
              >
                MENS
                <span>⌄</span>
              </button>

              {openMenu === "mens" && (
                <div className="absolute left-1/2 top-[48px] w-[160px] -translate-x-1/2 rounded-b-md bg-[#eee8e2] px-7 py-6 shadow-lg">
                  <MenuItem label="Hoodies" />
                  <MenuItem label="Tees" />
                  <MenuItem label="Sweats" />
                </div>
              )}
            </div>

            {/* KIDS */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("kids")}
                className="flex items-center gap-2 text-[16px] font-medium tracking-[0.05em]"
              >
                KIDS
                <span>⌄</span>
              </button>

              {openMenu === "kids" && (
                <div className="absolute left-1/2 top-[48px] w-[160px] -translate-x-1/2 rounded-b-md bg-[#eee8e2] px-7 py-6 shadow-lg">
                  <MenuItem label="Hoodies" />
                  <MenuItem label="Tees" />
                  <MenuItem label="Sweats" />
                </div>
              )}
            </div>

            {/* ACCESSORIES */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("accessories")}
                className="flex items-center gap-2 text-[16px] font-medium tracking-[0.05em]"
              >
                ACCESSORIES
                <span>⌄</span>
              </button>

              {openMenu === "accessories" && (
                <div className="absolute left-1/2 top-[48px] w-[150px] -translate-x-1/2 rounded-b-md bg-[#eee8e2] px-7 py-6 shadow-lg">
                  <MenuItem label="Hats" />
                  <MenuItem label="Socks" />
                </div>
              )}
            </div>
          </nav>

          {/* ACCOUNT + BAG */}
          <div className="flex items-center justify-end gap-6">
            <button
              aria-label="Account"
              className="flex h-8 w-8 items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4.5 21c.5-4.5 3-7 7.5-7s7 2.5 7.5 7" />
              </svg>
            </button>

            <button
              aria-label="Shopping Bag"
              className="flex h-8 w-8 items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M5 8h14l1 13H4L5 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV */}
      <div className="relative z-40 flex justify-center gap-7 bg-[#e9e3dc] pb-4 md:hidden">
        <button
          onClick={() => toggleMenu("mens")}
          className="text-[12px] font-medium tracking-[0.08em]"
        >
          MENS
        </button>

        <button
          onClick={() => toggleMenu("kids")}
          className="text-[12px] font-medium tracking-[0.08em]"
        >
          KIDS
        </button>

        <button
          onClick={() => toggleMenu("accessories")}
          className="text-[12px] font-medium tracking-[0.08em]"
        >
          ACCESSORIES
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {openMenu && (
        <div className="relative z-40 bg-[#eee8e2] px-8 py-5 md:hidden">
          {openMenu === "mens" && (
            <>
              <MenuItem label="Hoodies" />
              <MenuItem label="Tees" />
              <MenuItem label="Sweats" />
            </>
          )}

          {openMenu === "kids" && (
            <>
              <MenuItem label="Hoodies" />
              <MenuItem label="Tees" />
              <MenuItem label="Sweats" />
            </>
          )}

          {openMenu === "accessories" && (
            <>
              <MenuItem label="Hats" />
              <MenuItem label="Socks" />
            </>
          )}
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[calc(100vh-92px)] min-h-[650px] overflow-hidden">
        <img
          src="/GreyAccessHoodie.PNG"
          alt="AOE Access Over Excess"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute bottom-10 left-7 text-white md:bottom-14 md:left-12">
          <p className="mb-3 text-[11px] tracking-[0.35em]">
            THE FIRST COLLECTION
          </p>

          <h1 className="max-w-[470px] font-serif text-4xl leading-[0.95] md:text-6xl">
            ACCESS OVER EXCESS
          </h1>

          <p className="mt-5 text-sm tracking-[0.08em]">
            Quiet luxury. Earned access.
          </p>

          <button className="mt-7 border border-white px-9 py-3 text-[11px] tracking-[0.3em] transition hover:bg-white hover:text-black">
            EXPLORE
          </button>
        </div>
      </section>
    </main>
  );
}

function MenuItem({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="mb-5 block text-[15px] tracking-[0.01em] transition hover:opacity-50 last:mb-0"
    >
      {label}
    </a>
  );
}