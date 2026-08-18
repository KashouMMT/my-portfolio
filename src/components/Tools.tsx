import "../assets/css/portfolio.css";
import "../assets/css/portfolio-tools.css";
import { useTranslation } from "react-i18next";

const Tools = () => {

	const { t } = useTranslation();

	const tools = [
		{
			title: t("tools.dev_tools"),
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
			title: t("tools.browsers"),
			items: ["Chrome", "Edge", "Safari", "Firefox"],
		},
		{
			title: t("tools.deployment_and_devops"),
			items: ["Docker", "NGINX", "Linux", "VPS", "Cloudflare"],
		},
		{
			title: t("tools.ci_cd"),
			items: [
				"SSH",
				"Bash Scripting",
				"Docker Compose",
				"Manual Pipelines",
			],
		},
		{
			title: t("tools.version_control"),
			items: ["Git", "GitHub", "TortoiseSVN"],
		},
		{
			title: t("tools.databases_and_storage"),
			items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
		},
		{
			title: t("tools.api_and_testing"),
			items: ["SpringBoot REST API","FastAPI", "Postman", "REST APIs", "Swagger"],
		},
		{
			title: t("tools.ai_and_llm_tools"),
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
			<h2 className="section-title"
			dangerouslySetInnerHTML={{__html: t("tools.softwares")}} />
			<p className="section-desc"
			dangerouslySetInnerHTML={{__html: t("tools.tools_description")}} />

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

export default Tools;