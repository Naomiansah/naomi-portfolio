import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className=" border-t border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-200 font-medium">Naomi Ansah</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Naomiansah"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/naomi-ansah-5399a2100/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:naomiansah2023@gmail.com"
              className="hover:text-sky-400"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
