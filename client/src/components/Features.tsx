import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Sem Taxa de Instalação */}
          <div className="text-center p-6 rounded-xl bg-gray-800/80 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Sem Taxa de Instalação</h3>
            <p className="text-gray-300">Instalação profissional sem custos ocultos. Técnicos qualificados e equipamentos de qualidade.</p>
          </div>

          {/* Feature 2: Conexão Estável */}
          <div className="text-center p-6 rounded-xl bg-gray-800/80 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Conexão Estável</h3>
            <p className="text-gray-300">Fibra óptica de alta qualidade com estabilidade comprovada. Conexão confiável 24/7.</p>
          </div>

          {/* Feature 3: Suporte Humano */}
          <div className="text-center p-6 rounded-xl bg-gray-800/80 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1L12 12.5c-.47-.63-1.21-1-2.01-1H8.46c-.8 0-1.54.37-2.01 1L4 15.5V22h2v-6h2.5l2.54-7.63A1.5 1.5 0 0 1 12.54 8H15c.8 0 1.54.37 2.01 1L19.5 16H22v6h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Suporte Humano</h3>
            <p className="text-gray-300">Suporte técnico com pessoas reais. Sem robôs, sem espera, só soluções rápidas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;