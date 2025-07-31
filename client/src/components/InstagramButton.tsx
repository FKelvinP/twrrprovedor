import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramButton = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 animate-pulse">
      <Button
        variant="instagram"
        size="lg"
        className="rounded-full w-16 h-16 shadow-glow hover:shadow-glow hover:scale-110"
        onClick={() => window.open("https://instagram.com/techweb_oficial", "_blank")}
      >
        <Instagram className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default InstagramButton;