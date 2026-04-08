import { useEffect } from "react";
import "../../assets/css/portfolio-hero.css";

export default function PortfolioHero() {
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
				<h1 className="title">Myint Myat Thu</h1>

				<p className="role">— Full-Stack Software Developer —</p>

				<p className="description">
					Crafting exceptional digital experiences with modern web
					technologies.
				</p>

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
					<a href="#work" className="my-btn primary">View My Work →</a>
					<a href="#contact" className="my-btn secondary">Get in Touch</a>
				</div>
			</div>
			<div id="scroll-indicator" className="scroll text-center">
				Scroll to explore <br />↓
			</div>
		</div>
	);
}
