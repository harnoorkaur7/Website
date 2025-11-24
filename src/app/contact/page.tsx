import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Harnoor Kaur",
  description:
    "Get in touch with Harnoor Kaur for collaborations, speaking, and research inquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 text-slate-700">
      <section className="space-y-3 border-b border-slate-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
          Contact
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Let&apos;s start a conversation.
        </h2>
        <p className="text-base text-slate-600">
          Whether it&apos;s research collaborations, guest lectures, or informal
          chats about emerging ideas—I&apos;d love to hear from you. Use the
          form below or reach out directly.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
              Direct
            </p>
            <p className="text-lg font-semibold text-slate-900">
              harnoor@example.com
            </p>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Mauris non erat purus.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
              Availability
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Research collaborations · Open</li>
              <li>Guest speaking · Limited</li>
              <li>Mentorship chats · Monthly</li>
            </ul>
          </div>
        </div>

        <form className="space-y-4 text-sm text-slate-900">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Send placeholder message
          </button>
          <p className="text-xs text-slate-500">
            This form is a static placeholder. Connect directly via email for a
            prompt response.
          </p>
        </form>
      </section>
    </div>
  );
}

