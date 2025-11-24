import React, { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Services", href: "#services" },
  { name: "Certifications", href: "#certifications" },
  { name: "Portfolio", href: "#portfolio" }, // ✅ new item
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Empty placeholder so the menu centers */}
        <div></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-base font-medium text-slate-200">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="cursor-pointer hover:text-sky-400 transition"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate-800 text-slate-200"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-slate-200"></span>
            <span className="block h-0.5 w-6 bg-slate-200"></span>
            <span className="block h-0.5 w-6 bg-slate-200"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-slate-900/80 backdrop-blur border-t border-slate-800">
          <ul className="px-6 py-4 text-slate-200 text-base space-y-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="cursor-pointer hover:text-sky-400"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
