import React from "react";

import cloud1 from "../assets/images/cloud1.jpg";
import cloud2 from "../assets/images/cloud2.jpg";

import web1 from "../assets/images/web1.jpeg";
import web2 from "../assets/images/web2.jpeg";

import textile1 from "../assets/images/textile1.jpg";
import textile2 from "../assets/images/textile2.jpeg";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-slate-900 text-slate-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-sky-400 mb-8">
          Portfolio
        </h2>

        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
          A showcase of my creative work across cloud engineering, web
          development, and textile design.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* ---- CLOUD PROJECTS (FIRST) ---- */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60">
                <div className="h-full w-full overflow-y-scroll">
                  <img
                    src={cloud1}
                    className="w-full mb-3 rounded-lg"
                    alt="Cloud Project 1"
                  />
                  <img
                    src={cloud2}
                    className="w-full rounded-lg"
                    alt="Cloud Project 2"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                Cloud Engineering
              </h3>
              <p className="text-slate-400">
                AWS-based deployments, EC2 servers, networking, automation, and
                hands-on cloud engineering projects from my re/Start journey.
              </p>
            </div>
          </div>

          {/* ---- WEB DEVELOPMENT (SECOND) ---- */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60">
                <div className="h-full w-full overflow-y-scroll">
                  <img
                    src={web1}
                    className="w-full mb-3 rounded-lg"
                    alt="Web Dev Project 1"
                  />
                  <img
                    src={web2}
                    className="w-full rounded-lg"
                    alt="Web Dev Project 2"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                Web Development
              </h3>
              <p className="text-slate-400">
                Creative UI layouts, React projects, responsive web apps, and
                real-world interfaces built with clean code and modern tools.
              </p>
            </div>
          </div>

          {/* ---- TEXTILE DESIGN (THIRD) ---- */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60">
                <div className="h-full w-full overflow-y-scroll">
                  <img
                    src={textile1}
                    className="w-full mb-3 rounded-lg"
                    alt="Textile Design 1"
                  />
                  <img
                    src={textile2}
                    className="w-full rounded-lg"
                    alt="Textile Design 2"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                Textile Design
              </h3>
              <p className="text-slate-400">
                Custom fabric patterns, uniforms, and digital textile work
                blending creativity with design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
