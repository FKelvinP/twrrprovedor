import React from 'react';

const Plans: React.FC = () => {
  return (
    <div className="plans-page">
      <div className="plans-header">
        <h1>Nossos Planos</h1>
        <p>Escolha o plano ideal para sua necessidade. Todos com fibra óptica e suporte completo.</p>
      </div>

      <div className="plans-grid">
        {/* Start 200 */}
        <div className="plan-card">
          <div className="plan-name">Start 200</div>
          <div className="plan-speed">200 MB</div>
          <div className="plan-price">
            <span className="currency">R$</span> 80,00<span className="period">/mês</span>
          </div>
          <ul className="plan-features">
            <li>Ideal para uso básico e residencial</li>
            <li>Navegação em sites e redes sociais</li>
            <li>Aplicativos de mensagens (WhatsApp, Instagram, etc.)</li>
            <li>Sem limite de dados</li>
          </ul>
          <button className="plan-btn">📞 Contratar Agora</button>
        </div>

        {/* Turbo 300 */}
        <div className="plan-card">
          <div className="plan-name">Turbo 300</div>
          <div className="plan-speed">300 MB</div>
          <div className="plan-price">
            <span className="currency">R$</span> 100,00<span className="period">/mês</span>
          </div>
          <ul className="plan-features">
            <li>Tudo do Start 200</li>
            <li>Maior velocidade e estabilidade</li>
            <li>Chamadas de vídeo sem travamentos</li>
            <li>Sem limite de dados</li>
          </ul>
          <button className="plan-btn">📞 Contratar Agora</button>
        </div>

        {/* Ultra 500 - Most Popular */}
        <div className="plan-card popular">
          <div className="plan-name">Ultra 500</div>
          <div className="plan-speed">500 MB</div>
          <div className="plan-price">
            <span className="currency">R$</span> 140,00<span className="period">/mês</span>
          </div>
          <ul className="plan-features">
            <li>Tudo do Turbo 300</li>
            <li>Ideal para home office</li>
            <li>Melhor desempenho em jogos online</li>
            <li>Sem limite de dados</li>
          </ul>
          <button className="plan-btn">📞 Contratar Agora</button>
        </div>

        {/* Power 800 */}
        <div className="plan-card">
          <div className="plan-name">Power 800</div>
          <div className="plan-speed">800 MB</div>
          <div className="plan-price">
            <span className="currency">R$</span> 170,00<span className="period">/mês</span>
          </div>
          <ul className="plan-features">
            <li>Tudo do Ultra 500</li>
            <li>Transmissão em alta definição</li>
            <li>Ideal para pequenas empresas, estúdios e escritórios</li>
            <li>Upload mais rápido de arquivos e vídeos</li>
            <li>Múltiplos streamings simultâneos</li>
            <li>Sem limite de dados</li>
          </ul>
          <button className="plan-btn">📞 Contratar Agora</button>
        </div>

        {/* Giga Pro */}
        <div className="plan-card">
          <div className="plan-name">Giga Pro</div>
          <div className="plan-speed">1 GIGA</div>
          <div className="plan-price">
            <span className="currency">R$</span> 200,00<span className="period">/mês</span>
          </div>
          <ul className="plan-features">
            <li>Tudo do Power 800</li>
            <li>Suporta uso intenso com muitos usuários conectados</li>
            <li>Preparado para grandes volumes de tráfego, backup em nuvem e servidores locais</li>
            <li>Ideal para empresas, streamers, gamers, monitoramento 24h e uso profissional intenso</li>
            <li>Compatível com CFTV IP e videomonitoramento</li>
            <li>Sem limite de dados</li>
          </ul>
          <button className="plan-btn">📞 Contratar Agora</button>
        </div>
      </div>

      {/* CTA Section */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', background: 'rgba(99, 102, 241, 0.1)', margin: '3rem 0', borderRadius: '16px' }}>
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

export default Plans;