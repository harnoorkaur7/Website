import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Harnoor Kaur",
  description: "Publications and work in progress by Harnoor Kaur.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-8 text-slate-700 sm:space-y-12">
      {/* Page heading */}
      <section className="space-y-3 border-b border-slate-200 pb-6 sm:space-y-4 sm:pb-8">
        
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Research
        </h2>
      </section>

      {/* Publications */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Publication
        </h3>
        <div className="space-y-1 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            <span className="font-semibold">
              <a
                href="https://link.springer.com/article/10.1057/s41294-024-00248-8"
                className="text-blue-500 hover:text-emerald-700"
              >
                Protests on Campus: The Political Economy of Universities and Social Movements
              </a>
            </span>{" "}
            with Noam Yuchtman. <em>Comparative Economic Studies</em>, 66(4), 621–638, 2024.
          </p>
        </div>
      </section>

      {/* Work in progress */}
      <section className="space-y-3 border-t border-slate-200 pt-6 sm:pt-8">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Work in Progress
        </h3>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>
            <span className="font-semibold">Gender gaps?</span> with Maria Kogelnik. <br /><i>Public data collection completed; expert data collection in progress</i>.
          </li>
        </ul>
      </section>
    </div>
  );
}
