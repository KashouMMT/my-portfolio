import "../../assets/css/portfolio-detail.css";

export default function Detail() {
	const skills = [
		"SpringBoot","React","Vite","Node.js","Bootstrap",
		"Java","TypeScript","JavaScript","Python","C/C++","Go",
		"HTML","CSS",
		"MySQL","Postgres","MongoDB","Redis",
		"Docker","Git","GitHub",
		"Nginx","Cloudflare","Bash","PowerShell",
		"RHEL","Debian",
	];

	return (
		<div className="skills-section">
			<h2>Skills</h2>
			<p className="skills-desc">
				Here are the frameworks, libraries, services and runtimes I have experience with.
			</p>

			<div className="skills-list">
				{skills.map((skill, i) => (
					<span key={i} className="skill-item">{skill}</span>
				))}
			</div>
		</div>
	);
}