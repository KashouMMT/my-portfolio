import Layout from "../layout/Layout";

import Hero from "../components/Hero";
import Skill from "../components/Skill";
import About from "../components/About";
import History from "../components/History";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Certification from "../components/Certification";

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Skill />
			<About />
			<Tools />
			<History />
			<Certification />
			<Contact />
		</Layout>
	);
};

export default Home;
