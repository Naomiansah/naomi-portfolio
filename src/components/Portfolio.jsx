import React from "react";

import portfolioarchitecture from "../assets/images/portfolioarchitecture.png";
import dmsmigration from "../assets/images/dmsmigration.png";
import vpcendpoint from "../assets/images/vpcendpoint.png";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-slate-900 text-slate-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-sky-400 mb-8">
          Portfolio
        </h2>

        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
          Hands-on cloud projects demonstrating AWS infrastructure, automation,
          networking, security, and operational reliability.
        </p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* PROJECT 1 — CLOUD PORTFOLIO INFRASTRUCTURE */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60 flex items-center justify-center">
                <img
                  src={portfolioarchitecture}
                  alt="AWS Cloud Portfolio Architecture"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                AWS Cloud Portfolio Infrastructure
              </h3>

              <div className="flex flex-wrap gap-2 text-xs">
                {["AWS", "S3", "CloudFront", "Route 53", "CI/CD"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 text-sm">
                Designed and deployed a secure static website architecture using
                Amazon S3 and CloudFront, with DNS routing and automated
                deployments through a Git-based CI/CD workflow.
              </p>

              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="https://dev.to/naomi_ansah_d792faf7a1276/how-i-secured-my-static-website-at-the-edge-using-amazon-cloudfront-12ho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-600"
                >
                  Case Study
                </a>

                <a
                  href="https://github.com/Naomiansah/s3-cloudfront-terraform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-sky-500 text-sky-400 rounded-lg text-sm hover:bg-sky-500/10"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 2 — DATABASE MIGRATION */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60 flex items-center justify-center">
                <img
                  src={dmsmigration}
                  alt="AWS Database Migration Architecture"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                AWS Database Migration with Terraform
              </h3>

              <div className="flex flex-wrap gap-2 text-xs">
                {["Terraform", "AWS DMS", "RDS", "PostgreSQL", "CDC"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <p className="text-slate-400 text-sm">
                Designed and implemented an AWS database migration architecture
                using Terraform, migrating MariaDB to Amazon RDS for PostgreSQL
                with AWS DMS and ongoing replication using Change Data Capture.
              </p>

              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="https://github.com/Naomiansah/terraform-aws-dms-mariadb-postgresql-migration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-600"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 3 — PRIVATE EC2 TO S3 */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-sky-500/30 transition">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60 flex items-center justify-center">
                <img
                  src={vpcendpoint}
                  alt="Private EC2 to S3 VPC Endpoint Architecture"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <h3 className="text-xl font-semibold text-sky-300">
                Secure Private EC2-to-S3 Architecture
              </h3>

              <div className="flex flex-wrap gap-2 text-xs">
                {["VPC", "EC2", "S3", "VPC Endpoint", "IAM"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 text-sm">
                Designed a secure AWS architecture that allows an EC2 instance
                in a private subnet to access Amazon S3 through a Gateway VPC
                Endpoint without exposing traffic to the public internet or
                requiring a NAT Gateway.
              </p>

              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="https://dev.to/naomi_ansah_d792faf7a1276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-600"
                >
                  Case Study
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
