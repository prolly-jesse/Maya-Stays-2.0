import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254705203156?text=Hi!%20I%27d%20like%20to%20enquire%20about%20Maya%20Stays."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-24 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    style={{ background: "#25D366" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-background" />
  </a>
);

export default WhatsAppButton;
