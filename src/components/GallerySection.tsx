import { useState, useEffect, useMemo } from "react"; // Added useState and useEffect
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CLOUD_NAME = "dcpqn8ecp";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// Replace the 'id' with the actual filename you uploaded to Cloudinary
const images = [
  {
    id: "building-exterior",
    alt: "Maya Stays building exterior",
    category: "Exterior",
  },
  {
    id: "courtyard",
    alt: "Landscaped courtyard with palm trees",
    category: "Exterior",
    featured: true,
  },
  {
    id: "bedroom",
    alt: "Cozy king-size bed with mosquito net",
    category: "Rooms",
    featured: true,
  },
  {
    id: "kitchen-living",
    alt: "Suite kitchen and living area",
    category: "Common Areas",
    featured: true,
  },
  {
    id: "spiral-staircase2",
    alt: "Elegant spiral staircase entrance",
    category: "Exterior",
    featured: true,
  },
  {
    id: "rooftop-lounge",
    alt: "Rooftop lounge with garden views",
    category: "Common Areas",
    featured: true,
  },
  {
    id: "spiral-staircase3",
    alt: "Elegant spiral staircase entrance",
    category: "Exterior",
  },
  {
    id: "spiral-staircase",
    alt: "Elegant spiral staircase entrance",
    category: "Exterior",
    featured: true,
  },
  {
    id: "bathroom",
    alt: "Modern marble-finish bathroom",
    category: "Common Areas",
    featured: true,
  },
  {
    id: "kitchenette2",
    alt: "Fully equipped kitchenette",
    category: "Common Areas",
  },
  {
    id: "balcony-view",
    alt: "Balcony overlooking the property",
    category: "Exterior",
  },
  { id: "parking-area", alt: "Secure parking area", category: "Amenities" },
  {
    id: "tv-lounge",
    alt: "Smart TV lounge",
    category: "Common Areas",
    featured: true,
  },
  {
    id: "building-balcony",
    alt: "Building balcony view",
    category: "Exterior",
    featured: true,
  },
  {
    id: "living-room",
    alt: "Living room with marble tables",
    category: "Common Areas",
    featured: true,
  },
  {
    id: "entrance-gate",
    alt: "Maya Stays entrance gate",
    category: "Exterior",
  },
  {
    id: "neon-sign",
    alt: "Maya Stays illuminated sign",
    category: "Exterior",
    featured: true,
  },
  {
    id: "living-room3",
    alt: "living-room",
    category: "Amenities",
    featured: true,
  },
  {
    id: "bedroom2",
    alt: "Cozy king-size bed",
    category: "Rooms",
  },
  {
    id: "bedroom3",
    alt: "Cozy king-size bed",
    category: "Rooms",
  },

  {
    id: "balcony-view2",
    alt: "Building balcony view",
    category: "Exterior",
    featured: true,
  },
  {
    id: "living-room5",
    alt: "living-room",
    category: "Amenities",
  },
  {
    id: "outview",
    alt: "Building balcony view",
    category: "Exterior",
    
  },
  {
    id: "balcony-view3",
    alt: "Building balcony view",
    category: "Exterior",
    featured: true,
  },
  {
    id: "spiral-staircase4",
    alt: "Elegant view",
    category: "Exterior",
  },
  {
    id: "outview2",
    alt: "Building balcony view",
    category: "Exterior",
  },
  {
    id: "living-room2",
    alt: "living-room",
    category: "Amenities",
  },
  {
    id: "bathroom2",
    alt: "bathroom",
    category: "Amenities",
  },
];

const categories = ["All", "Rooms", "Common Areas", "Exterior", "Amenities"];

const GallerySection = () => {
  const ref = useScrollReveal();
  const [selectedImg, setSelectedImg] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("All");

  // Filter logic
  // This logic creates the "Preview" effect for the All tab
  const filteredImages = useMemo(() => {
    if (activeTab === "All") {
      // Shows only featured images in the "All" view (approx 8-12 images)
      return images.filter((img) => img.featured);
    }
    // Shows EVERY image belonging to that specific category
    return images.filter((img) => img.category === activeTab);
  }, [activeTab]);
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImg]);

  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden bg-background"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative px-4">
        <div ref={ref} className="text-center mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">Gallery</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                  activeTab === tab
                    ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                    : "border-white/10 bg-white/5 hover:bg-white/10 text-muted-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImg(img)}
              className="relative break-inside-avoid rounded-2xl overflow-hidden glass-card group cursor-zoom-in transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 border border-white/5"
            >
              <img
                src={`${BASE_URL}/f_auto,q_auto,w_600,c_scale/${img.id}`}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-light tracking-wide truncate">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Tours - Reduced visual weight to prioritize images */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-xl mb-6 opacity-80 italic">
            Virtual Tours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "https://res.cloudinary.com/dcpqn8ecp/video/upload/f_auto,q_auto/v1774000458/WhatsApp_Video_2026-03-20_at_11.07.40_kx9ctl.mp4",
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Overlay - Remains the same as your functional original */}
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
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`https://res.cloudinary.com/dcpqn8ecp/image/upload/f_auto,q_auto,w_1600/${selectedImg.id}`}
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
