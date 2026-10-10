const projects = [
  {
    title: "Zepto Inventory Analysis",
    description:
      "Cleaned 3,727 rows of raw e-commerce inventory data down to 1,798 unique products using MySQL. Identified a 12.07% out-of-stock rate, with Biscuits highest at 28.57%. Built a Power BI dashboard visualizing category distribution, out-of-stock rates, and inventory value.",
    tools: ["MySQL", "Power BI", "DAX"],
    github: "https://github.com/KIDUS-K/zepto-inventory-analysis",
    image: "/dashboard_screenshot.png",
  },

  {
    title: "Student Performance Analysis",
    description:
      "Analyzed 6,608 rows of student performance data in MySQL to identify which factors most strongly predict exam scores. Tested 7 predictors and found study hours to be the strongest (7.01-point gap between high and low groups), followed by attendance (5.93) and tutoring (4.00). Built an interactive Power BI dashboard with DAX measures to visualize the findings.",
    tools: ["MySQL", "Power BI", "DAX"],
    github: "https://github.com/KIDUS-K/student-performance-analysis",
    image: "/student_dashboard.png.png",
  },
];

export default projects;