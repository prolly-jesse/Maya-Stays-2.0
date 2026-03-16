import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Suites", href: "#suites" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 font-serif text-xl sm:text-2xl font-bold gold-text group">
            <img
              src={logo}
              alt="Maya Stays logo"
              className="h-8 sm:h-10 w-auto brand-glow-dual group-hover:scale-110 transition-transform duration-500"
            />
            Maya Stays
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#booking"
              className="gold-gradient text-primary-foreground font-semibold text-sm px-6 py-2.5 rounded-full hover:opacity-90 hover:shadow-[0_0_20px_rgba(114,201,189,0.3)] transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-foreground transition-transform duration-300"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden glass-strong border-t border-border overflow-hidden transition-all duration-400 ease-out ${
            open ? "max-h-60 opacity-100 px-4 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      </header>

      {/* Mobile sticky Book Now */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3 glass-strong border-t border-border safe-bottom">
        <a
          href="#booking"
          className="block w-full text-center gold-gradient text-primary-foreground font-semibold py-3.5 rounded-full text-base active:scale-[0.98] transition-transform duration-200"
        >
          Book Now — From KSh 3,500
        </a>
      </div>
    </>
  );
};

export default Navbar;
