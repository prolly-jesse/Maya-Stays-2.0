import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "James O.", text: "Absolutely loved our stay. The suites are spotless and the security is top-notch. Will definitely return!", location: "Nairobi" },
  { name: "Amina K.", text: "Best BnB on the Kisumu-Busia corridor. Fast Wi-Fi, great parking, and the manager was incredibly helpful.", location: "Kampala" },
  { name: "David M.", text: "Perfect for business trips. Clean, quiet, and so close to the border. Highly recommended!", location: "Busia" },
  { name: "Sarah W.", text: "The Deluxe 2-Bedroom is amazing for families. Felt like a 5-star hotel at BnB prices.", location: "Kisumu" },
  { name: "Peter N.", text: "Maya Stays is my go-to whenever I'm transiting through. Consistent quality every single time.", location: "Eldoret" },
];

const Testimonials = () => {
  const ref = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="section-padding relative">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div ref={ref} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">Guest Reviews</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            What our guests are saying.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 min-w-[280px] sm:min-w-[320px] snap-start flex-shrink-0"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-bold text-xs shadow-lg">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll arrows */}
          <button
            onClick={() => scroll(-1)}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 glass-card rounded-full items-center justify-center hover:border-primary/30 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 glass-card rounded-full items-center justify-center hover:border-primary/30 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
