import React, { useState, useEffect } from "react";
import heropic from "../assets/images/heropic.jpg";

// ✅ put roles OUTSIDE the component
const roles = ["Front-End Developer", "Cloud Engineer", "Textile Designer"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []); // ✅ no more ESLint complaint

  const currentRole = roles[index];

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-slate-100 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE – TEXT */}
        <div className="space-y-6">
          <p className="text-sky-400 font-semibold text-lg">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Naomi <span className="text-sky-400">Ansah</span>
          </h1>

          {/* 🔄 Animated rotating profession */}
          <p className="text-xl md:text-2xl text-slate-300">
            I am a{" "}
            <span className="text-sky-400 font-semibold">{currentRole}</span>
            <span className="ml-1 animate-pulse">|</span>
          </p>

          <p className="text-slate-300 max-w-xl">
            I'm a passionate problem-solver who blends technology and creativity
            to build meaningful digital experiences. Whether I'm designing
            intuitive web solutions, architecting cloud systems, or creating
            nature-inspired textile pieces, my goal is to deliver work that is
            functional, beautiful, and impactful.
          </p>

          <div className="flex flex-wrap gap-4">
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

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500/10 font-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE + FLOATING TAGS */}
        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden bg-slate-800/60 p-4">
            <img
              src={heropic}
              alt="Profile"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>

          {/* floating badges */}
          <div className="absolute -right-4 top-10 bg-slate-900/80 backdrop-blur rounded-2xl px-4 py-3 shadow-lg">
            <span className="text-sm font-semibold flex items-center gap-2">
              🎨 <span className="text-slate-100">Design</span>
            </span>
          </div>

          <div className="absolute -left-6 bottom-24 bg-slate-900/80 backdrop-blur rounded-2xl px-4 py-3 shadow-lg">
            <span className="text-sm font-semibold flex items-center gap-2">
              💻 <span className="text-slate-100">Code</span>
            </span>
          </div>

          <div className="absolute -right-6 bottom-6 bg-slate-900/80 backdrop-blur rounded-2xl px-4 py-3 shadow-lg">
            <span className="text-sm font-semibold flex items-center gap-2">
              💡 <span className="text-slate-100">Ideas</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
