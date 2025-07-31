import { MessageCircle, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTechWeb from "@/assets/logo-techweb-main.png";
import logoTW from "@/assets/logo-tw.png";

const Footer = () => {
  return (
    <footer className="bg-tech-dark border-t border-tech-purple/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Áreas Atendidas - Nova posição */}
          <div className="lg:hidden">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Áreas Atendidas
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <span>• Nova Cidade</span>
              <span>• Operário</span>
              <span>• Bela Vista</span>
              <span>• Raiar do Sol</span>
              <span>• São Bento (Brigadeiro)</span>
              <span>• Prof. Rocha</span>
              <span>• Vila Primavera</span>
              <span>• Flores</span>
            </div>
          </div>
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={logoTechWeb} 
                alt="TechWeb Logo" 
                className="h-20 w-20 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="text-3xl font-bold text-gray-400">
                  TechWeb
                </h3>
                <p className="text-base text-tech-blue">Internet Fibra Óptica</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Internet fibra óptica de qualidade com atendimento humano e suporte 24h. 
              Conectamos você com o mundo sem burocracia!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp" 
                size="sm"
                onClick={() => window.open("https://wa.me/559591691553", "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://instagram.com/techwebrr", "_blank")}
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Contato Rápido */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contato Rápido
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-tech-blue" />
                <span className="text-muted-foreground">(95) 9169-1553</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-tech-purple" />
                <span className="text-muted-foreground text-sm">
                  provedortechwebrr@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-tech-red mt-1" />
                <div className="text-muted-foreground text-sm">
                  <p>R. Belo Horizonte, 225A</p>
                  <p>Nova Cidade - Boa Vista/RR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Direita */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={logoTW} 
              alt="TW Logo" 
              className="h-24 w-24 object-contain drop-shadow-2xl hover:scale-110 transition-all duration-300 hover:drop-shadow-glow"
              style={{
                filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))"
              }}
            />
          </div>
        </div>

        {/* Divider */}
        {/* Áreas Atendidas - Desktop */}
        <div className="hidden lg:block mt-8 pt-8 border-t border-tech-purple/20">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Áreas Atendidas
            </h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>• Nova Cidade</span>
              <span>• Operário</span>
              <span>• Bela Vista</span>
              <span>• Raiar do Sol</span>
              <span>• São Bento (Brigadeiro)</span>
              <span>• Prof. Rocha</span>
              <span>• Vila Primavera</span>
              <span>• Flores</span>
            </div>
          </div>
        </div>

        <div className="border-t border-tech-purple/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2025 TechWeb - Internet Fibra Óptica. Todos os direitos reservados.
            </p>

            {/* Links Rápidos */}
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-tech-purple transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-tech-purple transition-colors"
              >
                Planos
              </button>
              <button 
                onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-tech-purple transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-tech-purple transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;