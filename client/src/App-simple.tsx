import './index.css'

const AppSimple = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#1a1d2b', 
      color: 'white', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3em', 
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          TechWeb
        </h1>
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>
          Internet Fibra Óptica de Qualidade!
        </h2>
        <p style={{ fontSize: '1.5em', marginBottom: '30px' }}>
          Sem cortes. Sem enrolação. Só velocidade!
        </p>
        <button 
          style={{
            background: 'linear-gradient(90deg, #a855f7, #ef4444)',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.2em',
            cursor: 'pointer',
            margin: '10px'
          }}
          onClick={() => window.open('https://wa.me/559591691553', '_blank')}
        >
          Falar no WhatsApp
        </button>
        <div style={{ marginTop: '40px' }}>
          <h3>Planos Disponíveis:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ 
              background: '#2a2d3d', 
              padding: '20px', 
              borderRadius: '10px',
              border: '1px solid #a855f7'
            }}>
              <h4>Plano Básico</h4>
              <p>100 Mbps</p>
              <p>R$ 79,90/mês</p>
            </div>
            <div style={{ 
              background: '#2a2d3d', 
              padding: '20px', 
              borderRadius: '10px',
              border: '1px solid #a855f7'
            }}>
              <h4>Plano Padrão</h4>
              <p>300 Mbps</p>
              <p>R$ 99,90/mês</p>
            </div>
            <div style={{ 
              background: '#2a2d3d', 
              padding: '20px', 
              borderRadius: '10px',
              border: '1px solid #a855f7'
            }}>
              <h4>Plano Premium</h4>
              <p>600 Mbps</p>
              <p>R$ 129,90/mês</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppSimple