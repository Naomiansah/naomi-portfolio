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
          A showcase of my work across cloud engineering, web development, and
          creative design — combining technical skill with user-centered
          thinking.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* ---- CLOUD PROJECT ---- */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60">
                <div className="h-full w-full overflow-y-scroll">
                  <img src={cloud1} className="w-full mb-3 rounded-lg" />
                  <img src={cloud2} className="w-full rounded-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                Cloud Engineering
              </h3>

              <p className="text-slate-400 text-sm">
                Designed and deployed cloud-based infrastructure using AWS
                services including EC2, S3, and networking. Implemented
                real-world DevOps practices with scalable and reliable setups.
              </p>

              <div className="flex gap-3 mt-3">
                <a
                  href="#"
                  className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-600"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="px-4 py-2 border border-sky-500 text-sky-400 rounded-lg text-sm hover:bg-sky-500/10"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* ---- WEB DEVELOPMENT ---- */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60">
                <div className="h-full w-full overflow-y-scroll">
                  <img src={web1} className="w-full mb-3 rounded-lg" />
                  <img src={web2} className="w-full rounded-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                Web Development
              </h3>

              <p className="text-slate-400 text-sm">
                Collaborative e-library web application built with React,
                featuring user-friendly navigation and dynamic content. Deployed
                using Vercel with CI/CD integration from GitHub.
              </p>

              <div className="flex gap-3 mt-3">
                <a
                  href="https://e-library-lime-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-600"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/E-Library-Group-5/E-Library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-sky-500 text-sky-400 rounded-lg text-sm hover:bg-sky-500/10"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* ---- TEXTILE DESIGN ---- */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60">
                <div className="h-full w-full overflow-y-scroll">
                  <img src={textile1} className="w-full mb-3 rounded-lg" />
                  <img src={textile2} className="w-full rounded-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                Textile Design
              </h3>

              <p className="text-slate-400 text-sm">
                Designed custom fabric patterns and textile solutions, combining
                creativity, cultural storytelling, and strong visual aesthetics.
              </p>

              <div className="flex gap-3 mt-3">
                <a
                  href="#"
                  className="px-4 py-2 border border-sky-500 text-sky-400 rounded-lg text-sm hover:bg-sky-500/10"
                >
                  View Designs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
