import Layout from "../layout/Layout";

import Contact from "../components/Contact";
import BlogContent from "../components/BlogContent";

const Blog = () => {
	return (
		<Layout>
            <BlogContent />
			<Contact />
		</Layout>
	);
};

export default Blog;