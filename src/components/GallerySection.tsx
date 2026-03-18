import { useState, useEffect } from "react"; // Added useState and useEffect
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Optional: for icons

// ... your image imports remain the same ...
import buildingExterior from "@/assets/building-exterior.jpg";
import buildingBalcony from "@/assets/building-balcony.jpg";
import kitchenLiving from "@/assets/kitchen-living.jpg";
import livingRoom from "@/assets/living-room.jpg";
import tvLounge from "@/assets/tv-lounge.jpg";
import parkingArea from "@/assets/parking-area.jpg";
import entranceGate from "@/assets/entrance-gate.jpg";
import neonSign from "@/assets/neon-sign.jpg";
import spiralStaircase from "@/assets/spiral-staircase.jpg";
import rooftopLounge from "@/assets/rooftop-lounge.jpg";
import bathroom from "@/assets/bathroom.jpg";
import kitchenette from "@/assets/kitchenette.jpg";
import bedroom from "@/assets/bedroom.jpg";
import courtyard from "@/assets/courtyard.jpg";
import balconyView from "@/assets/balcony-view.jpg";

const images = [
  { src: buildingExterior, alt: "Maya Stays building exterior", tall: true },
  { src: courtyard, alt: "Landscaped courtyard with palm trees" },
  { src: bedroom, alt: "Cozy king-size bed with mosquito net", tall: true },
  { src: kitchenLiving, alt: "Suite kitchen and living area" },
  { src: rooftopLounge, alt: "Rooftop lounge with garden views" },
  {
    src: spiralStaircase,
    alt: "Elegant spiral staircase entrance",
    tall: true,
  },
  { src: bathroom, alt: "Modern marble-finish bathroom" },
  { src: kitchenette, alt: "Fully equipped kitchenette" },
  { src: balconyView, alt: "Balcony overlooking the property" },
  { src: parkingArea, alt: "Secure parking area" },
  { src: tvLounge, alt: "Smart TV lounge" },
  { src: buildingBalcony, alt: "Building balcony view", tall: true },
  { src: livingRoom, alt: "Living room with marble tables" },
  { src: entranceGate, alt: "Maya Stays entrance gate" },
  { src: neonSign, alt: "Maya Stays illuminated sign", tall: true },
];

const GallerySection = () => {
  const ref = useScrollReveal();
  const [selectedImg, setSelectedImg] = useState(null);

  // Prevent scrolling when an image is open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImg]);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div ref={ref} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A glimpse into the Maya Stays experience. Tap any image to expand.
          </p>
        </div>

        {/* Responsive grid optimized for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImg(img)}
              className={`
                relative rounded-xl overflow-hidden glass-card group cursor-zoom-in transition-all duration-300
                ${
                  img.tall
                    ? "row-span-2 h-[320px] md:h-full"
                    : "h-[150px] md:h-[220px]"
                }
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 active:scale-95 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle overlay for mobile to make it feel interactive */}
              <div className="absolute inset-0 bg-black/5 md:hidden pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Video Tours */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "https://res.cloudinary.com/dcpqn8ecp/video/upload/f_auto,q_auto/v1773726107/tour-1_q2htez.mp4",
            "https://res.cloudinary.com/dcpqn8ecp/video/upload/f_auto,q_auto/v1773740317/tour-2_q27r8k.mp4",
          ].map((src, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden aspect-video border border-white/10"
            >
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster={src.replace(".mp4", ".jpg")}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX OVERLAY --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[110]"
            onClick={() => setSelectedImg(null)}
          >
            <X size={32} />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedImg.src}
              alt={selectedImg.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <p className="text-white/80 mt-4 font-light tracking-wide text-center px-4">
              {selectedImg.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
