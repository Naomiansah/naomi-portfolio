import React from "react";
import heropic from "../assets/images/heropic.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-slate-100 border-t border-slate-800 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About</h2>
          <p className="text-slate-400 text-sm md:text-base">
            I build and troubleshoot secure, reliable cloud infrastructure with
            AWS, Terraform, Linux, and automation.
          </p>
        </div>

        {/* Top grid: intro + image */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          {/* Left text */}
          <div className="space-y-5">
            <p className="text-xs tracking-[0.25em] uppercase text-sky-400">
              Hello there
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Hi, I'm Naomi, a Cloud Engineer with a background in software
              development.
            </h3>

            <p className="text-slate-300 text-sm md:text-base">
              I design, deploy, and troubleshoot AWS cloud infrastructure with a
              focus on secure networking, reliability, monitoring, and
              automation. I work with AWS, Terraform, Linux, and Infrastructure
              as Code to build practical cloud solutions.
            </p>

            <p className="text-slate-300 text-sm md:text-base">
              My hands-on work includes configuring VPC networks, compute and
              storage resources, IAM permissions, monitoring and alerts, as well
              as troubleshooting DNS, connectivity, application availability,
              and cloud configuration issues.
            </p>

            <p className="text-slate-300 text-sm md:text-base">
              I also bring frontend development experience with React and
              JavaScript, giving me an understanding of both the applications
              users interact with and the infrastructure that supports them.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() =>
                  document
                    .querySelector("#portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 font-semibold"
              >
                View Projects
              </button>

              <button className="px-6 py-2.5 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500/10 text-sm font-semibold">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right image card */}
          <div className="flex justify-center">
            <div className="bg-slate-800/60 rounded-[2.5rem] p-4 w-full max-w-sm">
              <img
                src={heropic}
                alt="Naomi Ansah"
                className="rounded-[2rem] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid gap-4 md:grid-cols-4 mb-10">
          <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
            <p className="text-xs text-sky-400 mb-1">Focus</p>
            <h4 className="text-sm font-semibold mb-1">Cloud Infrastructure</h4>
            <p className="text-xs text-slate-400">
              Building secure, scalable, and reliable AWS environments.
            </p>
          </div>

          <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
            <p className="text-xs text-sky-400 mb-1">Background</p>
            <h4 className="text-sm font-semibold mb-1">
              Infrastructure as Code
            </h4>
            <p className="text-xs text-slate-400">
              Provisioning repeatable AWS infrastructure using Terraform.
            </p>
          </div>

          <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
            <p className="text-xs text-sky-400 mb-1">Strength</p>
            <h4 className="text-sm font-semibold mb-1">Troubleshooting</h4>
            <p className="text-xs text-slate-400">
              Diagnosing Linux, networking, IAM, DNS, and application issues.
            </p>
          </div>

          <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
            <p className="text-xs text-sky-400 mb-1">Currently</p>
            <h4 className="text-sm font-semibold mb-1">
              Monitoring & Operations
            </h4>
            <p className="text-xs text-slate-400">
              Improving visibility and reliability with CloudWatch, alerts, and
              operational practices.
            </p>
          </div>
        </div>

        {/* mini timeline + quote */}
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="grid gap-3 text-xs md:text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">2014</span>
              <span>BA in Industrial Art, KNUST</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">2018–2023</span>
              <span>Built and taught in textile and fashion projects</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">Feb 2025</span>
              <span>Completed Web Development Training at MEST Africa</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">Aug 2025</span>
              <span>
                Earned AWS Certified Cloud Practitioner (AmaliTech Training
                Program)
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm italic text-slate-300">
              “Building meaningful digital experiences through thoughtful code,
              clear design, and curiosity.”
            </p>

            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300">
                Front-End
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300">
                AWS Cloud
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300">
                Design Thinking
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300">
                Inclusive Experiences
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
