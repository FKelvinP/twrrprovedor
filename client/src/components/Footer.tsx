import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2025 TechWeb - Internet Fibra Óptica. Todos os direitos reservados.
            </p>
          </div>

          {/* Navegação */}
          <nav className="flex items-center space-x-6">
            <a href="#inicio" className="text-gray-400 hover:text-white transition-colors duration-200">
              Início
            </a>
            <a href="#planos" className="text-gray-400 hover:text-white transition-colors duration-200">
              Planos
            </a>
            <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors duration-200">
              Benefícios
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TW</span>
            </div>
            <span className="text-white font-semibold">TECHWEB</span>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Conectando você com o mundo através da melhor internet fibra óptica da região
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;