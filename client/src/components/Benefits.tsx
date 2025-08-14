import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Por Que Escolher a Tech Web?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais do que internet rápida, oferecemos uma experiência completa de conectividade.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefício 1: Suporte Rápido */}
          <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Suporte Rápido</h3>
            <p className="text-gray-300 text-center">
              Atendimento via WhatsApp com resposta imediata. Resolução de problemas em tempo real.
            </p>
          </div>

          {/* Benefício 2: Sem Burocracia */}
          <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Sem Burocracia</h3>
            <p className="text-gray-300 text-center">
              Processo simples e descomplicado. Contratação rápida direto pelo WhatsApp.
            </p>
          </div>

          {/* Benefício 3: Compromisso com Você */}
          <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Compromisso com Você</h3>
            <p className="text-gray-300 text-center">
              Nosso compromisso é sua satisfação. Internet de qualidade com preço justo.
            </p>
          </div>

          {/* Benefício 4: Sem Contrato de Fidelidade */}
          <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Sem Contrato de Fidelidade</h3>
            <p className="text-gray-300 text-center">
              Liberdade total! Cancele quando quiser, sem multas ou burocracia.
            </p>
          </div>

          {/* Benefício 5: Sem Multa de Quebra de Contrato */}
          <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Sem Multa de Quebra de Contrato</h3>
            <p className="text-gray-300 text-center">
              Transparência total. Sem surpresas ou taxas escondidas na rescisão.
            </p>
          </div>

          {/* Benefício 6: Instalação Rápida */}
          <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Instalação Rápida</h3>
            <p className="text-gray-300 text-center">
              Instalação profissional sem taxas ocultas. Técnicos qualificados e equipamentos de qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;