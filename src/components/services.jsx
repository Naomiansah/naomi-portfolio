import React from "react";

const services = [
  {
    icon: "💻",
    title: "Front-End Development",
    subtitle: "Clean, responsive interfaces",
    description:
      "I design and build user interfaces with React and Tailwind, focusing on clarity, accessibility, and smooth user journeys.",
    points: [
      "Landing pages & personal portfolios",
      "Responsive layouts for mobile & desktop",
      "Reusable components and UI systems",
    ],
    tags: ["React", "Tailwind", "UI/UX"],
  },
  {
    icon: "☁️",
    title: "Cloud & AWS Support",
    subtitle: "Lightweight cloud solutions",
    description:
      "I help structure simple, secure cloud setups using AWS fundamentals learned through the AWS re/Start programme.",
    points: [
      "Mapping ideas to AWS services (EC2, S3, RDS, etc.)",
      "Basic cost-aware architectures",
      "Documentation & visual diagrams for non-technical teams",
    ],
    tags: ["AWS", "Architecture Basics", "Diagrams"],
  },
  {
    icon: "🧵",
    title: "Textile & Surface Design",
    subtitle: "Tactile, story-driven visuals",
    description:
      "From fabric concepts to digital mockups, I create textile patterns and compositions inspired by everyday stories and culture.",
    points: [
      "Pattern and motif development",
      "Color stories & moodboards",
      "Tactile concepts for inclusive experiences",
    ],
    tags: ["Textiles", "Color", "Storytelling"],
  },
  {
    icon: "🎓",
    title: "Learning Support & Workshops",
    subtitle: "Gentle, confidence-building guidance",
    description:
      "I enjoy breaking complex topics into calm, practical sessions for beginners in tech or creative skills.",
    points: [
      "Intro sessions on web & cloud fundamentals",
      "Structured practice tasks & feedback",
      "Encouraging, learner-friendly teaching style",
    ],
    tags: ["Teaching", "Beginners", "Workshops"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-900 text-slate-100 border-t border-slate-800 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Services</h2>
          <p className="text-slate-400 text-sm md:text-base">
            Here’s how I can add value right now — combining my front-end,
            cloud, and textile background to support thoughtful digital and
            creative projects.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-slate-800 bg-slate-900/60 rounded-2xl p-6 md:p-7 hover:border-sky-500/70 hover:bg-slate-900/80 transition-all duration-200"
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4 mb-3">
                <div className="text-3xl md:text-4xl">{service.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-300 mb-3">
                {service.description}
              </p>

              {/* Bullet list */}
              <ul className="text-xs md:text-sm text-slate-300 list-disc list-inside space-y-1 mb-4">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-slate-700 text-[0.7rem] md:text-xs text-slate-300 group-hover:border-sky-500/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
