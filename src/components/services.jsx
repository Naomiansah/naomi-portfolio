import React from "react";

const services = [
  {
    title: "Cloud Infrastructure & AWS",
    subtitle: "Secure, scalable cloud environments",
    description:
      "I design and configure AWS infrastructure with a focus on security, availability, networking, and operational reliability.",
    points: [
      "EC2, S3, VPC, IAM, and Route 53",
      "Load balancing and Auto Scaling",
      "Secure network and access configurations",
    ],
    tags: ["AWS", "Networking", "Cloud Infrastructure"],
  },
  {
    title: "Infrastructure as Code & Automation",
    subtitle: "Repeatable infrastructure deployments",
    description:
      "I use Terraform and automation practices to provision and manage cloud infrastructure consistently and efficiently.",
    points: [
      "Terraform-based AWS deployments",
      "Reusable infrastructure configurations",
      "Git-based deployment workflows",
    ],
    tags: ["Terraform", "IaC", "Automation"],
  },
  {
    title: "Cloud Support & Troubleshooting",
    subtitle: "Diagnosing infrastructure and application issues",
    description:
      "I investigate and resolve cloud, Linux, networking, permissions, DNS, and application connectivity issues.",
    points: [
      "Linux and application troubleshooting",
      "IAM permissions and access issues",
      "DNS, CloudFront, and connectivity diagnosis",
    ],
    tags: ["Linux", "Troubleshooting", "DNS"],
  },
  {
    title: "Monitoring & Reliability",
    subtitle: "Visibility into cloud workloads",
    description:
      "I configure monitoring and alerting to improve visibility into infrastructure health, performance, and operational events.",
    points: [
      "Amazon CloudWatch metrics and alarms",
      "SNS notifications and operational alerts",
      "Infrastructure health and performance monitoring",
    ],
    tags: ["CloudWatch", "Monitoring", "SNS"],
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
            How I can add value through cloud infrastructure, automation,
            troubleshooting, monitoring, and operational support.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-slate-800 bg-slate-900/60 rounded-2xl p-6 md:p-7 hover:border-sky-500/70 hover:bg-slate-900/80 transition-all duration-200"
            >
              {/* Service title */}
              <div className="mb-3">
                <h3 className="text-lg md:text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-400 mt-1">
                  {service.subtitle}
                </p>
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
