import React from 'react';

const Plans: React.FC = () => {
  return (
    <section id="planos" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nossos Planos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para sua necessidade. Todos com fibra óptica e suporte completo.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Plano Start 200 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-2">Start 200</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">200 MB</div>
            <div className="text-2xl font-bold text-purple-400 mb-6">R$ 80,00/mês</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Ideal para uso básico e residencial</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Navegação em sites e redes sociais</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Aplicativos de mensagens</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Sem limite de dados</span>
              </li>
            </ul>
            <a
              href="https://wa.me/559591691553?text=Olá! Gostaria de contratar o plano Start 200"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span>Contratar Agora</span>
            </a>
          </div>

          {/* Plano Turbo 300 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-2">Turbo 300</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">300 MB</div>
            <div className="text-2xl font-bold text-purple-400 mb-6">R$ 100,00/mês</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Tudo do Start 200</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Maior velocidade e estabilidade</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Chamadas de vídeo sem travamentos</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Sem limite de dados</span>
              </li>
            </ul>
            <a
              href="https://wa.me/559591691553?text=Olá! Gostaria de contratar o plano Turbo 300"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span>Contratar Agora</span>
            </a>
          </div>

          {/* Plano Ultra 500 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ultra 500</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">500 MB</div>
            <div className="text-2xl font-bold text-purple-400 mb-6">R$ 140,00/mês</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Tudo do Turbo 300</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Ideal para home office</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Melhor desempenho em jogos online</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Sem limite de dados</span>
              </li>
            </ul>
            <a
              href="https://wa.me/559591691553?text=Olá! Gostaria de contratar o plano Ultra 500"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span>Contratar Agora</span>
            </a>
          </div>

          {/* Plano Power 800 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-2">Power 800</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">800 MB</div>
            <div className="text-2xl font-bold text-purple-400 mb-6">R$ 170,00/mês</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Tudo do Ultra 500</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Transmissão em alta definição</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Ideal para pequenas empresas</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Sem limite de dados</span>
              </li>
            </ul>
            <a
              href="https://wa.me/559591691553?text=Olá! Gostaria de contratar o plano Power 800"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span>Contratar Agora</span>
            </a>
          </div>

          {/* Plano Giga Pro */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-2">Giga Pro</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">1 GIGA</div>
            <div className="text-2xl font-bold text-purple-400 mb-6">R$ 200,00/mês</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Tudo do Power 800</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Ideal para empresas e streamers</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Compatível com CFTV IP</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Sem limite de dados</span>
              </li>
            </ul>
            <a
              href="https://wa.me/559591691553?text=Olá! Gostaria de contratar o plano Giga Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span>Contratar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;