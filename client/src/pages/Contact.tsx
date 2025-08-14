import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(45deg, #8b5cf6, #d946ef)', margin: '2rem', borderRadius: '16px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
          💬 Fale Agora com Nosso Time!
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
          Instalação ainda hoje! Atendimento humano e suporte rápido via WhatsApp.
        </p>
        <button className="btn-primary">💬 Conversar no WhatsApp</button>
      </section>

      {/* Contact Methods */}
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon whatsapp">📱</div>
          <h3>WhatsApp</h3>
          <div className="contact-info">(95) 9169-1553</div>
          <div className="contact-desc">Atendimento rápido e humanizado</div>
          <button className="contact-btn">Chamar no WhatsApp</button>
        </div>

        <div className="contact-card">
          <div className="contact-icon email">📧</div>
          <h3>E-mail</h3>
          <div className="contact-info">provedortechwebri@gmail.com</div>
          <div className="contact-desc">Suporte técnico e comercial</div>
          <button className="contact-btn">Enviar E-mail</button>
        </div>

        <div className="contact-card">
          <div className="contact-icon instagram">📷</div>
          <h3>Instagram</h3>
          <div className="contact-info">@techwebri</div>
          <div className="contact-desc">Novidades e promoções</div>
          <button className="contact-btn">Seguir no Instagram</button>
        </div>
      </div>

      {/* Address and Hours */}
      <div className="contact-grid" style={{ marginTop: '3rem' }}>
        <div className="contact-card">
          <div className="contact-icon" style={{ background: 'linear-gradient(45deg, #ef4444, #dc2626)' }}>📍</div>
          <h3>Nosso Endereço</h3>
          <div className="contact-info">R. Belo Horizonte, 225A</div>
          <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Nova Cidade (Próximo à Praça)</div>
          <div style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Boa Vista - RR</div>
          <button className="contact-btn">Ver no Google Maps</button>
        </div>

        <div className="contact-card">
          <div className="contact-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)' }}>🕒</div>
          <h3>Horário de Atendimento</h3>
          <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Segunda a Sexta: <span style={{ color: '#6366f1', fontWeight: '600' }}>8h às 18h</span></div>
          <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Sábado: <span style={{ color: '#6366f1', fontWeight: '600' }}>8h às 14h</span></div>
          <div style={{ color: '#94a3b8', marginBottom: '1rem' }}>WhatsApp: <span style={{ color: '#6366f1', fontWeight: '600' }}>24h/dia</span></div>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Emergências técnicas: WhatsApp 24h</div>
        </div>
      </div>

      {/* Company Info */}
      <section style={{ padding: '3rem 2rem', textAlign: 'left', background: 'rgba(255, 255, 255, 0.05)', margin: '3rem 0', borderRadius: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', maxWidth: '800px' }}>
          <div className="tech-web-logo" style={{ width: '80px', height: '80px', fontSize: '1.5rem', flexShrink: 0 }}>TW</div>
          <div>
            <h2 style={{ color: '#6366f1', marginBottom: '1rem' }}>TechWeb</h2>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Internet Fibra Óptica</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
              Internet fibra óptica de qualidade com atendimento humano e suporte 24h. 
              Conectamos você com o mundo sem burocracia!
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>📱 WhatsApp</button>
              <button style={{ background: 'transparent', border: '2px solid #6366f1', color: '#6366f1', padding: '0.75rem 1.5rem', borderRadius: '25px', cursor: 'pointer' }}>📷 Instagram</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Detailed */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#6366f1', marginBottom: '2rem' }}>Contato Rápido</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#6366f1' }}>📱</span>
            <span style={{ color: '#6366f1', fontWeight: '600' }}>(95) 9169-1553</span>
          </div>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#6366f1' }}>📧</span>
            <span style={{ color: '#6366f1', fontWeight: '600' }}>provedortechwebri@gmail.com</span>
          </div>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#6366f1' }}>📍</span>
            <div>
              <div style={{ color: '#6366f1', fontWeight: '600' }}>R. Belo Horizonte, 225A</div>
              <div style={{ color: '#94a3b8' }}>Nova Cidade - Boa Vista/RR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="areas-section">
        <h2>Áreas Atendidas</h2>
        <div className="areas-list">
          <span className="area-item">• Nova Cidade</span>
          <span className="area-item">• Operário</span>
          <span className="area-item">• Bela Vista</span>
          <span className="area-item">• Raiar do Sol</span>
          <span className="area-item">• São Bento (Brigadeiro)</span>
          <span className="area-item">• Prof. Rocha</span>
          <span className="area-item">• Vila Primavera</span>
          <span className="area-item">• Flores</span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '1rem' }}>
          <div>© 2025 TechWeb - Internet Fibra Óptica. Todos os direitos reservados.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Início</span>
            <span>Planos</span>
            <span>Benefícios</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;