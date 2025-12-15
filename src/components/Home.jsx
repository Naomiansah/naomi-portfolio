import React, { useState, useEffect } from "react";
import heropic from "../assets/images/heropic.jpg";

// ✅ roles stay outside the component
const roles = ["Front-End Developer", "Cloud Engineer", "Textile Designer"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0); // which role
  const [charIndex, setCharIndex] = useState(0); // which letter
  const [isDeleting, setIsDeleting] = useState(false); // typing or deleting

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let typingSpeed = isDeleting ? 50 : 120; // speed for typing vs deleting

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        // ⌨️ typing forward
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // ⏸ small pause at full word
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && charIndex > 0) {
        // ⌫ deleting backward
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        // move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const currentRole = roles[roleIndex];
  const displayedText = currentRole.slice(0, charIndex);

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-slate-100 flex items-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE – TEXT */}
        <div className="space-y-6">
          <p className="text-sky-400 font-semibold text-lg">Hello, I'm</p>

          {/* <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Naomi <span className="text-sky-400">Ansah</span>
          </h1> */}
          <h1 className="text-4xl md:text-6xl leading-tight">
            <span className="font-['Monoton'] tracking-wider">Naomi</span>{" "}
            <span className="text-sky-400 font-bold">Ansah</span>
          </h1>

          {/* 🔡 Typewriter-style animated profession */}
          <p className="text-xl md:text-2xl text-slate-300">
            I am a{" "}
            <span className="text-sky-400 font-semibold">{displayedText}</span>
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

        {/* RIGHT SIDE – IMAGE */}
        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden bg-slate-800/60 p-4">
            <img
              src={heropic}
              alt="Profile"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
