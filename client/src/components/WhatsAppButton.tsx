import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50 animate-pulse">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-16 h-16 shadow-glow hover:shadow-glow hover:scale-110"
        onClick={() => window.open("https://wa.me/559591691553", "_blank")}
      >
        <FaWhatsapp className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;