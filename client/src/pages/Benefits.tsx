import React from 'react';

const Benefits: React.FC = () => {
  return (
    <div className="benefits-page">
      {/* Why Choose TechWeb Section */}
      <section className="benefits-section">
        <h2>Por Que Escolher a Tech Web?</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#94a3b8', marginBottom: '3rem' }}>
          Mais do que internet rápida, oferecemos uma experiência completa de conectividade.
        </p>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)' }}>⚡</div>
            <h3>Instalação Rápida</h3>
            <p>Instalação profissional sem taxas ocultas. Técnicos qualificados e equipamentos de qualidade.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)' }}>🛡️</div>
            <h3>Qualidade Garantida</h3>
            <p>Fibra óptica de alta qualidade com estabilidade comprovada. Conexão confiável 24/7.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #ef4444, #dc2626)' }}>👥</div>
            <h3>Atendimento Humano</h3>
            <p>Suporte técnico com pessoas reais. Sem robôs, sem espera, só soluções rápidas.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #10b981, #059669)' }}>⏱️</div>
            <h3>Suporte Rápido</h3>
            <p>Atendimento via WhatsApp com resposta imediata. Resolução de problemas em tempo real.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)' }}>📜</div>
            <h3>Sem Burocracia</h3>
            <p>Processo simples e descomplicado. Contratação rápida direto pelo WhatsApp.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #f59e0b, #d97706)' }}>💖</div>
            <h3>Compromisso com Você</h3>
            <p>Nosso compromisso é sua satisfação. Internet de qualidade com preço justo.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #06b6d4, #0891b2)' }}>✅</div>
            <h3>Sem Contrato de Fidelidade</h3>
            <p>Liberdade total! Cancele quando quiser, sem multas ou burocracia.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)' }}>🚫</div>
            <h3>Sem Multa de Quebra de Contrato</h3>
            <p>Transparência total. Sem surpresas ou taxas escondidas na rescisão.</p>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="benefits-section">
        <h2>Chega de Instabilidade!</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#94a3b8', marginBottom: '3rem' }}>
          Conheça nossos planos com conexão estável e suporte de verdade.
        </p>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #06b6d4, #0891b2)' }}>🌐</div>
            <h3>Fibra óptica dedicada</h3>
            <p>Conexão exclusiva e direta, sem compartilhamento que comprometa a velocidade.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #10b981, #059669)' }}>✅</div>
            <h3>99,9% de uptime garantido</h3>
            <p>Disponibilidade máxima com infraestrutura robusta e monitoramento 24/7.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon" style={{ background: 'linear-gradient(45deg, #ef4444, #dc2626)' }}>🚫</div>
            <h3>Sem oscilações de velocidade</h3>
            <p>Velocidade constante durante todo o dia, sem quedas nos horários de pico.</p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="areas-section">
        <h2>Áreas Atendidas</h2>
        <div className="areas-list">
          <span className="area-item">Nova Cidade</span>
          <span className="area-item">Operário</span>
          <span className="area-item">Bela Vista</span>
          <span className="area-item">Raiar do Sol</span>
          <span className="area-item">São Bento (Brigadeiro)</span>
          <span className="area-item">Prof. Rocha</span>
          <span className="area-item">Vila Primavera</span>
          <span className="area-item">Flores</span>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#6366f1', marginBottom: '2rem' }}>
          Entre em Contato
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '3rem' }}>
          Estamos prontos para conectar você com a melhor internet da região!
        </p>
        <button className="btn-secondary">💬 Conversar no WhatsApp</button>
      </section>
    </div>
  );
};

export default Benefits;