"use client";

import { useState } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <main className="min-h-screen bg-[#0b0b0a] text-white">

      {/* =========================================================
          ACCESS GATE
      ========================================================== */}
      {!entered && (
        <section className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080807]">
          <div className="mx-auto max-w-[700px] px-8 text-center">

            <p className="text-[10px] tracking-[0.5em] text-[#a67c52]">
              ACCESS OVER EXCESS
            </p>

            <div className="mx-auto my-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#a67c52]/50">
              <span className="font-serif text-4xl text-[#a67c52]">
                A
              </span>
            </div>

            <h1 className="font-serif text-4xl tracking-[0.04em] md:text-6xl">
              ACCESS IS EARNED.
            </h1>

            <p className="mt-7 text-sm leading-7 text-white/50">
              Excess is what you own.
              <br />
              Access is where you can go.
            </p>

            <button
              onClick={() => setEntered(true)}
              className="mt-12 border border-[#a67c52] px-12 py-4 text-[10px] tracking-[0.4em] text-[#c69a6d] transition duration-300 hover:bg-[#a67c52] hover:text-black"
            >
              ENTER
            </button>

            <p className="mt-12 text-[8px] tracking-[0.35em] text-white/20">
              PRIVATE PREVIEW / COLLECTION 001
            </p>

          </div>
        </section>
      )}

      {/* =========================================================
          HEADER
      ========================================================== */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#e8e1da] text-black">

        <div className="grid h-[92px] grid-cols-3 items-center px-6 md:px-10">

          {/* LOGO */}
          <a href="#top">
            <div className="font-serif text-[42px] leading-none tracking-[0.08em]">
              AOE
            </div>

            <div className="mt-1 text-[9px] tracking-[0.16em]">
              ACCESS OVER EXCESS
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center justify-center gap-16 md:flex">

            {/* MENS */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("mens")}
                className="flex items-center gap-2 text-[14px] tracking-[0.08em]"
              >
                MENS <span>⌄</span>
              </button>

              {openMenu === "mens" && (
                <Dropdown>
                  <MenuLink href="#hoodies" label="Hoodies" />
                  <MenuLink href="#tees" label="Tees" />
                  <MenuLink href="#sweats" label="Sweats" />
                </Dropdown>
              )}
            </div>

            {/* KIDS */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("kids")}
                className="flex items-center gap-2 text-[14px] tracking-[0.08em]"
              >
                KIDS <span>⌄</span>
              </button>

              {openMenu === "kids" && (
                <Dropdown>
                  <MenuLink href="#" label="Hoodies" />
                  <MenuLink href="#" label="Tees" />
                  <MenuLink href="#" label="Sweats" />
                </Dropdown>
              )}
            </div>

            {/* ACCESSORIES */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("accessories")}
                className="flex items-center gap-2 text-[14px] tracking-[0.08em]"
              >
                ACCESSORIES <span>⌄</span>
              </button>

              {openMenu === "accessories" && (
                <Dropdown>
                  <MenuLink href="#hats" label="Hats" />
                  <MenuLink href="#" label="Socks" />
                </Dropdown>
              )}
            </div>

          </nav>

          {/* ICONS */}
          <div className="flex justify-end gap-6">

            <button aria-label="Account">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4.5 21c.5-4.5 3-7 7.5-7s7 2.5 7.5 7" />
              </svg>
            </button>

            <button aria-label="Bag">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <path d="M5 8h14l1 13H4L5 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
            </button>

          </div>

        </div>

        {/* MOBILE NAV */}
        <div className="flex justify-center gap-8 pb-4 text-[11px] tracking-[0.08em] md:hidden">
          <button onClick={() => toggleMenu("mens")}>MENS</button>
          <button onClick={() => toggleMenu("kids")}>KIDS</button>
          <button onClick={() => toggleMenu("accessories")}>
            ACCESSORIES
          </button>
        </div>

      </header>

      {/* =========================================================
          HERO — LIFESTYLE / WORLD
      ========================================================== */}
      <section
        id="top"
        className="relative h-[88vh] min-h-[680px] overflow-hidden"
      >

        <img
          src="/AOE MODELS/GreyAccessHoodie.png"
          alt="AOE Grey Access"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute bottom-12 left-7 max-w-[650px] md:bottom-16 md:left-14">

          <p className="mb-5 text-[9px] tracking-[0.45em] text-[#d0a474]">
            COLLECTION 001 / THE FIRST KEY
          </p>

          <h1 className="font-serif text-5xl leading-[0.9] md:text-7xl">
            ACCESS
            <br />
            OVER EXCESS
          </h1>

          <p className="mt-8 text-sm leading-7 text-white/70">
            Access isn&apos;t about getting in.
            <br />
            It&apos;s about belonging once you arrive.
          </p>

          <a
            href="#collection"
            className="mt-9 inline-block border-b border-white/60 pb-2 text-[9px] tracking-[0.38em]"
          >
            ENTER THE COLLECTION
          </a>

        </div>

        <p className="absolute bottom-12 right-12 hidden text-[9px] tracking-[0.3em] text-white/40 md:block">
          ACCESS GRANTED / 01
        </p>

      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================== */}
      <section className="flex min-h-[560px] items-center justify-center bg-[#0d0c0b] px-8 py-28">

        <div className="max-w-[900px] text-center">

          <p className="text-[9px] tracking-[0.5em] text-[#9e7651]">
            THE PHILOSOPHY
          </p>

          <h2 className="mt-10 font-serif text-4xl leading-[1.05] md:text-6xl">
            NOT EVERY DOOR
            <br />
            HAS A PRICE.
          </h2>

          <div className="mx-auto mt-10 h-[1px] w-12 bg-[#8e6847]" />

          <p className="mx-auto mt-10 max-w-[620px] text-sm leading-8 text-white/45">
            The most valuable rooms, relationships and experiences
            cannot always be bought.
            <br /><br />
            AOE represents knowing the difference between
            having more and having access.
          </p>

        </div>

      </section>

      {/* =========================================================
          COLLECTION — HOODIES
      ========================================================== */}
      <section
        id="collection"
        className="bg-[#ded7cf] px-5 py-24 text-black md:px-12"
      >

        <div className="mb-14 flex items-end justify-between">

          <div>
            <p className="text-[9px] tracking-[0.4em] text-black/45">
              001 / THE FIRST COLLECTION
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              THE FIRST KEY
            </h2>
          </div>

          <p className="hidden max-w-[320px] text-right text-xs leading-6 text-black/45 md:block">
            Quiet materials.
            Restrained branding.
            Details revealed when you get close.
          </p>

        </div>

        <div id="hoodies" className="grid gap-6 md:grid-cols-3">

          <ProductCard
            image="/Hoodies/CreamMasterKeyHoodie.png"
            number="01"
            category="HEAVYWEIGHT HOODIE"
            title="CREAM KEY"
          />

          <ProductCard
            image="/Hoodies/blackaccesshoodie.png"
            number="02"
            category="HEAVYWEIGHT HOODIE"
            title="BLACK KEY"
          />

          <ProductCard
            image="/Hoodies/OliveAccessHoodie.png"
            number="03"
            category="HEAVYWEIGHT HOODIE"
            title="OLIVE KEY"
          />

        </div>

      </section>

      {/* =========================================================
          PRIVATE ACCESS BREAK
      ========================================================== */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-black px-8">

        <img
          src="/Logos/keylogo.png"
          alt="AOE Key"
          className="absolute h-[420px] opacity-[0.06]"
        />

        <div className="relative z-10 text-center">

          <p className="text-[9px] tracking-[0.5em] text-[#9d7653]">
            PRIVATE ACCESS
          </p>

          <h2 className="mt-10 font-serif text-4xl leading-tight md:text-6xl">
            SOME DOORS
            <br />
            OPEN LATER.
          </h2>

          <p className="mt-10 text-[9px] tracking-[0.4em] text-white/30">
            ACCESS CLOSED
          </p>

        </div>

      </section>

      {/* =========================================================
          TEES
      ========================================================== */}
      <section
        id="tees"
        className="bg-[#d8d1c9] px-5 py-24 text-black md:px-12"
      >

        <p className="text-[9px] tracking-[0.42em] text-black/45">
          ESSENTIAL FORM
        </p>

        <h2 className="mb-12 mt-3 font-serif text-4xl md:text-5xl">
          TEES
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <ProductCard
            image="/Tees/CreamAccessShirt.png"
            number="04"
            category="HEAVYWEIGHT TEE"
            title="CREAM"
          />

          <ProductCard
            image="/Tees/GreyAccessShirt.png"
            number="05"
            category="HEAVYWEIGHT TEE"
            title="GREY"
          />

          <ProductCard
            image="/Tees/BlackAccessShirt.png"
            number="06"
            category="HEAVYWEIGHT TEE"
            title="BLACK"
          />

        </div>

      </section>

      {/* =========================================================
          BRAND MOMENT
      ========================================================== */}
      <section className="relative min-h-[720px] overflow-hidden">

        <img
          src="/AOE MODELS/hoodieprivatejet.png"
          alt="AOE Private Access"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute bottom-14 left-8 md:left-14">

          <p className="text-[9px] tracking-[0.45em] text-[#d0a474]">
            THE NETWORK
          </p>

          <h2 className="mt-5 max-w-[650px] font-serif text-4xl leading-[1] md:text-6xl">
            ACCESS CHANGES
            <br />
            WHAT IS POSSIBLE.
          </h2>

        </div>

      </section>

      {/* =========================================================
          SWEATS
      ========================================================== */}
      <section
        id="sweats"
        className="bg-[#11100f] px-5 py-24 md:px-12"
      >

        <p className="text-[9px] tracking-[0.42em] text-[#9d7653]">
          OFF-DUTY ACCESS
        </p>

        <h2 className="mb-12 mt-3 font-serif text-4xl md:text-5xl">
          SWEATS
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <DarkProductCard
            image="/sweats/CreamAccessSweats.png"
            title="CREAM"
          />

          <DarkProductCard
            image="/sweats/BlackAccessSweats.png"
            title="BLACK"
          />

          <DarkProductCard
            image="/sweats/OliveAccessSweats.png"
            title="OLIVE"
          />

        </div>

      </section>

      {/* =========================================================
          HATS
      ========================================================== */}
      <section
        id="hats"
        className="bg-[#e1dad2] px-5 py-24 text-black md:px-12"
      >

        <div className="mb-12 flex items-end justify-between">

          <div>
            <p className="text-[9px] tracking-[0.42em] text-black/45">
              THE DETAILS
            </p>

            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              KEY BEANIES
            </h2>
          </div>

          <p className="hidden text-[9px] tracking-[0.3em] text-black/40 md:block">
            THE KEY IS IN THE DETAILS
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-4">

          <ProductCard
            image="/Hats/CreamKeyBeanie2.png"
            number="07"
            category="RIB KNIT BEANIE"
            title="CREAM"
          />

          <ProductCard
            image="/Hats/GreyKeyBeanie2.png"
            number="08"
            category="RIB KNIT BEANIE"
            title="GREY"
          />

          <ProductCard
            image="/Hats/OliveKeyBeanie2.png"
            number="09"
            category="RIB KNIT BEANIE"
            title="OLIVE"
          />

          <ProductCard
            image="/Hats/blackKeyBeanie.png"
            number="10"
            category="RIB KNIT BEANIE"
            title="BLACK"
          />

        </div>

      </section>

      {/* =========================================================
          FINAL BRAND STATEMENT
      ========================================================== */}
      <section className="flex min-h-[700px] items-center justify-center bg-[#080807] px-8 text-center">

        <div>

          <p className="text-[9px] tracking-[0.5em] text-[#95704d]">
            ACCESS OVER EXCESS
          </p>

          <h2 className="mt-12 font-serif text-4xl leading-[1.05] md:text-6xl">
            YOU DON&apos;T NEED
            <br />
            EVERYTHING.
          </h2>

          <h3 className="mt-4 font-serif text-4xl italic text-[#a57a52] md:text-6xl">
            JUST THE RIGHT ACCESS.
          </h3>

          <div className="mx-auto mt-12 h-[1px] w-14 bg-[#7e5c40]" />

          <p className="mt-12 text-[8px] tracking-[0.4em] text-white/25">
            THE FIRST KEY / 2026
          </p>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-white/10 bg-[#080807] px-7 py-14 md:px-12">

        <div className="flex flex-col justify-between gap-12 md:flex-row">

          <div>
            <div className="font-serif text-3xl tracking-[0.08em]">
              AOE
            </div>

            <p className="mt-1 text-[8px] tracking-[0.2em] text-white/40">
              ACCESS OVER EXCESS
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-5 text-[9px] tracking-[0.2em] text-white/40">

            <a href="#hoodies">HOODIES</a>
            <a href="#tees">TEES</a>

            <a href="#sweats">SWEATS</a>
            <a href="#hats">HATS</a>

            <a href="#">THE NETWORK</a>
            <a href="#">PRIVATE ACCESS</a>

          </div>

        </div>

        <p className="mt-16 text-[8px] tracking-[0.18em] text-white/20">
          © 2026 ACCESS OVER EXCESS
        </p>

      </footer>

    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================== */

function Dropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute left-1/2 top-[48px] w-[180px] -translate-x-1/2 bg-[#eee8e2] px-8 py-7 shadow-xl">
      {children}
    </div>
  );
}


function MenuLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="mb-5 block text-[14px] tracking-[0.05em] transition hover:opacity-50 last:mb-0"
    >
      {label}
    </a>
  );
}


function ProductCard({
  image,
  number,
  title,
  category,
}: {
  image: string;
  number: string;
  title: string;
  category: string;
}) {
  return (
    <div className="group">

      <div className="relative aspect-[4/5] overflow-hidden bg-[#c9c0b7]">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
        />

        <span className="absolute left-5 top-5 text-[8px] tracking-[0.3em] text-black/45">
          {number}
        </span>

      </div>

      <div className="flex items-end justify-between pt-4">

        <div>

          <p className="text-[8px] tracking-[0.25em] text-black/40">
            {category}
          </p>

          <h3 className="mt-1 font-serif text-xl">
            {title}
          </h3>

        </div>

        <span className="text-[8px] tracking-[0.25em] text-black/40">
          VIEW
        </span>

      </div>

    </div>
  );
}


function DarkProductCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="group">

      <div className="aspect-[4/5] overflow-hidden bg-[#1c1a18]">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
        />

      </div>

      <div className="flex items-end justify-between pt-4">

        <div>

          <p className="text-[8px] tracking-[0.25em] text-white/30">
            LUXURY JOGGER
          </p>

          <h3 className="mt-1 font-serif text-xl">
            {title}
          </h3>

        </div>

        <span className="text-[8px] tracking-[0.25em] text-white/30">
          VIEW
        </span>

      </div>

    </div>
  );
}