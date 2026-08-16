import React from "react";

const Resume = () => {
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
            Cloud Engineer focused on AWS infrastructure, networking,
            automation, monitoring, and troubleshooting.
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
                    BA Industrial Art
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

            {/* <div>
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

                    <div className="w-full max-w-[230px] mx-auto md:max-w-none">
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-sky-500 transition-all duration-700 ease-out"
                          style={{
                            width: animateSkills ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
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
                    2026 - Present
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    Cloud Engineer — Sichera Technologies
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-2">
                    Designing and implementing secure, scalable AWS
                    infrastructure with a focus on availability, monitoring,
                    networking, and operational reliability.
                  </p>
                  <ul className="text-xs md:text-sm text-slate-400 list-disc list-inside space-y-1">
                    <li>
                      Provision and manage AWS infrastructure using Terraform.
                    </li>
                    <li>
                      Configure and troubleshoot Linux, networking, IAM, DNS and
                      cloud workloads.
                    </li>
                  </ul>
                </div>

                {/* silver rock technologies*/}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-1">
                    APR 2025 – MAY 2025
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    Frontend Developer Intern — Silver Rock Technology Services
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-2">
                    Contributed to an AI-powered educational management platform
                    using React.
                  </p>
                  <ul className="text-xs md:text-sm text-slate-400 list-disc list-inside space-y-1">
                    <li>Developed responsive, reusable frontend components.</li>
                    <li>Tested and debugged application functionality.</li>
                  </ul>
                </div>

                {/* teaching experience */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-1">
                    SEP 2020 – AUG 2021
                  </p>
                  <h4 className="text-sm md:text-base font-semibold">
                    Instructional Facilitator — Perez University College
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-2">
                    Facilitated practical instruction in a structured academic
                    environment, supporting students through technical processes
                    and problem-solving.
                  </p>
                  <ul className="text-xs md:text-sm text-slate-400 list-disc list-inside space-y-1">
                    <li>
                      Delivered structured technical instruction and practical
                      demonstrations.
                    </li>
                    <li>
                      Supported students through problems and provided clear
                      guidance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
