import { useTranslation } from "react-i18next";
import "../assets/css/portfolio-history.css";
import "../assets/css/portfolio.css";

type EntryLink = {
	href: string;
	// Shown as the link text; without it the link reads "View Project →".
	label?: string;
};

type Entry = {
	// Key under history.entries.* in the i18n files.
	id: string;
	links?: EntryLink[];
};

// Newest and most relevant first.
const experience: Entry[] = [
	{
		id: "ai_platform",
		links: [
			{ href: "https://career-lamp.com", label: "career-lamp.com ↗" },
			{ href: "https://ai-katazuke.jp", label: "ai-katazuke.jp ↗" },
		],
	},
	{ id: "freelance_web" },
	{ id: "dirace", links: [{ href: "https://www.diracetechnology.com/" }] },
];

const projects: Entry[] = [
	{ id: "go_pattaya", links: [{ href: "https://github.com/KashouMMT/pattaya-japan" }] },
	{ id: "dat_growth_hub", links: [{ href: "https://github.com/KashouMMT/DAT-Growth-Hub-3" }] },
	{ id: "tetris", links: [{ href: "https://github.com/KashouMMT/TetrisGame-Cpp" }] },
	{ id: "portfolio", links: [{ href: "https://github.com/KashouMMT/my-portfolio" }] },
];

const History = () => {
	const { t } = useTranslation();

	const renderTimeline = (entries: Entry[]) => (
		<div className="timeline">
			{entries.map(({ id, links }) => {
				const key = `history.entries.${id}`;
				const raw: unknown = t(`${key}.bullets`, { returnObjects: true });
				const bullets = Array.isArray(raw) ? (raw as string[]) : null;
				const summary = t(`${key}.summary`, { defaultValue: "" });

				return (
					<div key={id} className="timeline-item">
						<div className="timeline-content">
							<h3>{t(`${key}.title`)}</h3>
							<p className="company">{t(`${key}.sub_title`)}</p>
							<p className="date">{t(`${key}.date`)}</p>
							{summary && <p className="summary">{summary}</p>}
							{bullets && (
								<ul className="entry-bullets">
									{bullets.map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
								</ul>
							)}
							{links && (
								<div className="entry-links">
									{links.map((link) => (
										<a
											key={link.href}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="project-link"
										>
											{link.label ?? t("history.view_project")}
										</a>
									))}
								</div>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);

	return (
		<div id="work" className="my-section">
			<h2 dangerouslySetInnerHTML={{ __html: t("history.work_history") }} />
			<p>
				<span
					dangerouslySetInnerHTML={{
						__html: t("history.history_description"),
					}}
				/>
				<a
					href={`${import.meta.env.BASE_URL}full-stack-software-developer.pdf`}
					target="_blank"
					rel="noopener noreferrer"
					className="resume-link"
					dangerouslySetInnerHTML={{
						__html: t("history.download_my_resume_here"),
					}}
				/>
				<br />
				<a
					href={`${import.meta.env.BASE_URL}full-stack-software-developer-japanese.pdf`}
					target="_blank"
					rel="noopener noreferrer"
					className="resume-link"
					dangerouslySetInnerHTML={{
						__html: t("history.for_japanese_resume"),
					}}
				/>
			</p>
			{renderTimeline(experience)}

			<h2 className="history-subheading">{t("history.projects")}</h2>
			<p>{t("history.projects_description")}</p>
			{renderTimeline(projects)}
		</div>
	);
};

export default History;
