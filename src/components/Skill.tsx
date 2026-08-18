import { useTranslation } from "react-i18next";
import "../assets/css/portfolio-skill.css";

const PortfolioSkillSection = () => {
	const { t } = useTranslation();

	return (
		<div className="expertise-section">
			<h2
				className="section-title"
				dangerouslySetInnerHTML={{ __html: t("skill.technical_expertise") }}
			/>

			<div className="cards">
				{[
					{
						title: t("skill.frontend_development"),
						icon: "🎨",
						color: "blue",
						skills: [
							["TypeScript", 95],
							["React", 90],
							["CSS & Bootstrap", 75],
							["Web Animation", 55],
						],
					},
					{
						title: t("skill.backend_and_api_development"),
						icon: "⚡",
						color: "green",
						skills: [
							["Java", 95],
							["SpringBoot", 90],
							["Python", 80],
							["Database", 70],
						],
					},
					{
						title: t("skill.ai_agent_and_llm"),
						icon: "🚀",
						color: "yellow",
						skills: [
							["LangChain", 95],
							["Prompt Engineering", 90],
							["Ollama", 80],
							["RAG", 70],
						],
					},
					{
						title: t("skill.devops_and_tools"),
						icon: "🚀",
						color: "purple",
						skills: [
							["Linux", 90],
							["Docker", 85],
							["GitHub", 80],
							["CI/CD", 65],
						],
					},
				].map((card, i) => (
					<div key={i} className={`card ${card.color}`}>
						<h3>
							<span className="icon">{card.icon}</span>
							{card.title}
						</h3>

						<div className="skills-container">
							{card.skills.map(([name, value], idx) => (
								<div key={idx} className="skill">
									<div className="skill-header">
										<span>{name}</span>
										<span>{value}%</span>
									</div>
									<div className="bar">
										<div
											className="fill"
											style={{ width: `${value}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PortfolioSkillSection;
