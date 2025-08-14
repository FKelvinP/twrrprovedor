import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'plans':
        return <Plans />;
      case 'benefits':
        return <Benefits />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
