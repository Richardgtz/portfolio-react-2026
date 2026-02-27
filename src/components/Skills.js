import SkillItem from './SkillItem';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Node.js'];
  
  return (
    <section style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Habilidades</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {skills.map(skill => (
          <SkillItem key={skill} nombre={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;