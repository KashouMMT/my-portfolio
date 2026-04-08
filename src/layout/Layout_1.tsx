import AboutMe from "../components/layout_1_components/AboutMe";
import Certifications from "../components/layout_1_components/Certification";
import ContactMe from "../components/layout_1_components/ContactMe";
import Navbar from "../components/layout_1_components/Navbar";
import Projects from "../components/layout_1_components/Projects";
import Skills from "../components/layout_1_components/Skills";

const Layout_1 = () => {
	return (
		<main className="container my-5">
			<div className="rounded-3 shadow p-4 p-md-5">
				<Navbar />

				{/* Use ONE container for the content card */}
				<section className="mt-4">
					<div className="bg-body rounded-3 shadow p-4 p-md-5">
						<div className="row g-4 align-items-start">
							{/* Left column */}

							<div className="col-12 col-lg-6">
								<AboutMe />{" "}
								{/* <-- No .col classes inside AboutMe */}
								<Certifications />
							</div>

							{/* Right column */}
							<div className="col-12 col-lg-6">
								<Skills />
								<Projects />
							</div>
						</div>
						<ContactMe />
					</div>
				</section>
			</div>
		</main>
	);
};

export default Layout_1;
