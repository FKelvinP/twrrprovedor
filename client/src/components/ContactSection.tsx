import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram,
  Clock
} from "lucide-react";

const ContactSection = () => {
  return (
    <section 
      id="contato" 
      className="py-20 bg-gradient-tech"
    >
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para conectar você com a melhor internet da região!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Call to Action Principal */}
          <Card className="bg-gradient-accent mb-12 shadow-glow border-none">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                💬 Fale Agora com Nosso Time!
              </h3>
              <p className="text-primary-foreground/90 mb-8 text-lg">
                Instalação ainda hoje! Atendimento humano e suporte rápido via WhatsApp.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-background"
                onClick={() => window.open("https://wa.me/559591691553", "_blank")}
              >
                <MessageCircle className="w-6 h-6" />
                Conversar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <Card className="bg-tech-card border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300 hover:shadow-tech">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-xl text-foreground">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-tech-blue font-semibold text-lg">(95) 9169-1553</p>
                <p className="text-muted-foreground text-sm">
                  Atendimento rápido e humanizado
                </p>
                <Button 
                  variant="whatsapp" 
                  className="w-full"
                  onClick={() => window.open("https://wa.me/559591691553", "_blank")}
                >
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* E-mail */}
            <Card className="bg-tech-card border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300 hover:shadow-tech">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-tech-blue/20 border border-tech-blue/30 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-tech-blue" />
                </div>
                <CardTitle className="text-xl text-foreground">E-mail</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-tech-blue font-semibold break-all">
                  provedortechwebrr@gmail.com
                </p>
                <p className="text-muted-foreground text-sm">
                  Suporte técnico e comercial
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("mailto:provedortechwebrr@gmail.com", "_blank")}
                >
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="bg-tech-card border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300 hover:shadow-tech">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center mb-4">
                  <Instagram className="w-8 h-8 text-pink-400" />
                </div>
                <CardTitle className="text-xl text-foreground">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-tech-purple font-semibold">@techwebrr</p>
                <p className="text-muted-foreground text-sm">
                  Novidades e promoções
                </p>
                <Button 
                  variant="instagram" 
                  className="w-full"
                  onClick={() => window.open("https://instagram.com/techwebrr", "_blank")}
                >
                  Seguir no Instagram
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Endereço e Horário */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Endereço */}
            <Card className="bg-tech-card border-tech-purple/20 shadow-tech">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-tech-red/20 border border-tech-red/30 flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-tech-red" />
                </div>
                <CardTitle className="text-xl text-foreground">Nosso Endereço</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-foreground font-semibold">
                  R. Belo Horizonte, 225A
                </p>
                <p className="text-foreground">
                  Nova Cidade (Próximo à Praça)
                </p>
                <p className="text-muted-foreground text-sm">
                  Boa Vista - RR
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://maps.google.com/?q=R.+Belo+Horizonte,+225A,+Nova+Cidade,+Boa+Vista,+RR", "_blank")}
                >
                  Ver no Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Horário de Atendimento */}
            <Card className="bg-tech-card border-tech-purple/20 shadow-tech">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-tech-purple/20 border border-tech-purple/30 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-tech-purple" />
                </div>
                <CardTitle className="text-xl text-foreground">Horário de Atendimento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Segunda a Sexta:</span>
                  <span className="text-tech-blue font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Sábado:</span>
                  <span className="text-tech-blue font-semibold">8h às 14h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">WhatsApp:</span>
                  <span className="text-tech-purple font-semibold">24h/dia</span>
                </div>
                <p className="text-muted-foreground text-sm text-center mt-4">
                  Emergências técnicas: WhatsApp 24h
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;