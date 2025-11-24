import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just fake a submit
    setStatus("Thank you for reaching out. I’ll get back to you soon!");
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 text-slate-100 border-t border-slate-800 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact</h2>
          <p className="text-slate-400 text-sm md:text-base">
            Whether it’s a collaboration, a project idea, or a simple question,
            feel free to reach out. I’m always happy to connect.
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info side */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Let’s talk
              </h3>
              <p className="text-slate-300 text-sm md:text-base">
                Share a bit about what you’re working on or what you’d like help
                with. I’ll respond as soon as I can.
              </p>
            </div>

            <div className="space-y-3 text-sm md:text-base text-slate-300">
              <div>
                <p className="font-semibold text-slate-100">Email</p>
                <a
                  href="mailto:naomiansah2023@gmail.com"
                  className="text-sky-400 hover:underline break-all"
                >
                  naomiansah2023@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-slate-100">Location</p>
                <p>Accra, Ghana (open to remote & relocation)</p>
              </div>

              <div>
                <p className="font-semibold text-slate-100">Connect</p>
                <div className="flex flex-wrap gap-3 mt-1 text-sm">
                  <a
                    href="https://www.linkedin.com/in/naomi-ansah-5399a2100/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Naomiansah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <span className="text-slate-500 text-xs"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Form side – glassmorphism */}
          <div
            className="rounded-2xl p-6 md:p-8 
                       border border-slate-500/30 
                       bg-slate-900/40 backdrop-blur-xl 
                       shadow-lg shadow-sky-500/10"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm md:text-base
                             focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm md:text-base
                             focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm md:text-base
                             focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 
                           font-semibold text-sm md:text-base transition"
              >
                Send Message
              </button>

              {status && (
                <p className="text-xs md:text-sm text-emerald-400 mt-2">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
