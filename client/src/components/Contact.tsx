import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fale Agora com Nosso Time!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Instalação ainda hoje! Atendimento humano e suporte rápido via WhatsApp.
          </p>
        </div>

        {/* Botão Principal de WhatsApp */}
        <div className="text-center mb-16">
          <a
            href="https://wa.me/559591691553"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-purple-700 to-red-600 hover:from-purple-700 hover:via-purple-800 hover:to-red-700 text-white px-8 py-4 rounded-xl text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>Conversar no WhatsApp</span>
          </a>
        </div>

        {/* Cards de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">WhatsApp</h3>
            <p className="text-2xl font-bold text-green-400 mb-2 text-center">(95) 9169-1553</p>
            <p className="text-gray-300 text-center mb-4">Atendimento rápido e humanizado</p>
            <a
              href="https://wa.me/559591691553"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Email */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">E-mail</h3>
            <p className="text-lg font-bold text-blue-400 mb-2 text-center">provedortechwebrr@gmail.com</p>
            <p className="text-gray-300 text-center mb-4">Suporte técnico e comercial</p>
            <a
              href="mailto:provedortechwebrr@gmail.com"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Enviar E-mail</span>
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Instagram</h3>
            <p className="text-lg font-bold text-purple-400 mb-2 text-center">@techwebrr</p>
            <p className="text-gray-300 text-center mb-4">Novidades e promoções</p>
            <a
              href="https://instagram.com/techwebrr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Seguir no Instagram</span>
            </a>
          </div>
        </div>

        {/* Informações de Endereço e Horário */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Endereço */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Nosso Endereço</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <p className="text-lg">R. Belo Horizonte, 225A</p>
              <p className="text-lg">Nova Cidade (Próximo à Praça)</p>
              <p className="text-lg">Boa Vista - RR</p>
            </div>
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=R.+Belo+Horizonte,+225A,+Nova+Cidade,+Boa+Vista+-+RR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 border border-gray-600"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Ver no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Horário de Atendimento */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Horário de Atendimento</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-lg">Segunda a Sexta:</span>
                <span className="text-lg font-semibold text-white">8h às 18h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Sábado:</span>
                <span className="text-lg font-semibold text-white">8h às 14h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">WhatsApp:</span>
                <span className="text-lg font-semibold text-white">24h/dia</span>
              </div>
              <div className="pt-3 border-t border-gray-600">
                <p className="text-lg text-center">
                  <span className="font-semibold text-white">Emergências técnicas:</span> WhatsApp 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;