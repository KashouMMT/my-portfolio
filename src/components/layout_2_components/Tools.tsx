import "../../assets/css/portfolio.css";
import "../../assets/css/portfolio-tools.css";

export default function Tools() {
	const tools = [
		{
			title: "Dev Tools",
			items: [
				"VS Code",
				"Eclipse",
				"MySQL Workbench",
				"Postman",
				"IntelliJ IDEA",
				"Git CLI",
			],
		},
		{
			title: "Browsers",
			items: ["Chrome", "Edge", "Safari", "Firefox"],
		},
		{
			title: "Deployment & DevOps",
			items: ["Docker", "NGINX", "Linux (Ubuntu)", "VPS Hosting", "Cloudflare"],
		},
		{
			title: "CI/CD",
			items: [
				"Bash Scripting",
				"Docker Compose",
				"Manual Pipelines",
			],
		},
		{
			title: "Version Control",
			items: ["Git", "GitHub"],
		},
		{
			title: "Databases & Storage",
			items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
		},
		{
			title: "API & Testing",
			items: ["Postman", "REST APIs", "Swagger"],
		},
		{
			title: "AI & LLM Tools",
			items: [
				"ChatGPT",
				"LangChain",
				"Ollama",
				"RAG Pipelines",
				"Prompt Engineering",
			],
		},
	];

	return (
		<div className="my-section">
			<h2 className="section-title">Softwares</h2>
			<p className="section-desc">
				The tools I use on a daily basis to build, test, and deploy
				applications.
			</p>

			<div className="tools-grid">
				{tools.map((group, i) => (
					<div key={i} className="tool-card">
						<h3>{group.title}</h3>

						<div className="tool-items">
							{group.items.map((item, idx) => (
								<span key={idx} className="tool-pill">
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
