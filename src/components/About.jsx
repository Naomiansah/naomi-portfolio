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
            I blend technology, design, and storytelling to create experiences
            that feel simple on the surface but are thoughtfully engineered
            underneath.
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
              Hi, I'm Naomi, a calm-minded creative who designs tactile,
              cloud-powered digital journeys.
            </h3>

            <p className="text-slate-300 text-sm md:text-base">
              I'm a curious builder who moves comfortably between{" "}
              <span className="text-sky-400 font-medium">
                front-end development
              </span>
              ,{" "}
              <span className="text-sky-400 font-medium">
                cloud engineering
              </span>{" "}
              and{" "}
              <span className="text-sky-400 font-medium">textile design</span>.
              Whether I'm coding an interface, designing inclusive tactile
              experiences, or architecting on AWS, I care about clarity,
              accessibility, and quiet confidence in every detail.
            </p>

            <p className="text-slate-400 text-sm md:text-base">
              I love turning messy ideas into structured, beautiful outcomes;
              especially for education, sustainability, and women-in-tech
              spaces.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() =>
                  document
                    .querySelector("#portfolio")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 font-semibold"
              >
                View My Work
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
            <h4 className="text-sm font-semibold mb-1">Front-End & Cloud</h4>
            <p className="text-xs text-slate-400">
              Building responsive UIs, wiring them to scalable AWS backends.
            </p>
          </div>

          <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
            <p className="text-xs text-sky-400 mb-1">Background</p>
            <h4 className="text-sm font-semibold mb-1">
              Textile & Product Design
            </h4>
            <p className="text-xs text-slate-400">
              Strong eye for pattern, texture, color and human-centered detail.
            </p>
          </div>

          <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
            <p className="text-xs text-sky-400 mb-1">Strength</p>
            <h4 className="text-sm font-semibold mb-1">Problem-Solving</h4>
            <p className="text-xs text-slate-400">
              Calm under pressure, I love debugging both code and concepts.
            </p>
          </div>

          <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
            <p className="text-xs text-sky-400 mb-1">Currently</p>
            <h4 className="text-sm font-semibold mb-1">
              Growing in Cloud & React
            </h4>
            <p className="text-xs text-slate-400">
              AWS Certified Cloud Practitioner, building real-world projects.
            </p>
          </div>
        </div>

        {/* mini timeline + quote */}
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="grid gap-3 text-xs md:text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">2014</span>
              <span>BA in Industrial Art (Textiles), KNUST</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">2018-2023</span>
              <span>Built and taught in textile & fashion projects</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">Feb 2025</span>
              <span>Learned Web Development at MEST Africa</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">Aug 2025</span>
              <span>
                AWS Cloud Practitioner - Certified (AmaliTech Training Program)
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm italic text-slate-300">
              “Building calm, meaningful experiences through thoughtful code,
              tactile design, and a little bit of stubborn curiosity.”
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300">
                Front-End
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300">
                AWS Cloud
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300">
                Textile Design
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
