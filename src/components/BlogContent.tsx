import profile from "../assets/images/my_profile.jpg";
import "../assets/css/blog-content.css";
import { useTranslation } from "react-i18next";

const BlogContent = () => {

    const { t } = useTranslation();

	return (
		<section className="blog-section">
			<h1 className="blog-title"
            dangerouslySetInnerHTML={{__html: t("blog.blog_title")}} />
			<ul className="blog-meta">
				<li>
					<img className="blog-meta-profile-icon" src={profile} />
				</li>
				<li>
					<span dangerouslySetInnerHTML={{__html: t("blog.date")}} />
				</li>
				<li>
					<span dangerouslySetInnerHTML={{__html: t("hero.name")}} />
				</li>
			</ul>
			<article className="blog-content"
            dangerouslySetInnerHTML={{__html: t("blog.content")}} />
		</section>
	);
};

export default BlogContent;
