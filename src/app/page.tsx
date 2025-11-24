import Image from "next/image";
import Link from "next/link";
import portrait from "../images/har.jpeg";

const highlights = [
  {
    label: "Current Focus",
    detail:
      "Exploring inclusive research practices that bridge policy, education, and community engagement.",
  },
  {
    label: "Methodologies",
    detail: "Mixed-method research · Qualitative interviewing · Data synthesis",
  },
  {
    label: "Passion Projects",
    detail:
      "Story-driven learning experiences, mentorship for young scholars, and research-backed strategy.",
  },
];

const recentWork = [
  {
    title: "Community Narratives Study",
    year: "2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui ac urna efficitur lacinia.",
  },
  {
    title: "Policy Brief on Emerging Tech",
    year: "2023",
    description:
      "Praesent rhoncus, ipsum eget imperdiet dignissim, arcu arcu lobortis urna, vitae facilisis.",
  },
  {
    title: "Learning Experience Prototype",
    year: "2022",
    description:
      "Integer at tempus est. Aliquam erat volutpat. In hac habitasse platea dictumst.",
  },
];

const quickFacts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Vestibulum ante ipsum primis in faucibus orci luctus.",
  "Proin nec velit et augue aliquet pulvinar eget at lacus.",
];

export default function Home() {
  return (
    <div className="space-y-14 text-slate-700">
      <section className="grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[1.1fr,_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
            Welcome
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <h2 className="flex-1 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Research that connects people, systems, and stories.
            </h2>
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <Image
                src={portrait}
                alt="Portrait of Harnoor Kaur"
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <p className="text-lg text-slate-600">
            I&apos;m Harnoor Kaur—an interdisciplinary researcher blending
            curiosity with structured inquiry. This space captures my evolving
            work, current collaborations, and notes from the field.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/research"
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Browse research
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
            >
              Say hello
            </Link>
          </div>
        </div>
        <div className="divide-y divide-slate-200 border border-slate-200">
          {highlights.map((item) => (
            <div key={item.label} className="space-y-2 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                {item.label}
              </p>
              <p className="text-base text-slate-800">{item.detail}</p>
            </div>
          ))}
          <p className="p-6 text-sm text-slate-500">
            This portfolio is an evolving snapshot. Expect new field notes,
            writing samples, and prototypes soon.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
              Highlights
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Recent explorations
            </h3>
          </div>
          <Link
            href="/cv"
            className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
          >
            View CV →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {recentWork.map((work) => (
            <article key={work.title} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                {work.year}
              </p>
              <h4 className="text-lg font-semibold text-slate-900">
                {work.title}
              </h4>
              <p className="text-sm text-slate-600">{work.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-slate-200 pt-10 md:grid-cols-[0.8fr,_1.2fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            Quick notes
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">Working style</h3>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            sollicitudin, nulla vitae pretium posuere, dui nulla iaculis nunc,
            ultrices fermentum justo turpis ut purus.
          </p>
        </div>
        <ul className="space-y-3">
          {quickFacts.map((fact) => (
            <li key={fact} className="rounded-lg border border-slate-200 p-4">
              <p className="text-sm text-slate-700">{fact}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
