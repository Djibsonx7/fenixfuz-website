const navItems = [
  "Accueil",
  "Solutions",
  "Secteurs",
  "Réalisations",
  "À propos",
  "Ressources",
];

const stats = [
  { label: "Utilisateurs", value: "248" },
  { label: "Projets", value: "34" },
  { label: "Tâches", value: "156" },
  { label: "Alertes", value: "7" },
];

const problems = [
  "Processus manuels et dispersés",
  "Perte de temps et d’efficacité",
  "Manque de visibilité et de contrôle",
  "Coûts opérationnels élevés",
  "Risques et non-conformité",
  "Expérience client insuffisante",
];

const solutions = [
  {
    title: "ERP sur mesure",
    text: "Centralisez vos opérations, vos workflows et vos données dans une plateforme alignée sur votre façon de travailler.",
  },
  {
    title: "Applications métier",
    text: "Déployez des outils rapides, sécurisés et adaptés aux équipes terrain, aux directions et aux clients.",
  },
  {
    title: "Automatisation IA",
    text: "Réduisez les tâches répétitives grâce à des assistants, des agents et des automatisations intelligentes.",
  },
  {
    title: "Gestion documentaire",
    text: "Structurez vos documents, validations, recherches et archivages avec des processus fiables.",
  },
  {
    title: "Tableaux de bord & Reporting",
    text: "Pilotez vos indicateurs clés avec des vues claires, actualisées et exploitables par chaque équipe.",
  },
  {
    title: "Intégration & Cloud",
    text: "Connectez vos systèmes existants et modernisez votre infrastructure avec Microsoft Azure.",
  },
];

const whyItems = [
  "Développement accéléré avec l’IA",
  "Expertise Microsoft & Azure",
  "Solutions sur mesure",
  "Accompagnement de bout en bout",
  "Sécurité & conformité",
];

const realisations = [
  {
    title: "Social Insights",
    text: "Plateforme d’analyse des médias sociaux et des tendances.",
  },
  {
    title: "NextUp",
    text: "Plateforme de recrutement et de mise en relation.",
  },
  {
    title: "Solutions sur mesure",
    text: "ERP, applications et automatisations développés pour nos clients.",
  },
];

const sectors = [
  "ONG Sénégal",
  "Centre Médical Espoir",
  "École Excellence Dakar",
  "Entreprise BTP Sénégal",
  "Cabinet Conseil Dakar",
  "Association Lumière Sénégal",
];

const footerColumns = {
  Solutions: ["ERP sur mesure", "Applications métier", "Automatisation IA", "Cloud Azure"],
  Entreprise: ["À propos", "Réalisations", "Ressources", "Secteurs"],
  Contact: ["contact@fenixfuz.com", "WhatsApp", "Dakar, Sénégal"],
};

function SectionHeading({
  eyebrow,
  title,
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  inverse?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.16em] ${
            inverse ? "text-cyan-200" : "text-cyan-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="rounded-[2rem] border border-white/70 bg-white/90 p-3 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/5 backdrop-blur">
        <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-950">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-white">FenixFuz Ops</p>
              <p className="text-xs text-slate-400">Vue opérationnelle</p>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            </div>
          </div>

          <div className="grid gap-4 bg-slate-100 p-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-medium text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 bg-slate-100 px-4 pb-4 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-950">Performance</p>
                  <p className="text-xs text-slate-500">Automatisations actives</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  +28%
                </span>
              </div>
              <svg viewBox="0 0 360 150" className="h-40 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.34" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 126 C36 104 50 112 78 88 C115 56 128 85 160 69 C196 50 205 35 238 47 C277 61 288 20 324 28 C343 32 352 41 360 36 L360 150 L0 150 Z"
                  fill="url(#chartFill)"
                />
                <path
                  d="M0 126 C36 104 50 112 78 88 C115 56 128 85 160 69 C196 50 205 35 238 47 C277 61 288 20 324 28 C343 32 352 41 360 36"
                  fill="none"
                  stroke="#0891b2"
                  strokeLinecap="round"
                  strokeWidth="6"
                />
              </svg>
            </div>

            <div className="space-y-3">
              {["Validation facture", "Synchronisation CRM", "Rapport direction"].map((item, index) => (
                <div key={item} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-700">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{item}</p>
                      <p className="text-xs text-slate-500">Workflow automatisé</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 right-3 w-44 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/20 sm:-right-8">
        <div className="rounded-[1.1rem] bg-slate-950 p-3 text-white">
          <p className="text-xs text-cyan-200">Mobile Task</p>
          <p className="mt-2 text-lg font-semibold">7 urgences</p>
          <div className="mt-4 space-y-2">
            <span className="block h-2 rounded-full bg-cyan-300" />
            <span className="block h-2 w-3/4 rounded-full bg-white/40" />
            <span className="block h-2 w-1/2 rounded-full bg-white/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <div className="flex items-center justify-between gap-6">
            <a href="#" className="shrink-0" aria-label="FenixFuz accueil">
              <span className="block text-xl font-bold tracking-tight text-slate-950">FenixFuz</span>
              <span className="block text-xs font-medium text-cyan-700">Digitaliser. Automatiser. Performer.</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition hover:text-slate-950">
                  {item}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                Nous contacter
              </a>
              <a
                href="#contact"
                className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-3 lg:hidden">
            <nav className="flex gap-4 overflow-x-auto pb-2 text-sm font-medium text-slate-600">
              {navItems.map((item) => (
                <a key={item} href="#" className="shrink-0 transition hover:text-slate-950">
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 md:hidden">
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800"
              >
                Nous contacter
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_15%_20%,#dff7ff_0,transparent_34%),linear-gradient(135deg,#ffffff_0%,#eef6ff_48%,#f8fbff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm">
              Solutions de digitalisation & d&apos;automatisation
            </div>
            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Transformez vos défis opérationnels en solutions numériques performantes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Nous concevons des ERP sur mesure, des applications métier et des automatisations IA adaptés à votre
              organisation pour gagner en efficacité, en visibilité et en croissance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800"
              >
                Décrivez votre projet
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700"
              >
                Parler à un expert via WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              {["Microsoft Solutions Partner", "Microsoft Azure Partner", "Développement accéléré avec l’IA"].map(
                (item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Les problèmes que nous résolvons" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 h-10 w-10 rounded-xl bg-cyan-50 ring-1 ring-cyan-100" />
                <h3 className="text-lg font-semibold text-slate-950">{problem}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Nous structurons les flux, automatisons les tâches critiques et rendons les informations exploitables.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Offre" title="Nos solutions" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article key={solution.title} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
                <h3 className="text-xl font-semibold text-slate-950">{solution.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{solution.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Méthode" title="Pourquoi choisir FenixFuz ?" inverse />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {whyItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <span className="mb-5 block h-1.5 w-12 rounded-full bg-cyan-300" />
                <p className="font-semibold leading-6 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Impact" title="Nos réalisations" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {realisations.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">Projet</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Ils nous font confiance" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector} className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-center font-semibold text-slate-700">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Un projet en tête ? Parlez-nous de votre besoin
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Décrivez-nous votre projet en quelques clics. Nous vous recontactons rapidement avec une proposition
              adaptée.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h3 className="text-xl font-semibold">Ou discuter directement sur WhatsApp</h3>
              <p className="mt-3 text-slate-300">Obtenez une réponse immédiate sur WhatsApp</p>
              <a
                href="#"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Discuter sur WhatsApp
              </a>
              <p className="mt-5 text-sm text-slate-400">Vos informations sont 100% confidentielles.</p>
            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-white p-4 text-slate-950 shadow-2xl shadow-black/30 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Nom complet",
                "Entreprise / Organisation",
                "Email",
                "Téléphone / WhatsApp",
                "Secteur d’activité",
              ].map((label) => (
                <label key={label} className={label === "Secteur d’activité" ? "md:col-span-2" : undefined}>
                  <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
                  <input
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    type={label === "Email" ? "email" : "text"}
                  />
                </label>
              ))}
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Décrivez votre projet ou votre besoin...
                </span>
                <textarea className="min-h-32 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-950">FenixFuz</p>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Nous aidons les organisations à se digitaliser et à automatiser leurs processus grâce à des solutions
              modernes et évolutives.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-slate-950">{title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
