function Skills() {
  const skills = ["SQL", "Power BI", "Excel", "DAX", "Data Cleaning", "Data Visualization"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;