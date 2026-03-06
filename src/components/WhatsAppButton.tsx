import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/912212345678?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
    style={{ backgroundColor: "#25D366" }}
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircle size={28} className="text-card" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
