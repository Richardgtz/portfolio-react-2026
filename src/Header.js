function Header() {
    return (
        <header style={{ 
            textAlign: 'center', 
            padding: '100px 20px', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            color: 'white' 
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                Richard Gtz
            </h1>
            <p style={{ fontSize: '1.8rem', opacity: 0.9 }}>
                Full Stack Developer
            </p>
            <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
                Portfolio 2026
            </p>
        </header>
    );
}

export default Header;