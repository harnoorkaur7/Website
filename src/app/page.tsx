import Image from "next/image";
import portrait from "../images/har.jpeg";

export default function Home() {
  return (
    <div className="space-y-8 text-slate-700 sm:space-y-14">
      <section className="grid gap-6 border-b border-slate-200 pb-8 sm:gap-10 sm:pb-12 lg:grid-cols-[1.1fr,_0.9fr]">
        <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
            <p className="flex-1 text-base leading-relaxed text-slate-600 sm:text-lg">
              Hi! I&apos;m a predoctoral fellow at the Economic Growth Center, Yale University. I am excited about research in development, environment economics, and political economy! My work looks at political movements, climate agreements, social norms, gender gaps, and other manifestations of contemporary inequality. You can reach me at{" "}
              <a
                href="mailto:harnoor.kaur@yale.edu"
                className="text-blue-500 hover:text-emerald-700 underline break-all"
              >
                harnoor.kaur@yale.edu
              </a>
              .
            </p>
            <div className="relative mx-auto h-64 w-64 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:h-80 sm:w-80 sm:mx-0">
              <Image
                src={portrait}
                alt="Portrait of Harnoor Kaur"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
