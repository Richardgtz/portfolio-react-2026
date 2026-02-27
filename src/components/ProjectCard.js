function ProjectCard({ titulo, descripcion, tecnologias, link }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px',
      maxWidth: '300px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{titulo}</h3>
      <p style={{ color: '#666', marginBottom: '15px' }}>{descripcion}</p>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        <strong>Tecnologías:</strong> {tecnologias.join(' • ')}
      </p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          background: '#667eea',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '5px',
          textDecoration: 'none',
          marginTop: '10px'
        }}>
          Ver proyecto →
        </a>
      )}
    </div>
  );
}

export default ProjectCard;