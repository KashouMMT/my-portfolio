import { useTranslation } from "react-i18next";

const Certification = () => {
	const { t } = useTranslation();

	const certs = [
		{
			title: t("certification.title_1"),
			sub_title: t("certification.sub_title_1"),
			date: t("certification.date_1"),
			body: t("certification.body_1"),
			link: "https://drive.google.com/file/d/1jCc35v4MvMMY32mQOFDMgmStl_0FmrxX/view?usp=sharing",
		},
		{
			title: t("certification.title_13"),
			sub_title: t("certification.sub_title_13"),
			date: t("certification.date_13"),
			body: t("certification.body_13"),
			link: "https://drive.google.com/file/d/1jAQf7TwxItpkemUYYqgfSJfgTPXVEES7/view?usp=drive_link",
		},
		{
			title: t("certification.title_10"),
			sub_title: t("certification.sub_title_10"),
			date: t("certification.date_10"),
			body: t("certification.body_10"),
			link: "https://coursera.org/share/9862b27575c525a103fee4c91757926d",
		},
		{
			title: t("certification.title_11"),
			sub_title: t("certification.sub_title_11"),
			date: t("certification.date_11"),
			body: t("certification.body_11"),
			link: "https://coursera.org/share/a06ee4d5134d97d2044dd96b44094ef2",
		},
		{
			title: t("certification.title_12"),
			sub_title: t("certification.sub_title_12"),
			date: t("certification.date_12"),
			body: t("certification.body_12"),
			link: "https://coursera.org/share/6393143f92743de10a93fc3ed7ee37b1"
		},
		{
			title: t("certification.title_6"),
			sub_title: t("certification.sub_title_6"),
			date: t("certification.date_6"),
			body: t("certification.body_6"),
			link: "https://coursera.org/share/e022359f119eab98af6226401138b3ef",
		},
		{
			title: t("certification.title_7"),
			sub_title: t("certification.sub_title_7"),
			date: t("certification.date_7"),
			body: t("certification.body_7"),
			link: "https://coursera.org/share/c62d2108cf2510e31ab41c1e49086ee6",
		},
		{
			title: t("certification.title_9"),
			sub_title: t("certification.sub_title_9"),
			date: t("certification.date_9"),
			body: t("certification.body_9"),
			link: "https://coursera.org/share/2f3089bbf9d538b2d9befd37a364cf2a",
		},
		{
			title: t("certification.title_8"),
			sub_title: t("certification.sub_title_8"),
			date: t("certification.date_8"),
			body: t("certification.body_8"),
			link: "https://coursera.org/share/e32c19970a1a5bc36089a135a5bf7733",
		},
	];

	return (
		<div id="work" className="my-section">
			<h2
				dangerouslySetInnerHTML={{ __html: t("certification.title") }}
			/>
			<p>
				<span
					dangerouslySetInnerHTML={{
						__html: t("certification.certification_description"),
					}}
				/>
			</p>
			<div className="timeline">
				{certs.map((cert, i) => (
					<div key={i} className="timeline-item">
						<div className="timeline-content">
							<h3>{cert.title}</h3>
							<p className="company">{cert.sub_title}</p>
							<p className="date">{cert.date}</p>
							<p>{cert.body}</p>
							{cert.link && (
								<a
									href={cert.link}
									target="_blank"
									className="project-link"
									dangerouslySetInnerHTML={{
										__html: t("certification.view_link"),
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

export default Certification;
