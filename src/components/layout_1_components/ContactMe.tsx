const ContactMe = () => {
  return (
    <section className="mt-4">
      <div className="bg-light rounded-3 shadow-sm p-4 p-md-5">
        <h6 className="text-secondary mb-3">Get in Touch</h6>
        <p className="text-muted small mb-4">
          Interested in collaborating or hiring me? Feel free to reach out through any of the following:
        </p>

        <dl className="row">
          {/* Email */}
          <dt className="col-sm-3 fw-semibold text-secondary">Email</dt>
          <dd className="col-sm-9 mb-3">
            <a href="mailto:mmyaatthum925@gmail.com" className="text-decoration-none d-block">
              mmyaatthum925@gmail.com
            </a>
            <a href="mailto:mmyaatthummt005@gmail.com" className="text-decoration-none d-block">
              mmyaatthummt005@gmail.com
            </a>
          </dd>

          {/* Phone */}
          <dt className="col-sm-3 fw-semibold text-secondary">Phone</dt>
          <dd className="col-sm-9 mb-3">
            <span className="d-block">+66 6 3435 6148 (Thai)</span>
            <span className="d-block">+95 9 9742 12903 (Myanmar) </span>
          </dd>

          {/* Location */}
          <dt className="col-sm-3 fw-semibold text-secondary">Location</dt>
          <dd className="col-sm-9 mb-3">
            Thai, Bangkok (Currently)
          </dd>

          {/* Links */}
          <dt className="col-sm-3 fw-semibold text-secondary">Profiles</dt>
          <dd className="col-sm-9">
            <a
              href="https://www.linkedin.com/in/myint-myat-thu-9aa850389/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none me-3"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/KashouMMT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none me-3"
            >
              GitHub
            </a>
            <a
              href="mailto:mmyaatthum925@gmail.com"
              className="text-decoration-none"
            >
              Email Me
            </a>
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default ContactMe;
