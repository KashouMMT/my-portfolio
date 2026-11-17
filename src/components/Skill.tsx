import { useTranslation } from "react-i18next";
import "../assets/css/portfolio-skill.css";

// One list of what has actually shipped in a project on this page.
// No self-rated percentages: a reader cannot verify them, the projects below can.
const categories = [
	{
		titleKey: "skill.ai_and_llm",
		icon: "🤖",
		color: "yellow",
		items: [
			"Python",
			"LangChain",
			"LangGraph",
			"FastAPI",
			"OpenAI-compatible APIs",
			"Ollama",
			"Vision models",
			"Prompt engineering",
			"Server-Sent Events",
		],
	},
	{
		titleKey: "skill.backend",
		icon: "⚡",
		color: "green",
		items: [
			"Java",
			"Spring Boot",
			"Spring Security",
			"Thymeleaf",
			"REST APIs",
			"WebSocket / SockJS",
			"Go",
			"C/C++",
		],
	},
	{
		titleKey: "skill.frontend",
		icon: "🎨",
		color: "blue",
		items: [
			"TypeScript",
			"React",
			"Vite",
			"TanStack Query",
			"i18next",
			"JavaScript",
			"HTML & CSS",
			"Bootstrap",
		],
	},
	{
		titleKey: "skill.databases",
		icon: "🗄️",
		color: "cyan",
		items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Schema migrations"],
	},
	{
		titleKey: "skill.devops_and_cloud",
		icon: "🛠️",
		color: "purple",
		items: [
			"Linux (Debian)",
			"Docker",
			"Docker Compose",
			"Nginx",
			"AWS (EC2, RDS, S3, SES)",
			"GitHub Actions",
			"Cloudflare",
			"TLS/SSL",
		],
	},
	{
		titleKey: "skill.engineering_practice",
		icon: "🧭",
		color: "orange",
		items: [
			"Claude Code",
			"pytest",
			"Ruff",
			"ESLint",
			"Git & GitHub",
			"Technical documentation",
		],
	},
];

const PortfolioSkillSection = () => {
	const { t } = useTranslation();

	return (
		<div className="expertise-section">
			<h2
				className="section-title"
				dangerouslySetInnerHTML={{ __html: t("skill.technical_expertise") }}
			/>
			<p className="expertise-desc">{t("skill.description")}</p>

			<div className="cards">
				{categories.map((category) => (
					<div key={category.titleKey} className={`card ${category.color}`}>
						<h3>
							<span className="icon">{category.icon}</span>
							{t(category.titleKey)}
						</h3>

						<div className="skill-chips">
							{category.items.map((item) => (
								<span key={item} className="skill-chip">
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PortfolioSkillSection;
