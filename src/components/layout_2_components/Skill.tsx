import "../../assets/css/portfolio-skill.css";

export default function PortfolioSkillSection() {
	return (
		<div className="expertise-section">
			<h2 className="section-title">Technical Expertise</h2>

			<div className="cards">
				{[
					{
						title: "Frontend Development",
						icon: "🎨",
						color: "blue",
						skills: [
							["React", 90],
							["TypeScript", 95],
							["CSS & Bootstrap", 75],
							["Web Animation", 55],
						],
					},
					{
						title: "Backend & APIs Development",
						icon: "⚡",
						color: "green",
						skills: [
							["SpringBoot", 90],
							["Java", 95],
							["C/C++", 75],
							["Database", 80],
						],
					},
                    {
						title: "AI Agent & LLM",
						icon: "🚀",
						color: "yellow",
						skills: [
							["LangChain", 95],
							["Ollama", 80],
							["RAG", 85],
							["Prompt Engineering", 90],
						],
					},
					{
						title: "DevOps & Tools",
						icon: "🚀",
						color: "purple",
						skills: [
                            ["Docker", 85],
							["Linux", 90],
							["CI/CD", 80],
							["AWS", 82],
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
}
