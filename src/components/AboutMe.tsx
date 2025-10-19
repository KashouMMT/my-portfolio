const AboutMe = () => {
  return (
    <div className="rounded-3 shadow p-4 p-md-5">
      <h5 className="text-uppercase text-secondary mb-3">About Me</h5>
      <p className="mb-3">
        I’m a junior full-stack developer with hands-on experience building REST APIs,
        server-side rendered apps, and practical AI prototypes. I started with Java
        and grew into Spring MVC/Spring Boot, then expanded to React for the UI and
        Python for automation/AI. I’ve shipped production code, participated in the SDLC,
        and deployed client apps on modern PaaS and cloud.
      </p>

      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item px-0">
          <strong>Experience:</strong> 1 year at DAT (DIR-ACE Technology) — full-stack junior dev<br />
          <a
            href="https://www.diracetechnology.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            https://www.diracetechnology.com/
          </a>
        </li>
        <li className="list-group-item px-0">
          <strong>Systems:</strong> Window, Linux (Debian/Ubuntu, RHEL/CentOS), Docker
        </li>
        <li className="list-group-item px-0">
          <strong>Workflow:</strong> Git/GitHub, SDLC, code reviews, basic CI/CD
        </li>
        <li className="list-group-item px-0">
          <strong>Deployments:</strong> Google Cloud, Railway, containerized services
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
