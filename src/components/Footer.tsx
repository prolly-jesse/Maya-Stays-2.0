import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="relative border-t border-border/50 py-12 px-4 sm:px-6">
    {/* Top gradient line */}
    <div className="absolute top-0 left-0 right-0 section-divider" />

    <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <img
            src={logo}
            alt="Maya Stays logo"
            className="h-8 w-auto brand-glow-dual"
          />
          <h3 className="font-serif text-xl font-bold gold-text">Maya Stays</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Comfort, Security, & Peace of Mind. Premium BnB accommodation on the
          Kisumu-Busia Highway.
        </p>
        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://www.facebook.com/MayaStays"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Maya Stays on Facebook"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@maya.stays2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Maya Stays on TikTok"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <div className="space-y-2 text-sm">
          {["Suites", "Gallery", "Location", "Book Now"].map((l) => (
            <a
              key={l}
              href={`#${l === "Book Now" ? "booking" : l.toLowerCase()}`}
              className="block text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <a
            href="tel:+254705203156"
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
          >
            <Phone size={14} /> 0705 203 156
          </a>
          <a
            href="mailto:info@mayastays.com"
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
          >
            <Mail size={14} /> staysmaya@gmail.com
          </a>
          <p className="flex items-start gap-2">
            <MapPin size={14} className="mt-0.5 shrink-0" /> 100M behind Dreams
            Hotel, Kisumu-Busia Highway
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground space-y-1">
      <p>© {new Date().getFullYear()} Maya Stays. All rights reserved.</p>
      <p>Built with ❤️ and modern web tech © 2026 Jay</p>
    </div>
  </footer>
);

export default Footer;
