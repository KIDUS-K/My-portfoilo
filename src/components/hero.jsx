function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <h1>Hi, I'm Kidus Berhanu</h1>
        <p>Data Analyst | SQL • Power BI • Excel</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>

      {/* Right Line Chart — absolutely positioned */}
      <div className="line-card">
        <div className="line-header">Exam Score Trend</div>
        <svg className="line-chart" viewBox="0 0 200 100" preserveAspectRatio="none">
          <polyline
            className="line-path"
            points="0,85 30,75 60,65 90,55 120,45 150,30 200,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className="line-dot" cx="200" cy="15" r="3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;