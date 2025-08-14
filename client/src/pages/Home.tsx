import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Internet Fibra Óptica<br />
          de Qualidade!
        </h1>
        <p className="hero-subtitle">
          Sem cortes. Sem enrolação. Só velocidade!
        </p>

        <div className="hero-quote">
          "Conectamos você com o mundo — sem burocracia e com suporte humano!"
        </div>

        <div className="hero-actions">
          <button className="btn-primary">⚡ Ver Planos</button>
          <button className="btn-secondary">💬 Falar no WhatsApp</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon installation">⚡</div>
            <h3>Sem Taxa de Instalação</h3>
            <p>Instalação profissional sem taxas ocultas. Técnicos qualificados e equipamentos de qualidade.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon quality">🛡️</div>
            <h3>Conexão Estável</h3>
            <p>Fibra óptica de alta qualidade com estabilidade comprovada. Conexão confiável 24/7.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon support">👥</div>
            <h3>Suporte Humano</h3>
            <p>Suporte técnico com pessoas reais. Sem robôs, sem espera, só soluções rápidas.</p>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="features-grid" style={{ marginTop: '3rem' }}>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(45deg, #10b981, #059669)' }}>⏱️</div>
            <h3>Suporte Rápido</h3>
            <p>Atendimento via WhatsApp com resposta imediata. Resolução de problemas em tempo real.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)' }}>📜</div>
            <h3>Sem Burocracia</h3>
            <p>Processo simples e descomplicado. Contratação rápida direto pelo WhatsApp.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(45deg, #f59e0b, #d97706)' }}>💖</div>
            <h3>Compromisso com Você</h3>
            <p>Nosso compromisso é sua satisfação. Internet de qualidade com preço justo.</p>
          </div>
        </div>

        <div className="features-grid" style={{ marginTop: '3rem' }}>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(45deg, #06b6d4, #0891b2)' }}>✅</div>
            <h3>Sem Contrato de Fidelidade</h3>
            <p>Liberdade total! Cancele quando quiser, sem multas ou burocracia.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)' }}>🚫</div>
            <h3>Sem Multa de Quebra de Contrato</h3>
            <p>Transparência total. Sem surpresas ou taxas escondidas na rescisão.</p>
          </div>
        </div>
      </section>

      {/* Why Choose TechWeb Section */}
      <section className="why-choose" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#6366f1', marginBottom: '2rem' }}>
          Por Que Escolher<br />
          a Tech Web?
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
          Mais do que internet rápida, oferecemos uma experiência completa de conectividade.
        </p>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', background: 'rgba(99, 102, 241, 0.1)', margin: '3rem 2rem', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
          Dúvidas sobre qual plano escolher?
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2rem' }}>
          Fale agora com nosso time e instale ainda hoje!
        </p>
        <button className="btn-secondary">💬 Conversar no WhatsApp</button>
      </section>
    </div>
  );
};

export default Home;