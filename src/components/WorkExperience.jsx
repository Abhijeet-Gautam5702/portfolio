const experiences = [
  {
    company: "Voxxi Labs, Inc.",
    role: "Full Stack Developer",
    period: "Aug - Oct '25",
    description: "Developing robust and scalable web applications with high performance.",
    location: "Remote",
  },
  {
    company: "Previous Company",
    role: "Backend Engineer",
    period: "Jan - July '25",
    description: "Built microservices and optimized database queries for core banking solutions.",
    location: "Pune, India",
  },
];

const WorkExperience = () => {
  return (
    <div className="mt-16 px-6 md:px-12 space-y-8">
      <h2 className="text-xl font-bold text-foreground">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative flex flex-col md:flex-row md:items-start justify-between p-4 md:p-6 bg-card/50 border border-border rounded-xl hover:border-muted transition-colors duration-300"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
                  {exp.company}
                </h3>
                <span className="text-[10px] md:text-xs px-2 py-0.5 bg-border rounded-full text-muted">
                  {exp.location}
                </span>
              </div>
              <p className="text-sm text-muted/80">{exp.role}</p>
              <p className="text-sm text-muted mt-2 max-w-xl">{exp.description}</p>
            </div>
            <div className="mt-2 md:mt-0 text-xs font-mono text-muted uppercase tracking-wider">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
