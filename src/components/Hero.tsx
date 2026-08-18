import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "../assets/css/portfolio-hero.css";

const PortfolioHero = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			const scrollText = document.getElementById("scroll-indicator");
			if (window.scrollY > 50 && scrollText) {
				scrollText.style.opacity = "0";
			} else if (scrollText) {
				scrollText.style.opacity = "1";
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="hero-container">
			<div className="grid-bg"></div>
			<div className="glow"></div>

			<div className="content">
				<h1
					className="title"
					dangerouslySetInnerHTML={{ __html: t("hero.name") }}
				/>

				<p
					className="role"
					dangerouslySetInnerHTML={{ __html: t("hero.role") }}
				/>
				<p
					className="description"
					dangerouslySetInnerHTML={{ __html: t("hero.hero_description") }}
				/>

				<div className="tech-stack">
					{[
						"SpringBoot",
						"React",
						"Node.js",
						"Docker",
						"Linux",
						"AI & LLM",
					].map((tech) => (
						<span key={tech} className="tech-pill">
							{tech}
						</span>
					))}
				</div>

				<div className="buttons">
					<a
						href="#work"
						className="my-btn primary"
						dangerouslySetInnerHTML={{
							__html: t("hero.view_my_work_btn"),
						}}
					/>
					<a
						href="#contact"
						className="my-btn secondary"
						dangerouslySetInnerHTML={{
							__html: t("hero.get_in_touch_btn"),
						}}
					/>
				</div>
			</div>
			<div id="scroll-indicator" className="scroll text-center"
			dangerouslySetInnerHTML={{__html: t("hero.scroll_to_explore")}} />
		</div>
	);
};

export default PortfolioHero;
