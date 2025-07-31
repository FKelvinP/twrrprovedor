import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Shield, Users } from "lucide-react";
import bgConnection from "@/assets/bg-connection.png";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 23, 35, 0.8), rgba(20, 23, 35, 0.9)), url(${bgConnection})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Internet Fibra Óptica
            </span>
            <br />
            <span className="text-foreground">de Qualidade!</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sem cortes. Sem enrolação. Só velocidade!
          </p>

          {/* Frase de Destaque */}
          <div className="bg-gradient-tech p-6 rounded-lg border border-tech-purple/20 mb-8 shadow-tech">
            <p className="text-lg md:text-xl font-semibold text-tech-blue">
              "Conectamos você com o mundo — sem burocracia e com suporte humano!"
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto"
            >
              <Zap className="w-5 h-5" />
              Ver Planos
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={() => window.open("https://wa.me/559591691553", "_blank")}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Destaques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-tech-blue">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Sem Taxa de Instalação</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-tech-purple">
              <Zap className="w-6 h-6" />
              <span className="font-semibold">Conexão Estável</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-tech-red">
              <Users className="w-6 h-6" />
              <span className="font-semibold">Suporte Humano</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-purple/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-tech-blue/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-tech-red/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;