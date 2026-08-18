import { useTranslation } from "react-i18next";

import "../assets/css/portfolio-about.css";

const About = () => {
	const { t } = useTranslation();

	const skills = [
		"SpringBoot","React","Vite","NPM","PIP","Node.js","Bootstrap",
		"Java","TypeScript","JavaScript","Python","C/C++","Go",
		"HTML","CSS",
		"MySQL","Postgres","MongoDB","Redis",
		"Docker","Git","GitHub",
		"Nginx","Cloudflare","Bash","PowerShell",
		"RHEL","Debian",
		"TLS/SSL","CSRF","CORS",
		"WebSocket","SockJS",
	];

	return (
		<div className="skills-section">
			<h2 dangerouslySetInnerHTML={{__html: t("about.skills")}} />
			<p className="skills-desc"
			dangerouslySetInnerHTML={{__html: t("about.about_description")}} />

			<div className="skills-list">
				{skills.map((skill, i) => (
					<span key={i} className="skill-item">{skill}</span>
				))}
			</div>
		</div>
	);
}

export default About;