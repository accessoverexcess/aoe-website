const products = [
  {
    name: "Heavyweight Hoodie",
    image: "/hoodie.PNG",
  },
  {
    name: "Cream Hoodie",
    image: "/CreamHoodie.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f4f2ed] text-black">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-black/85 text-white backdrop-blur-sm">
        <div className="grid h-16 grid-cols-3 items-center px-5 sm:px-8">
          <nav className="hidden gap-6 text-[10px] uppercase tracking-[0.24em] md:flex">
            <a href="#collection">Collection</a>
            <a href="#story">Story</a>
          </nav>

          <a
            href="#top"
            className="col-start-2 text-center text-sm font-semibold uppercase tracking-[0.45em]"
          >
            AOE
          </a>

          <nav className="flex justify-end gap-5 text-[10px] uppercase tracking-[0.24em]">
            <a href="#network" className="hidden sm:block">
              Network
            </a>
            <a href="#contact">Enter</a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-screen items-end overflow-hidden bg-black"
      >
        <img
          src="/hero.PNG"
          alt="Access Over Excess campaign"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />

        <div className="relative z-10 w-full px-6 pb-14 text-center text-white sm:pb-20">
          <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-white/75">
            The First Collection
          </p>

          <h1 className="text-5xl font-medium uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
            Access Over Excess
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Quiet luxury. Earned access.
          </p>

          <a
            href="#collection"
            className="mt-9 inline-flex min-w-48 justify-center border border-white bg-black/80 px-8 py-4 text-[10px] uppercase tracking-[0.35em] transition hover:bg-white hover:text-black"
          >
            Explore
          </a>
        </div>
      </section>

      <section id="collection" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-end justify-between border-b border-black/20 pb-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-black/45">
                Spring / Summer 2026
              </p>

              <h2 className="mt-3 text-3xl font-medium uppercase tracking-[-0.03em] sm:text-5xl">
                Featured Collection
              </h2>
            </div>

            <p className="hidden text-[10px] uppercase tracking-[0.3em] text-black/45 sm:block">
              Limited Release
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-[#e6e2da]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs uppercase tracking-[0.18em]">
                    {product.name}
                  </p>

                  <span>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="story"
        className="bg-[#171512] px-4 py-4 text-white sm:px-6"
      >
        <div className="relative mx-auto min-h-[78vh] max-w-[1600px] overflow-hidden">
          <img
            src="/image0.png"
            alt="AOE editorial"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex min-h-[78vh] items-center justify-center px-6 py-20 text-center">
            <div className="max-w-5xl">
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/60">
                The Philosophy
              </p>

              <h2 className="mt-8 text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
                The door was never hidden.
                <span className="block text-white/50">
                  You just had to know where to look.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section
        id="network"
        className="bg-[#111111] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.42em] text-white/40">
            The AOE Network
          </p>

          <h2 className="mt-8 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
            Different roles.
            <span className="block text-white/40">One philosophy.</span>
          </h2>

          <div className="mt-14 border-t border-white/15">
            {["Community", "Keyholders", "Curators", "Founders Club"].map(
              (role, index) => (
                <div
                  key={role}
                  className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[5rem_1fr]"
                >
                  <p className="text-[10px] tracking-[0.3em] text-white/30">
                    0{index + 1}
                  </p>

                  <h3 className="text-2xl font-medium">{role}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-6 py-24 text-center sm:px-10 sm:py-36"
      >
        <p className="text-[10px] uppercase tracking-[0.5em] text-black/40">
          Access is earned
        </p>

        <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          The collection is coming.
        </h2>

        <a
          href="mailto:accessoverexcess@gmail.com"
          className="mt-10 inline-flex min-w-52 justify-center bg-black px-8 py-4 text-[10px] uppercase tracking-[0.35em] text-white"
        >
          Stay connected
        </a>
      </section>

      <footer className="border-t border-black/15 px-6 py-8 text-[9px] uppercase tracking-[0.28em] text-black/45 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:justify-between">
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