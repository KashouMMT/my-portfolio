import Hero from "../components/layout_2_components/Hero";
import Skill from "../components/layout_2_components/Skill";
import Detail from "../components/layout_2_components/Detail";
import History from "../components/layout_2_components/History";
import Tools from "../components/layout_2_components/Tools";
import Contact from "../components/layout_2_components/Contact";

const Layout_2 = () => {
	return (
		<>
			<Hero />
			<div className="container-fluid justify-content-center align-items-center">
				<Skill />
				<Detail />
				<History />
				<Tools />
				<Contact />
			</div>
		</>
	);
};

export default Layout_2;
