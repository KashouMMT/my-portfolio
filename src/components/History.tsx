import { useTranslation } from "react-i18next";
import "../assets/css/portfolio-history.css";
import "../assets/css/portfolio.css";

const History = () => {
	const { t } = useTranslation();

	const jobs = [
		{
			title: t("history.title_1"),
			sub_title: t("history.sub_title_1"),
			date: t("history.date_1"),
			body: t("history.body_1"),
			link: "https://github.com/KashouMMT/my-portfolio",
		},
		{
			title: t("history.title_13"),
			sub_title: t("history.sub_title_13"),
			date: t("history.date_13"),
			body: t("history.body_13"),
		},
		{
			title: t("history.title_12"),
			sub_title: t("history.sub_title_12"),
			date: t("history.date_12"),
			body: t("history.body_12"),
		},
		{
			title: t("history.title_11"),
			sub_title: t("history.sub_title_11"),
			date: t("history.date_11"),
			body: t("history.body_11"),
		},
		{
			title: t("history.title_10"),
			sub_title: t("history.sub_title_10"),
			date: t("history.date_10"),
			body: t("history.body_10"),
			link: "https://nureruhitozuma.com",
		},
		{
			title: t("history.title_9"),
			sub_title: t("history.sub_title_9"),
			date: t("history.date_9"),
			body: t("history.body_9"),
			link: "https://gift-bangkok.com",
		},
		{
			title: t("history.title_8"),
			sub_title: t("history.sub_title_8"),
			date: t("history.date_8"),
			body: t("history.body_8"),
			link: "https://omotenashi-bangkok.com",
		},
		{
			title: t("history.title_7"),
			sub_title: t("history.sub_title_7"),
			date: t("history.date_7"),
			body: t("history.body_7"),
			link: "https://en-bangkok.com/",
		},
		{
			title: t("history.title_6"),
			sub_title: t("history.sub_title_6"),
			date: t("history.date_6"),
			body: t("history.body_6"),
			link: "https://clubartemis-thai.com",
		},
		{
			title: t("history.title_5"),
			sub_title: t("history.sub_title_5"),
			date: t("history.date_5"),
			body: t("history.body_5"),
			link: "https://github.com/KashouMMT/pattaya-japan",
		},
		{
			title: t("history.title_4"),
			sub_title: t("history.sub_title_4"),
			date: t("history.date_4"),
			body: t("history.body_4"),
			link: "https://www.diracetechnology.com/",
		},
		{
			title: t("history.title_3"),
			sub_title: t("history.sub_title_3"),
			date: t("history.date_3"),
			body: t("history.body_3"),
			link: "https://github.com/KashouMMT/DAT-Growth-Hub-3",
		},
		{
			title: t("history.title_2"),
			sub_title: t("history.sub_title_2"),
			date: t("history.date_2"),
			body: t("history.body_2"),
			link: "https://github.com/KashouMMT/TetrisGame-Cpp",
		},
	];

	return (
		<div id="work" className="my-section">
			<h2
				dangerouslySetInnerHTML={{ __html: t("history.work_history") }}
			/>
			<p>
				<span
					dangerouslySetInnerHTML={{
						__html: t("history.history_description"),
					}}
				/>
				<a
					href="/my-portfolio/full-stack-software-developer.pdf"
					className="resume-link"
					dangerouslySetInnerHTML={{
						__html: t("history.download_my_resume_here"),
					}}
				/>
				<br />
				<a
					href="/my-portfolio/full-stack-software-developer-japanese.pdf"
					className="resume-link"
					dangerouslySetInnerHTML={{
						__html: t("history.for_japanese_resume"),
					}}
				/>
			</p>
			<div className="timeline">
				{jobs.map((job, i) => (
					<div key={i} className="timeline-item">
						<div className="timeline-content">
							<h3>{job.title}</h3>
							<p className="company">{job.sub_title}</p>
							<p className="date">{job.date}</p>
							<p>{job.body}</p>
							{job.link && (
								<a
									href={job.link}
									target="_blank"
									className="project-link"
									dangerouslySetInnerHTML={{
										__html: t("history.view_project"),
									}}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default History;
