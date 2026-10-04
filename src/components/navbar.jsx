function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Kidus Berhanu</h2>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="/CV.pdf" download className="cv-link">CV</a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;