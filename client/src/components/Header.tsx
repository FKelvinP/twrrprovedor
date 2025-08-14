import React from 'react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">TW</div>
          <div className="logo-text">
            <h1>TechWeb</h1>
            <p>Internet Fibra Óptica</p>
          </div>
        </div>

        <nav className="nav">
          <button 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Início
          </button>
          <button 
            className={`nav-item ${currentPage === 'plans' ? 'active' : ''}`}
            onClick={() => setCurrentPage('plans')}
          >
            Planos
          </button>
          <button 
            className={`nav-item ${currentPage === 'benefits' ? 'active' : ''}`}
            onClick={() => setCurrentPage('benefits')}
          >
            Benefícios
          </button>
          <button 
            className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contact')}
          >
            Contato
          </button>
        </nav>

        <div className="header-actions">
          <div className="tech-web-logo">TW</div>
          <button className="whatsapp-btn">
            📱 WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;