import type { Metadata } from "next";

const sections = [
  {
    title: "Experience",
    items: [
      {
        role: "Research Strategist",
        org: "Lorem Institute",
        period: "2023 — Present",
        summary:
          "Led qualitative studies across multiple cities, translating findings into actionable blueprints for education partners.",
      },
      {
        role: "Program Fellow",
        org: "Ipsum Innovation Lab",
        period: "2021 — 2023",
        summary:
          "Brought together multidisciplinary teams to design inclusive learning pilots. Managed end-to-end synthesis and reporting.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        role: "M.A. Development Studies",
        org: "Lorem University",
        period: "2019 — 2021",
        summary:
          "Specialized in policy analysis, community engagement, and mixed-method design.",
      },
      {
        role: "B.A. Sociology",
        org: "Dolor College",
        period: "2016 — 2019",
        summary:
          "Focused on social research, ethnography, and media narratives.",
      },
    ],
  },
];

const skills = [
  "Research design & facilitation",
  "Stakeholder storytelling",
  "Curriculum prototyping",
  "Policy translation",
  "Workshop facilitation",
];

export const metadata: Metadata = {
  title: "CV | Harnoor Kaur",
  description: "Snapshot CV for Harnoor Kaur with roles, education, and skills.",
};

export default function CvPage() {
  return (
    <div className="space-y-10 text-slate-700">
      <section className="space-y-3 border-b border-slate-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
          Curriculum Vitae
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Work across research, strategy, and storytelling.
        </h2>
        <p className="text-base text-slate-600">
          This is an abbreviated overview. Full CV with references and project
          notes is available upon request.
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="space-y-6 border-b border-slate-200 pb-8">
          <h3 className="text-2xl font-semibold text-slate-900">{section.title}</h3>
          <div className="space-y-6">
            {section.items.map((item) => (
              <article key={item.role} className="space-y-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      {item.role}
                    </h4>
                    <p className="text-sm text-emerald-600">{item.org}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {item.period}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="space-y-6 pt-4">
        <h3 className="text-2xl font-semibold text-slate-900">Capabilities</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

