const Projects = () => {
  return (
    <>
      <h6 className="text-secondary mt-4 mb-2">Selected Projects</h6>
      <div className="card border-0 shadow-sm mb-2">
        <div className="card-body">
          <div className="fw-semibold">SpringBoot REST & React WebApp</div>
          <div className="text-muted small">Secure CRUD, Interactive WebPage, and layered architecture.</div>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">Java</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">TypeScript</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">HTML</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">CSS</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">SpringBoot</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">React</span>
          <div className="mt-2">
            <a href="#" className="text-decoration-none me-3" target="_blank">🛠️ Still in Progress</a>
            <a href="https://github.com/KashouMMT/React-and-SpringBoot-Project" className="text-decoration-none" target="_blank">💻 Source Code</a>
          </div>
        </div>
      </div>
      <div className="card border-0 shadow-sm mb-2">
        <div className="card-body">
          <div className="fw-semibold">Spring Boot SSR Web</div>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">Java</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">JavaScript</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">HTML</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">CSS</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">SpringBoot</span>
          <div className="text-muted small">
            Server-rendered pages with authentication and role-based access; deployed on Railway.
          </div>
          <div className="mt-2">
            <a href="#" className="text-decoration-none me-3" target="_blank">🛠️ Still in Progress</a>
            <a href="https://github.com/KashouMMT/Gold-Project" className="text-decoration-none" target="_blank">💻 Source Code</a>
          </div>
        </div>
      </div>
      <div className="card border-0 shadow-sm mb-2">
        <div className="card-body">
          <div className="fw-semibold">LangChain AI Chatbot (Python)</div>
          <div className="text-muted small">Prototyped retrieval and prompt chains, RAG retrieval.</div>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">Python</span>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">LangChain</span>
          <div className="mt-2">
            <a href="#" className="text-decoration-none me-3" target="_blank">🛠️ Still in Progress</a>
            <a href="https://github.com/KashouMMT/Chatbot-LLM-AI" className="text-decoration-none" target="_blank">💻 Source Code</a>
          </div>
        </div>
      </div>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="fw-semibold">C++ Tetris</div>
          <div className="text-muted small">Built from scratch using low-level concepts (memory, input loop, collision, scoring).</div>
          <span className="badge rounded-pill text-bg-success ms-1 mt-3 px-3 py-2 shadow-sm">C++</span>
          <div className="mt-2">
            <a href="https://github.com/KashouMMT/TetrisGame-Cpp" className="text-decoration-none" target="_blank">💻 Source Code</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;