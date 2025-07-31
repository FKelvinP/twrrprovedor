import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Check } from "lucide-react";
import bgTechPurple from "@/assets/bg-tech-purple.png";

const plans = [
  {
    name: "Start 200",
    speed: "200 MB",
    price: "R$ 80,00",
    popular: false,
    features: ["Ideal para uso básico e residencial", "Navegação em sites e redes sociais", "Aplicativos de mensagens (WhatsApp, Instagram, etc.)", "Sem limite de dados"]
  },
  {
    name: "Turbo 300",
    speed: "300 MB",
    price: "R$ 100,00",
    popular: false,
    features: ["Tudo do Start 200", "Maior velocidade e estabilidade", "Chamadas de vídeo sem travamentos", "Sem limite de dados"]
  },
  {
    name: "Ultra 500",
    speed: "500 MB",
    price: "R$ 140,00",
    popular: true,
    features: ["Tudo do Turbo 300", "Ideal para home office", "Melhor desempenho em jogos online", "Sem limite de dados"]
  },
  {
    name: "Power 800",
    speed: "800 MB",
    price: "R$ 170,00",
    popular: false,
    features: ["Tudo do Ultra 500", "Transmissão em alta definição", "Ideal para pequenas empresas, estúdios e escritórios", "Upload mais rápido de arquivos e vídeos", "Múltiplos streamings simultâneos", "Sem limite de dados"]
  },
  {
    name: "Giga Pro",
    speed: "1 GIGA",
    price: "R$ 200,00",
    popular: false,
    features: ["Tudo do Power 800", "Suporta uso intenso com muitos usuários conectados", "Preparado para grandes volumes de tráfego, backup em nuvem e servidores locais", "Ideal para empresas, streamers, gamers, monitoramento 24h e uso profissional intenso", "Compatível com CFTV IP e videomonitoramento", "Sem limite de dados"]
  }
];

const PlansSection = () => {
  return (
    <section 
      id="planos" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 23, 35, 0.9), rgba(20, 23, 35, 0.95)), url(${bgTechPurple})`,
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
              Nossos Planos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua necessidade. Todos com fibra óptica e suporte completo.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-tech border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300 hover:shadow-tech hover:scale-[1.02] ${
                plan.popular ? 'ring-2 ring-tech-purple shadow-glow' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-primary-foreground">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-tech-blue mb-2">
                  {plan.speed}
                </div>
                <div className="text-3xl font-bold text-tech-purple">
                  {plan.price}
                  <span className="text-base text-muted-foreground">/mês</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-tech-blue flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="plan" 
                  className="w-full mt-6"
                  onClick={() => window.open(`https://wa.me/559591691553?text=Olá! Tenho interesse no plano ${plan.name} de ${plan.speed} por ${plan.price}/mês. Gostaria de mais informações!`, "_blank")}
                >
                  <MessageCircle className="w-4 h-4" />
                  Contratar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-tech p-8 rounded-lg border border-tech-purple/20 shadow-tech max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale agora com nosso time e instale ainda hoje!
            </p>
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={() => window.open("https://wa.me/559591691553", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;