import React, { useEffect, useState } from "react";

const skills = [
  { name: "HTML & Semantic Markup", level: 90 },
  { name: "CSS / Tailwind / Responsive Layouts", level: 85 },
  { name: "JavaScript & React Basics", level: 75 },
  { name: "AWS Cloud Fundamentals", level: 80 },
  { name: "Textile & Surface Design", level: 95 },
];

const Resume = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="resume"
      className="bg-slate-900 text-slate-100 border-t border-slate-800 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Resume</h2>
          <p className="text-slate-400 text-sm md:text-base">
            A quick snapshot of my learning journey so far — blending textiles,
            web development, and cloud engineering into one creative toolbox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT COLUMN – EDUCATION & SKILLS */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Education
              </h3>

              <div className="border-l border-slate-700 pl-6 space-y-5">
                {/* KNUST */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-1">
                    2010 – 2014
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    BA Industrial Art (Textile Design)
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400">
                    Kwame Nkrumah University of Science and Technology (KNUST),
                    Ghana.
                  </p>
                </div>

                {/* MEST Africa */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-1">
                    Feb 2025
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    Web Development Training
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400">
                    MEST Africa — hands-on projects in modern web technologies
                    and problem-solving.
                  </p>
                </div>

                {/* AmaliTech / AWS */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-1">
                    Aug 2025
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    AWS Cloud Practitioner (Certified)
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400">
                    AmaliTech AWS re/Start Programme — core AWS services, cloud
                    architecture, security, and cost optimisation.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills with animated bars */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Professional Skills
              </h3>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs md:text-sm text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-sky-500 transition-all duration-700 ease-out"
                        style={{
                          width: animateSkills ? `${skill.level}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – EXPERIENCE */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Professional Experience
              </h3>

              <div className="border-l border-slate-700 pl-6 space-y-5">
                {/* Cloud & Front-End Track */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-1">
                    2025 - Present
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    Junior Front-End & Cloud Engineer (Pathway)
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-2">
                    Building portfolio projects with React & Tailwind while
                    applying AWS fundamentals in small cloud experiments.
                  </p>
                  <ul className="text-xs md:text-sm text-slate-400 list-disc list-inside space-y-1">
                    <li>Developed responsive UI components and layouts.</li>
                    <li>Practised deploying and securing workloads on AWS.</li>
                  </ul>
                </div>

                {/* AmaliTech */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-1">
                    2025
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    Cloud Trainee — AmaliTech AWS re/Start
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-2">
                    Intensive cloud training focused on core AWS services,
                    security, and hands-on labs.
                  </p>
                  <ul className="text-xs md:text-sm text-slate-400 list-disc list-inside space-y-1">
                    <li>
                      Worked with EC2, S3, RDS, IAM, CloudWatch, and
                      CloudFormation.
                    </li>
                    <li>
                      Built a strong foundation in the Well-Architected
                      Framework.
                    </li>
                  </ul>
                </div>

                {/* Textile / Design Experience */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-1">
                    2015 - 2023
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    Textile Designer & Creative Educator
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-2">
                    Designed textile pieces and taught garment construction with
                    a focus on creativity and confidence-building.
                  </p>
                  <ul className="text-xs md:text-sm text-slate-400 list-disc list-inside space-y-1">
                    <li>Created custom and upcycled textile designs.</li>
                    <li>
                      Taught pattern cutting, sewing, and finishing techniques.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Little note */}
            <div className="text-xs md:text-sm text-slate-400 italic">
              I'm actively building more projects to bridge my textile,
              front-end, and cloud skills — this resume will keep evolving as my
              journey does.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
