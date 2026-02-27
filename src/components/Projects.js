import ProjectCard from './ProjectCard';

function Projects() {
  const proyectos = [
    {
      titulo: 'Portfolio 2026',
      descripcion: 'Mi portfolio personal construido con React',
      tecnologias: ['React', 'JavaScript', 'CSS'],
      link: 'https://richardgtz.github.io/portfolio-react-2026'
    },
    {
      titulo: 'Calculadora de Propinas',
      descripcion: 'App para calcular propinas y dividir cuentas',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      link: null  // Si no tienes link, no muestra botón
    },
    {
      titulo: 'To-Do List',
      descripcion: 'Gestor de tareas con localStorage',
      tecnologias: ['React', 'Hooks'],
      link: null
    }
  ];

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '50px auto',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '40px' }}>
        Mis Proyectos
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {proyectos.map((proyecto, index) => (
          <ProjectCard 
            key={index}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            link={proyecto.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;