function About() {
  return (
    <section style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '40px 20px',
      textAlign: 'center',
      background: '#f5f5f5',
      borderRadius: '10px'
    }}>
      <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Sobre mí</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#666' }}>
        Egresado de Ingeniería en Sistemas Computacionales en UTEL, 
        con enfoque en desarrollo full stack. Me apasiona crear soluciones 
        web eficientes y seguir aprendiendo nuevas tecnologías.
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#666', marginTop: '20px' }}>
        Actualmente en búsqueda de oportunidades para aplicar mis conocimientos 
        y seguir creciendo profesionalmente.
      </p>
    </section>
  );
}

export default About;