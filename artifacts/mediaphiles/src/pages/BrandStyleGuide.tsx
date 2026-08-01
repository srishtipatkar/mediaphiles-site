const colors = [
  {
    name: "Primary",
    role: "Charcoal Black",
    hex: "#111111",
    ratio: "55%",
    usage: "Primary backgrounds, hero sections, editorial framing, premium contrast.",
    text: "text-[#FAFAFA]",
  },
  {
    name: "Secondary",
    role: "Warm Ivory",
    hex: "#F8F6F2",
    ratio: "25%",
    usage: "Light sections, proposal pages, forms, whitespace, hospitality warmth.",
    text: "text-[#111111]",
  },
  {
    name: "Accent",
    role: "Burnt Orange",
    hex: "#D96C2F",
    ratio: "10%",
    usage: "CTAs, active states, data highlights, key campaign moments.",
    text: "text-[#111111]",
  },
  {
    name: "Secondary Accent",
    role: "Deep Forest Green",
    hex: "#234336",
    ratio: "7%",
    usage: "Trust signals, hospitality depth, premium secondary panels.",
    text: "text-[#FAFAFA]",
  },
  {
    name: "Neutral",
    role: "Stone Beige",
    hex: "#D6C3A5",
    ratio: "3%",
    usage: "Rules, dividers, captions, quiet tactile accents.",
    text: "text-[#111111]",
  },
];

const hierarchy = [
  {
    label: "H1",
    font: "Placard Next Bold",
    use: "Hero headlines, campaign titles, website hero sections.",
    sample: "Boutique Hotels Deserve Better Demand.",
    className: "font-['Placard_Next','Arial_Narrow',Impact,sans-serif] text-5xl md:text-8xl font-black leading-[0.92] uppercase",
  },
  {
    label: "H2",
    font: "TT Firs Neue DemiBold",
    use: "Editorial headings, proposal sections, growth narratives.",
    sample: "A hospitality growth system built for direct bookings.",
    className: "font-['TT_Firs_Neue',Inter,Arial,sans-serif] text-3xl md:text-5xl font-semibold leading-tight",
  },
  {
    label: "H3",
    font: "TT Firs Neue Medium",
    use: "Section titles, cards, modules, service names.",
    sample: "Story-led content. Measurable commercial outcomes.",
    className: "font-['TT_Firs_Neue',Inter,Arial,sans-serif] text-xl md:text-2xl font-medium leading-snug",
  },
  {
    label: "Body",
    font: "TT Firs Neue Regular",
    use: "Body copy, UI, forms, documents, website content.",
    sample: "MediaPhiles helps boutique hotels transform attention into high-intent inquiries through cinematic storytelling, brand positioning, and conversion-focused marketing systems.",
    className: "font-['TT_Firs_Neue',Inter,Arial,sans-serif] text-base md:text-lg font-normal leading-8",
  },
  {
    label: "Caption",
    font: "TT Firs Neue Light",
    use: "Captions, metadata, social proof, case-study notes.",
    sample: "Usage: quiet, precise, editorial. Never decorative.",
    className: "font-['TT_Firs_Neue',Inter,Arial,sans-serif] text-xs font-light uppercase tracking-[0.18em]",
  },
];

const applications = [
  {
    title: "Dark Editorial",
    bg: "bg-[#111111]",
    text: "text-[#FAFAFA]",
    accent: "bg-[#D96C2F]",
    eyebrow: "text-[#D6C3A5]",
    body: "text-[#FAFAFA]/70",
  },
  {
    title: "Light Hospitality",
    bg: "bg-[#F8F6F2]",
    text: "text-[#111111]",
    accent: "bg-[#234336]",
    eyebrow: "text-[#D96C2F]",
    body: "text-[#111111]/65",
  },
];

export default function BrandStyleGuide() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#FAFAFA] font-['TT_Firs_Neue',Inter,Arial,sans-serif]">
      <section className="px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-20 flex items-center justify-between border-b border-[#FAFAFA]/10 pb-6 text-xs uppercase tracking-[0.18em] text-[#D6C3A5]">
            <a href="/" className="text-[#FAFAFA] transition-colors hover:text-[#D96C2F]">
              MediaPhiles
            </a>
            <span>Brand Style Guide</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-7 text-xs uppercase tracking-[0.22em] text-[#D96C2F]">
                Hospitality Growth Agency
              </p>
              <h1 className="font-['Placard_Next','Arial_Narrow',Impact,sans-serif] text-6xl font-black uppercase leading-[0.9] md:text-8xl lg:text-9xl">
                MediaPhiles
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#FAFAFA]/72 md:text-xl">
              A cinematic, editorial identity for boutique hotel growth - premium enough for luxury
              hospitality, direct enough for business owners, and warm enough for storytelling.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F2] px-6 py-24 text-[#111111] md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D96C2F]">Color System</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              High contrast, restrained warmth, and a hospitality-first sense of depth.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {colors.map((color) => (
              <article key={color.hex} className="border border-[#111111]/10 bg-white">
                <div
                  className={`flex aspect-[4/3] flex-col justify-between p-5 ${color.text}`}
                  style={{ backgroundColor: color.hex }}
                >
                  <span className="text-xs uppercase tracking-[0.18em] opacity-75">{color.name}</span>
                  <span className="text-2xl font-semibold">{color.ratio}</span>
                </div>
                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-lg font-medium">{color.role}</h3>
                    <p className="text-sm text-[#111111]/55">{color.hex}</p>
                  </div>
                  <p className="text-sm leading-6 text-[#111111]/65">{color.usage}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D96C2F]">Typography</p>
            <div>
              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                Cinematic headlines. Swiss-clean systems. Editorial restraint.
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-[#FAFAFA]/65">
                Placard Next is reserved for large, high-impact headline moments. TT Firs Neue carries
                everything else: body copy, UI, proposals, captions, forms, and documents.
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#FAFAFA]/10 border-y border-[#FAFAFA]/10">
            {hierarchy.map((item) => (
              <article key={item.label} className="grid gap-8 py-10 md:grid-cols-[0.35fr_1fr]">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#D6C3A5]">{item.label}</p>
                  <h3 className="text-lg font-medium">{item.font}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-[#FAFAFA]/55">{item.use}</p>
                </div>
                <p className={item.className}>{item.sample}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F2] px-6 py-24 text-[#111111] md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D96C2F]">Messaging Examples</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              The voice should feel strategic, cinematic, and commercially grounded.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="bg-[#111111] p-8 text-[#FAFAFA] md:p-12">
              <p className="mb-12 text-xs uppercase tracking-[0.22em] text-[#D96C2F]">Hero Combination</p>
              <h3 className="font-['Placard_Next','Arial_Narrow',Impact,sans-serif] text-5xl font-black uppercase leading-[0.95] md:text-7xl">
                Turn Stays Into Stories. Stories Into Bookings.
              </h3>
              <p className="mt-8 max-w-lg text-lg leading-8 text-[#FAFAFA]/70">
                Brand, content, and lead systems for boutique hotels that want more direct demand and a
                sharper digital presence.
              </p>
            </article>

            <article className="border border-[#D6C3A5] bg-white p-8 md:p-12">
              <p className="mb-12 text-xs uppercase tracking-[0.22em] text-[#234336]">Editorial Combination</p>
              <h3 className="text-4xl font-semibold leading-tight md:text-5xl">
                Luxury hospitality marketing with proof behind the mood.
              </h3>
              <p className="mt-8 max-w-lg text-lg leading-8 text-[#111111]/65">
                Every reel, campaign, landing page, and automation is designed to move travelers from
                attention to inquiry with clarity and intent.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D96C2F]">CTA System</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Buttons should feel decisive, quiet, and worth clicking.
            </h2>
          </div>

          <div className="flex flex-col gap-5 border border-[#FAFAFA]/10 p-6 md:flex-row md:items-center md:p-10">
            <button type="button" className="inline-flex min-h-14 items-center justify-center bg-[#D96C2F] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#111111] transition-colors hover:bg-[#F8F6F2]">
              Book Discovery Call
            </button>
            <button type="button" className="inline-flex min-h-14 items-center justify-center border border-[#D6C3A5] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#FAFAFA] transition-colors hover:border-[#D96C2F] hover:text-[#D96C2F]">
              View Case Studies
            </button>
            <button type="button" className="inline-flex min-h-14 items-center justify-center bg-[#234336] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#FAFAFA] transition-colors hover:bg-[#D6C3A5] hover:text-[#111111]">
              Audit My Hotel
            </button>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        {applications.map((theme) => (
          <article key={theme.title} className={`${theme.bg} ${theme.text} px-6 py-24 md:px-10`}>
            <div className="mx-auto max-w-xl">
              <p className={`mb-10 text-xs uppercase tracking-[0.22em] ${theme.eyebrow}`}>{theme.title}</p>
              <div className={`mb-10 h-1 w-24 ${theme.accent}`} />
              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                Built for properties where atmosphere is the advantage.
              </h2>
              <p className={`mt-8 text-lg leading-8 ${theme.body}`}>
                A premium system for hotel owners who need storytelling, trust, and measurable growth to
                feel like one coherent brand experience.
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
