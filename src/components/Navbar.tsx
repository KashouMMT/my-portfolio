import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../assets/css/portfolio-navbar.css";

const Navbar = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className="site-navbar">
			<Link to="/my-portfolio/" className="site-logo">
				{t("hero.name")}
			</Link>
			<ul className="site-content">
				<li className="site-link-li">
					<Link to="/my-portfolio/" className="site-link">
						{t("navbar.home")}
					</Link>
				</li>
				<li className="site-link-li">
					<Link to="/my-portfolio/blog" className="site-link">
						{t("navbar.blog")}
					</Link>
				</li>
				<li className="site-link-li">
					<button
						className="site-link language-link"
						onClick={() => i18n.changeLanguage("en")}
					>
						English
					</button>
					{ "/" }
					<button
						className="site-link language-link"
						onClick={() => i18n.changeLanguage("ja")}
					>
						日本語
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
