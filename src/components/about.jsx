import SqlTerminal from "./SqlTerminal";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="/profile.jpg"
          alt="Kidus Berhanu"
          className="about-photo"
        />
        <div className="about-text">
          <p>
            I'm an Information Systems graduate and aspiring data analyst. I
            specialize in SQL, Power BI, and Excel—turning messy data into
            clear business insights.
          </p>
          <p>
            My recent projects include a Zepto inventory analysis (SQL + Power
            BI) and a student performance analysis testing 7 predictors of
            exam scores. I'm currently seeking junior data analyst, graduate
            trainee, or business analyst roles.
          </p>
        </div>
      </div>
      <SqlTerminal />
    </section>
  );
}

export default About;