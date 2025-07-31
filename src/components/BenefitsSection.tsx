import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  Award, 
  HeartHandshake,
  Wifi,
  CheckCircle
} from "lucide-react";
import bgDigitalTransformation from "@/assets/bg-digital-transformation.png";

const benefits = [
  {
    icon: Zap,
    title: "Instalação Rápida",
    description: "Instalação profissional sem taxas ocultas. Técnicos qualificados e equipamentos de qualidade.",
    color: "text-tech-blue"
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Fibra óptica de alta qualidade com estabilidade comprovada. Conexão confiável 24/7.",
    color: "text-tech-purple"
  },
  {
    icon: Users,
    title: "Atendimento Humano",
    description: "Suporte técnico com pessoas reais. Sem robôs, sem espera, só soluções rápidas.",
    color: "text-tech-red"
  },
  {
    icon: Clock,
    title: "Suporte Rápido",
    description: "Atendimento via WhatsApp com resposta imediata. Resolução de problemas em tempo real.",
    color: "text-tech-blue"
  },
  {
    icon: Award,
    title: "Sem Burocracia",
    description: "Processo simples e descomplicado. Contratação rápida direto pelo WhatsApp.",
    color: "text-tech-purple"
  },
  {
    icon: HeartHandshake,
    title: "Compromisso com Você",
    description: "Nosso compromisso é sua satisfação. Internet de qualidade com preço justo.",
    color: "text-tech-red"
  },
  {
    icon: CheckCircle,
    title: "Sem Contrato de Fidelidade",
    description: "Liberdade total! Cancele quando quiser, sem multas ou burocracia.",
    color: "text-tech-blue"
  },
  {
    icon: Shield,
    title: "Sem Multa de Quebra de Contrato",
    description: "Transparência total. Sem surpresas ou taxas escondidas na rescisão.",
    color: "text-tech-purple"
  }
];

const BenefitsSection = () => {
  return (
    <section 
      id="beneficios" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 23, 35, 0.9), rgba(20, 23, 35, 0.95)), url(${bgDigitalTransformation})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Por Que Escolher
            </span>
            <br />
            <span className="text-foreground">a Tech Web?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais do que internet rápida, oferecemos uma experiência completa de conectividade.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-tech border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300 hover:shadow-tech hover:scale-[1.02] group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-tech-card border border-tech-purple/30 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Seção de Destaques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Destaque Principal */}
          <Card className="bg-gradient-tech border-tech-purple/20 shadow-tech">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Chega de Instabilidade!
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                Conheça nossos planos com conexão estável e suporte de verdade.
              </p>
              <div className="flex items-center space-x-3">
                <Wifi className="w-6 h-6 text-tech-blue" />
                <span className="text-foreground">Fibra óptica dedicada</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-tech-purple" />
                <span className="text-foreground">99.9% de uptime garantido</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-tech-red" />
                <span className="text-foreground">Sem oscilações de velocidade</span>
              </div>
            </CardContent>
          </Card>

          {/* Áreas Atendidas */}
          <Card className="bg-gradient-tech border-tech-purple/20 shadow-tech">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Áreas Atendidas
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Nova Cidade",
                  "Operário", 
                  "Bela Vista",
                  "Raiar do Sol",
                  "São Bento (Brigadeiro)",
                  "Prof. Rocha",
                  "Vila Primavera",
                  "Flores"
                ].map((area, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-blue" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;