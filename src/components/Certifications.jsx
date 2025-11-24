import React from "react";
import awscert from "../assets/images/awscert.png";
import mestcert from "../assets/images/mestcert.png";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-slate-900 text-slate-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-sky-400 mb-8">
          Certifications
        </h2>

        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
          A collection of certifications that validate my skills in cloud
          computing, web development, and modern digital technologies.
        </p>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* AWS Cloud Practitioner */}
          <div
            className="rounded-2xl p-6 
                       border border-slate-500/30 
                       bg-slate-900/40 backdrop-blur-xl 
                       shadow-lg shadow-sky-500/10 
                       hover:border-sky-400/60 hover:shadow-sky-500/30 
                       transition"
          >
            <img
              src={awscert}
              alt="AWS Cloud Practitioner Certificate"
              className="rounded-lg w-full object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              AWS Cloud Practitioner
            </h3>
            <p className="text-slate-400 mt-2">
              Credential ID: Verified via Credly —
              <a
                href="https://www.credly.com/badges/569552c3-0627-42db-9af7-861ea0ff093d/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline ml-1"
              >
                View Certificate
              </a>
            </p>
          </div>

          {/* Junior Web Developer Certificate */}
          <div
            className="rounded-2xl p-6 
                       border border-slate-500/30 
                       bg-slate-900/40 backdrop-blur-xl 
                       shadow-lg shadow-sky-500/10 
                       hover:border-sky-400/60 hover:shadow-sky-500/30 
                       transition"
          >
            <img
              src={mestcert}
              alt="Web Developer Certificate"
              className="rounded-lg w-full object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              Junior Web Developer Certificate
            </h3>
            <p className="text-slate-400 mt-2">
              Awarded by MEST Africa, Generation Ghana & Mastercard Foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
