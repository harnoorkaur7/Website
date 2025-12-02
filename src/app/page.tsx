import type { NextPage } from "next";
import Image from "next/image";
import portrait from "../images/har.jpeg";

const Home: NextPage = () => {
  return (
    <div className="space-y-8 text-slate-700 sm:space-y-14">
      <section className="grid gap-6 border-b border-slate-200 pb-8 sm:gap-10 sm:pb-12 lg:grid-cols-[1.1fr,_0.9fr]">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
            <p
              className="flex-1 text-base leading-relaxed text-slate-600 sm:text-lg"
              style={{ textAlign: "justify" }}
            >
              Hi! I&apos;m a <a
                href="https://egc.yale.edu/people/harnoor-kaur"
                className="text-blue-500 hover:text-emerald-700"
              >
                predoctoral fellow
              </a> at the <a
                href="https://egc.yale.edu/"
                className="text-blue-500 hover:text-emerald-700"
              >
                Economic Growth Center, Yale University
              </a>. I am excited about research in development,
              environment economics, and political economy! My work looks at
              political movements, climate agreements, social norms, gender
              gaps, and other manifestations of contemporary inequality. <br /><br /> 

              I hold an MSc in Economics from the <a
                href="https://www.lse.ac.uk/economics"
                className="text-blue-500 hover:text-emerald-700"
              >
                London School of Economics and Political Science (LSE)
              </a> and a B.A. (Honors) in Economics from <a
                href="https://www.hinducollege.ac.in/index.aspx"
                className="text-blue-500 hover:text-emerald-700"
              >
                 Hindu College, University of Delhi
              </a>. Prior to this, I worked on energy and environmental research at the <a
                href="https://www.lse.ac.uk/economics"
                className="text-blue-500 hover:text-emerald-700"
              >
                Energy Policy Institute at the University of Chicago Trust (EPIC India)
              </a>. 
              <br /><br />
              You can reach me at{" "}
              <a
                href="mailto:harnoor.kaur@yale.edu"
                className="text-blue-500 hover:text-emerald-700"
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
};

export default Home;
