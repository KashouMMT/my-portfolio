const Skills = () => {
  return (
    <div className="rounded-3 shadow p-4 p-md-5">
      <h5 className="text-uppercase text-secondary mb-3">Skills</h5>

      <div className="mb-3">
        <div className="small text-uppercase text-muted">Languages</div>
        <div className="d-flex flex-wrap gap-2 mt-1">
          <span className="badge text-bg-dark">Java</span>
          <span className="badge text-bg-dark">JavaScript</span>
          <span className="badge text-bg-dark">TypeScript</span>
          <span className="badge text-bg-dark">C++</span>
          <span className="badge text-bg-dark">C</span>
          <span className="badge text-bg-dark">Python</span>
          <span className="badge text-bg-dark">SQL</span>
        </div>
      </div>

      <div className="mb-3">
        <div className="small text-uppercase text-muted">Frameworks</div>
        <div className="d-flex flex-wrap gap-2 mt-1">
          <span className="badge text-bg-primary">Spring Boot</span>
          <span className="badge text-bg-primary">Spring MVC</span>
          <span className="badge text-bg-primary">React</span>
          <span className="badge text-bg-primary">Django</span>
        </div>
      </div>

      <div className="mb-3">
        <div className="small text-uppercase text-muted">Tools & Platforms</div>
        <div className="d-flex flex-wrap gap-2 mt-1">
          <span className="badge text-bg-secondary">Git</span>
          <span className="badge text-bg-secondary">GitHub</span>
          <span className="badge text-bg-secondary">Docker</span>
          <span className="badge text-bg-secondary">Linux</span>
          <span className="badge text-bg-secondary">Google Cloud</span>
          <span className="badge text-bg-secondary">Railway</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
