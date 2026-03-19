import React, { useState, useEffect } from "react";
import heropic from "../assets/images/heropic.jpg";

const roles = ["Cloud Engineer", "Front-End Developer", "Textile Designer"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
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
        <div className="space-y-6">
          <p className="text-sky-400 font-semibold text-lg">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl leading-tight">
            <span className="font-['Monoton'] tracking-wider">Naomi</span>{" "}
            <span className="text-sky-400 font-bold">Ansah</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300">
            I am a{" "}
            <span className="text-sky-400 font-semibold">{displayedText}</span>
            <span className="ml-1 animate-pulse">|</span>
          </p>

          <p className="text-slate-300 max-w-xl">
            I build responsive, user-focused digital experiences with React,
            modern CSS frameworks, and cloud technologies.
          </p>

          <p className="text-slate-300 max-w-xl">
            My work combines front-end development, AWS deployment, and
            problem-solving to create scalable, production-ready applications.
          </p>

          <p className="text-slate-300 max-w-xl">
            I am passionate about clean interfaces, performance optimization,
            and building solutions that are both functional and impactful.
          </p>

          <ul className="text-slate-300 max-w-xl space-y-1">
            <li>✔ Built responsive web applications with React and Vite</li>
            <li>✔ Deployed projects using AWS S3 and CloudFront</li>
            <li>✔ Experience collaborating in Agile development teams</li>
          </ul>

          <div className="flex flex-wrap gap-4">
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

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500/10 font-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden bg-slate-800/60 p-4">
            <img
              src={heropic}
              alt="Naomi Ansah portrait"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
