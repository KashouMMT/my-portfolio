const Certifications = () => {
  return (
    <section className="mt-4">
      <div className="bg-body rounded-3 shadow-sm p-4 p-md-5">
        <h6 className="text-secondary mb-3">Certifications</h6>

        <ul className="list-unstyled mb-0">
          <li className="mb-3">
            ✅ <strong>Microsoft Certified:</strong> Azure Administrator (AZ-104)
            <br />
            <a
              href="https://www.credly.com/badges/example-az104"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none small link-primary"
            >
              🔗 View Certificate
            </a>
          </li>

          <li className="mb-3">
            ✅ <strong>Microsoft Certified:</strong> Windows Server Hybrid Admin (AZ-800)
            <br />
            <a
              href="https://www.credly.com/badges/example-az800"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none small link-primary"
            >
              🔗 View Certificate
            </a>
          </li>

          <li className="mb-3">
            🎓 <strong>IBM IT Support Professional Certificate</strong> — Coursera
            <br />
            <a
              href="https://coursera.org/verify/example-ibm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none small link-primary"
            >
              🔗 View Certificate
            </a>
          </li>

          <li className="mb-3">
            🎓 <strong>Google IT Support Professional Certificate</strong> — Coursera
            <br />
            <a
              href="https://coursera.org/verify/example-google"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none small link-primary"
            >
              🔗 View Certificate
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
