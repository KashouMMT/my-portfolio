import my_profile from "../assets/my_profile.jpg";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary rounded-3 shadow p-4 w-100">
      <div className="d-flex align-items-center w-100 gap-4">
        {/* Avatar */}
        <img
          src={my_profile}
          alt="Profile"
          className="rounded-circle border"
          style={{ width: 270, height: 180, objectFit: "cover" }}
        />

        {/* Headline */}
        <div className="flex-grow-1" style={{ minWidth: 0 }}>
          <h1 className="fw-bold mb-1 display-6">Myint Myat Thu</h1>
          <p className="mb-2 text-secondary">Junior Full-Stack Software Developer</p>
          <hr className="w-25 my-2" />
          <p className="mb-0 fs-6">
            Passionate and motivated IT professional with a strong foundation in software
            development. Quick to learn new stacks, comfortable across backend and frontend,
            and focused on building clean, production-ready solutions.
          </p>
          <ul className="list-inline mb-0 mt-2 small">
            <li className="list-inline-item">
              <a
                href="https://linkedin.com/in/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="link-secondary text-decoration-none"
              >
                LinkedIn
              </a>
            </li>
            <li className="list-inline-item text-muted">|</li>
            <li className="list-inline-item">
              <a
                href="mailto:your.email@example.com"
                className="link-secondary text-decoration-none"
              >
                Facebook
              </a>
            </li>
            <li className="list-inline-item text-muted">|</li>
            <li className="list-inline-item">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="link-secondary text-decoration-none"
              >
                GitHub
              </a>
            </li>
          </ul>
          {/* <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">
            💼 Open to Work
          </span> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
