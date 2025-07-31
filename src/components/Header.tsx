import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTechWeb from "@/assets/logo-techweb-main.png";
import logoTW from "@/assets/logo-tw.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tech-dark/95 backdrop-blur-md border-b border-tech-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
          {/* Logo TW - Esquerda */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoTW} 
              alt="TW Logo" 
              style={{ height: 'var(--logo-size)', width: 'var(--logo-size)' }}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-400">
                TechWeb
              </span>
              <span className="text-sm text-tech-blue -mt-1">
                Internet Fibra Óptica
              </span>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-tech-purple transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("planos")}
              className="text-foreground hover:text-tech-purple transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-tech-purple transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-tech-purple transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Logo Principal - Direita */}
          <div className="hidden md:flex items-center space-x-4">
            <img 
              src={logoTechWeb} 
              alt="TechWeb Logo" 
              style={{ height: 'var(--logo-size)', width: 'var(--logo-size)' }}
              className="object-contain"
            />
            <Button 
              variant="whatsapp" 
              onClick={() => window.open("https://wa.me/559591691553", "_blank")}
              className="hidden lg:flex"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-tech-card border-t border-tech-purple/20 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-tech-purple transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("planos")}
                className="text-left text-foreground hover:text-tech-purple transition-colors"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection("beneficios")}
                className="text-left text-foreground hover:text-tech-purple transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-tech-purple transition-colors"
              >
                Contato
              </button>
              <div className="flex items-center space-x-2 pt-2">
                <img src={logoTechWeb} alt="TechWeb" className="h-10 w-10" />
                <Button 
                  variant="whatsapp" 
                  size="sm"
                  onClick={() => window.open("https://wa.me/559591691553", "_blank")}
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;