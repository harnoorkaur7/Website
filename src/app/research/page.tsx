import type { Metadata } from "next";

const studies = [
  {
    title: "Inclusive Learning Framework",
    year: "2024",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at elit tincidunt, posuere elit nec, commodo diam.",
    tags: ["Education", "Field Research", "Workshops"],
  },
  {
    title: "Community Infrastructure Report",
    year: "2023",
    summary:
      "Curabitur quis consequat erat. Nam et laoreet dui. Cras venenatis vel dui nec rutrum. Etiam bibendum maximus sollicitudin.",
    tags: ["Policy", "Systems Design", "Qualitative"],
  },
  {
    title: "Digital Wellbeing Playbook",
    year: "2022",
    summary:
      "Integer vel convallis mi. Nullam ut ipsum a ex sollicitudin pellentesque sit amet id massa. Integer tempor id sapien eu finibus.",
    tags: ["Strategy", "Product", "Collaboration"],
  },
];

const methods = [
  "Primary interviews and moderated conversations",
  "Participatory workshops and lightweight prototyping",
  "Mixed-method research synthesis",
  "Story-driven reporting for stakeholders",
];

export const metadata: Metadata = {
  title: "Research | Harnoor Kaur",
  description:
    "Selected research studies, working methods, and areas of inquiry from Harnoor Kaur.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-6 text-slate-700 sm:space-y-10">
      <section className="space-y-3 border-b border-slate-200 pb-6 sm:space-y-4 sm:pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
          Research
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Curiosity meets structure.
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl ac tempus blandit. Cras posuere nibh vitae lacinia
          tristique. Vivamus convallis arcu vel lectus semper, quis aliquet mauris
          porttitor.
        </p>
      </section>

      <section className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">Selected work</h3>
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
            2022—2024
          </span>
        </div>
        <div className="space-y-4 divide-y divide-slate-200 border border-slate-200 sm:space-y-6">
          {studies.map((study) => (
            <article key={study.title} className="space-y-3 p-4 sm:space-y-4 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {study.year}
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    {study.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-300 px-2 py-1 sm:px-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{study.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 border-t border-slate-200 pt-6 sm:gap-8 sm:pt-8 md:grid-cols-2">
        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            Approach
          </p>
          <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            How I like to work
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
            vestibulum purus. Nam facilisis, mauris at tempor pulvinar, massa nisi
            interdum urna, vitae tincidunt turpis sem vel massa.
          </p>
        </div>
        <ul className="space-y-2 sm:space-y-3">
          {methods.map((method) => (
            <li key={method} className="rounded-lg border border-slate-200 p-3 sm:p-4">
              <p className="text-sm text-slate-700">{method}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

