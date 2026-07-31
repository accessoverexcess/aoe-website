export default function Home() {
  const network = [
    {
      label: "Community",
      description:
        "People who wear the philosophy, support the movement, and understand that meaningful access begins with how you move through the world.",
    },
    {
      label: "Keyholders",
      description:
        "Individuals recognized for trust, character, relationships, and the way they create value for the people around them.",
    },
    {
      label: "Curators",
      description:
        "Trusted connectors who open doors to thoughtful experiences, meaningful introductions, and carefully selected opportunities.",
    },
    {
      label: "Founders Club",
      description:
        "The original believers who helped shape Access Over Excess before the world fully understood what it could become.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#111111] text-[#f5f1e8]">
      <header className="absolute left-0 top-0 z-20 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 sm:px-10 lg:px-16">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.45em]"
          >
            AOE
          </a>

          <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.28em] text-[#aaa49a] sm:flex">
            <a href="#philosophy" className="transition hover:text-white">
              Philosophy
            </a>
            <a href="#network" className="transition hover:text-white">
              The Network
            </a>
            <a href="#contact" className="transition hover:text-white">
              Enter
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-screen items-end overflow-hidden px-6 pb-14 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(183,163,126,0.13),transparent_36%)]" />

        <div className="absolute right-[-7rem] top-[10%] h-[28rem] w-[28rem] rounded-full border border-[#8f8066]/20 sm:right-[-5rem] sm:h-[38rem] sm:w-[38rem] lg:h-[48rem] lg:w-[48rem]" />

        <div className="absolute right-[12%] top-[22%] hidden h-56 w-px bg-gradient-to-b from-transparent via-[#b8a680]/50 to-transparent lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-7 text-[10px] uppercase tracking-[0.45em] text-[#b8a680] sm:text-xs">
            A philosophy for how we move
          </p>

          <h1 className="max-w-6xl text-[clamp(4rem,12vw,10rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em]">
            Access
            <span className="block text-[#82796b]">Over Excess.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-8 text-[#b8b2a8] sm:text-lg">
              The world celebrates what you own. We believe the right
              introduction, the right relationship, and the right seat at the
              table will always be worth more.
            </p>

            <a
              href="#philosophy"
              className="group flex w-fit items-center gap-4 text-[10px] uppercase tracking-[0.32em] text-[#e5dfd3]"
            >
              Discover the philosophy
              <span className="text-lg transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="philosophy"
        className="border-t border-white/10 bg-[#ebe5da] px-6 py-24 text-[#171717] sm:px-10 sm:py-32 lg:px-16 lg:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#796e5d]">
              The philosophy
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Influence does not need to announce itself.
            </h2>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-10 text-base leading-8 text-[#565047] sm:grid-cols-2">
              <p>
                Access Over Excess is built on a simple belief: relationships,
                trust, character, and genuine connection can take you further
                than material excess ever will.
              </p>

              <p>
                This is not about status for the sake of status. It is about
                belonging, contribution, and creating opportunities that mean
                something after the moment has passed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 sm:px-10 sm:py-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#e8e2d8] sm:text-6xl lg:text-8xl">
            Apparel is the symbol.
            <span className="mt-3 block text-[#766f64]">
              The network is the value.
            </span>
          </p>
        </div>
      </section>

      <section
        id="network"
        className="border-y border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a99878]">
                The AOE Network
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Different roles.
                <span className="block text-[#777066]">One philosophy.</span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#aaa49a]">
                AOE is not a ladder to climb. It is an ecosystem of people who
                participate in different ways while sharing the same belief in
                trust, contribution, and meaningful access.
              </p>
            </div>
          </div>

          <div>
            {network.map((item, index) => (
              <article
                key={item.label}
                className="group grid gap-6 border-b border-white/10 py-10 transition-colors hover:bg-white/[0.025] sm:grid-cols-[5rem_0.8fr_1.2fr] sm:items-start sm:px-4"
              >
                <p className="text-xs tracking-[0.25em] text-[#756d61]">
                  0{index + 1}
                </p>

                <h3 className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                  {item.label}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-[#aaa49a] sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#d8d0c2] px-6 py-24 text-[#151515] sm:px-10 sm:py-32 lg:px-16 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#756b5c]">
            Access is earned
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              The door was never hidden.
              <span className="block text-[#777064]">
                You just had to know where to look.
              </span>
            </h2>

            <div className="lg:pb-2">
              <p className="text-base leading-8 text-[#554f47]">
                AOE is being built deliberately. Product, partnerships, and
                experiences will be introduced when the moment is right.
              </p>

              <a
                href="mailto:accessoverexcess@gmail.com"
                className="mt-8 inline-flex border-b border-black pb-2 text-[10px] uppercase tracking-[0.32em]"
              >
                Stay connected
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[10px] uppercase tracking-[0.25em] text-[#746e64] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Access Over Excess</p>
          <p>
            Access isn&apos;t about getting in. It&apos;s about belonging once
            you arrive.
          </p>
        </div>
      </footer>
    </main>
  );
}