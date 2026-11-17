import Layout from "../layout/Layout";

import Hero from "../components/Hero";
import Skill from "../components/Skill";
import History from "../components/History";
import Contact from "../components/Contact";
import Certification from "../components/Certification";

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Skill />
			<History />
			<Certification />
			<Contact />
		</Layout>
	);
};

export default Home;
