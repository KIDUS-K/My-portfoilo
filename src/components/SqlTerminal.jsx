import { useState, useEffect } from "react";

const queries = [
  `SELECT name, exam_score\nFROM students\nWHERE study_hours > 30\nORDER BY exam_score DESC;`,
  `SELECT category, AVG(exam_score)\nFROM student_performance\nGROUP BY category;`,
  `SELECT * FROM projects\nWHERE tools = 'Power BI';`,
];

function SqlTerminal() {
  const [queryIndex, setQueryIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const current = queries[queryIndex];
    let i = 0;

    const typing = setInterval(() => {
      setDisplayed(current.slice(0, i + 1));
      i++;
      if (i >= current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setQueryIndex((prev) => (prev + 1) % queries.length);
          setDisplayed("");
        }, 2500);
      }
    }, 45);

    return () => clearInterval(typing);
  }, [queryIndex]);

  return (
    <div className="sql-terminal">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="terminal-title">query.sql</span>
      </div>
      <pre className="terminal-body">
        <code>{displayed}</code>
        <span className="cursor">▋</span>
      </pre>
    </div>
  );
}

export default SqlTerminal;