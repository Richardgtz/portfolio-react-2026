function SkillItem({ nombre }) {
  return (
    <span style={{
      background: '#667eea',
      color: 'white',
      padding: '10px 25px',
      margin: '10px',
      borderRadius: '25px',
      fontSize: '1.1rem',
      display: 'inline-block',
      transition: 'transform 0.2s, background 0.2s',
      cursor: 'default'
    }}
    onMouseEnter={(e) => {
      e.target.style.background = '#764ba2';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = '#667eea';
      e.target.style.transform = 'scale(1)';
    }}>
      {nombre}
    </span>
  );
}

export default SkillItem;