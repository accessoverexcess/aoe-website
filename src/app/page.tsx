export default function Home() {
  const memberships = [
    {
      number: "01",
      name: "Founder’s Key",
      description:
        "Reserved for those who believed before the doors were visible.",
      status: "Founding Membership",
    },
    {
      number: "02",
      name: "Black Key",
      description:
        "For trusted members who move with intention, influence, and purpose.",
      status: "By Invitation",
    },
    {
      number: "03",
      name: "Skeleton Key",
      description:
        "Access to experiences, spaces, and relationships most never encounter.",
      status: "Earned Access",
    },
  ];

  return (
    <main className="min-h-screen bg-[#111111] text-[#F6F3EE]">
      <section className="flex min-h-screen flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <div className="text-sm font-semibold tracking-[0.35em]">AOE</div>

          <nav className="hidden gap-8 text-[10px] uppercase tracking-[0.25em] text-[#B8B1A5] sm:flex">
            <a href="#philosophy" className="transition hover:text-white">
              Philosophy
            </a>
            <a href="#membership" className="transition hover:text-white">
              Membership
            </a>
            <a href="#archive" className="transition hover:text-white">
              Archive
            </a>
          </nav>

          <div className="text-xs uppercase tracking-[0.25em] text-[#B8B1A5] sm:hidden">
            Access Over Excess
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#A9823A]">
            Membership is earned
          </p>

          <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            ACCESS
            <span className="block text-[#A9823A]">OVER EXCESS</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#D6D0C7] sm:text-xl">
            Access isn&apos;t about getting in.
            <span className="block">
              It&apos;s about belonging once you arrive.
            </span>
          </p>

          <a
            href="#membership"
            className="mt-10 border border-[#A9823A] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] transition duration-300 hover:bg-[#A9823A] hover:text-[#111111]"
          >
            Become a Keyholder
          </a>
        </div>

        <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.25em] text-[#77716A]">
          <span>Est. 2026</span>
          <span>Scroll to enter</span>
        </div>
      </section>

      <section
        id="philosophy"
        className="bg-[#F6F3EE] px-6 py-24 text-[#111111] sm:px-10 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#A9823A]">
            The Philosophy
          </p>

          <h2 className="mt-8 max-w-5xl text-4xl leading-tight tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Excess impresses strangers.
            <span className="block">Access changes lives.</span>
          </h2>

          <div className="mt-16 grid gap-10 border-t border-[#D5D0C8] pt-10 md:grid-cols-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8B847A]">
              What we believe
            </p>

            <p className="max-w-2xl text-lg leading-8 text-[#5F5A53]">
              Access Over Excess is built for people who understand that the
              greatest luxury is not what you own. It is where you are welcomed,
              who answers your call, and the doors that open before you ask.
            </p>
          </div>
        </div>
      </section>

      <section
        id="membership"
        className="px-6 py-24 sm:px-10 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 border-b border-[#34312D] pb-12 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#A9823A]">
                The Keyholder System
              </p>

              <h2 className="mt-6 text-4xl tracking-[-0.03em] sm:text-6xl">
                Membership is earned.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#999188]">
              Every key represents more than status. It represents trust,
              contribution, belonging, and access to a carefully built network.
            </p>
          </div>

          <div className="divide-y divide-[#34312D]">
            {memberships.map((membership) => (
              <article
                key={membership.name}
                className="group grid gap-6 py-10 transition md:grid-cols-[90px_1fr_1fr_auto] md:items-center"
              >
                <span className="text-xs tracking-[0.3em] text-[#625D56]">
                  {membership.number}
                </span>

                <h3 className="text-2xl transition group-hover:text-[#A9823A] sm:text-3xl">
                  {membership.name}
                </h3>

                <p className="max-w-lg text-sm leading-7 text-[#999188]">
                  {membership.description}
                </p>

                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A9823A]">
                  {membership.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="archive"
        className="bg-[#A9823A] px-6 py-24 text-[#111111] sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em]">
              The Archive
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">
              Limited garments.
              <span className="block">Permanent meaning.</span>
            </h2>
          </div>

          <button className="w-fit border border-[#111111] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] transition hover:bg-[#111111] hover:text-[#F6F3EE]">
            Coming Soon
          </button>
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-8 px-6 py-10 text-[10px] uppercase tracking-[0.25em] text-[#77716A] sm:flex-row sm:px-10 lg:px-16">
        <span>Access Over Excess © 2026</span>
        <span>Belonging over possession</span>
      </footer>
    </main>
  );
}