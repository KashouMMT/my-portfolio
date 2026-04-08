import "../../assets/css/portfolio-history.css";
import "../../assets/css/portfolio.css";

export default function History() {
	const jobs = [
		{
			title: "Tetris in C/C++",
			sub_title: "Terminal-based game project",
			date: "2024-04-27",
			body: `Developed a fully functional Tetris game using C/C++ in a terminal environment. 
Implemented game logic including piece rotation, collision detection, line clearing, and score tracking. 
Focused on low-level memory management and efficient rendering within a console interface.`,
			link: "https://github.com/KashouMMT/TetrisGame-Cpp",
		},
		{
			title: "DAT Growth Hub",
			sub_title: "Team-based Spring Boot web application",
			date: "2024-07-30",
			body: `Collaborated in a team to build a scalable web platform using Spring Boot. 
Designed RESTful APIs and integrated frontend components to deliver a responsive user experience. 
Participated in feature planning, debugging, and deployment workflows.`,
			link: "https://github.com/KashouMMT/DAT-Growth-Hub-3",
		},
		{
			title: "Full Stack Software Developer",
			sub_title: "DIR-ACE Technology",
			date: "1 Year",
			body: `Developed and maintained full-stack web applications using Spring Boot and modern frontend frameworks. 
Contributed across the software development lifecycle, including API design, database optimization, and performance improvements. 
Worked closely with teams to deliver reliable and scalable solutions.`,
		},
		{
			title: "Go Pattaya",
			sub_title: "Travel platform (React + Spring Boot)",
			date: "2025-11-26",
			body: `Built a full-stack travel web application to help users explore attractions and plan trips in Pattaya, Thailand. 
Implemented interactive UI with React and developed REST APIs with Spring Boot. 
Integrated location-based features and optimized user experience for accessibility and performance.`,
			link: "https://github.com/KashouMMT/pattaya-japan",
		},
		{
			title: "Freelancer",
			sub_title: "Self-employed developer",
			date: "Present",
			body: `Independently developed and deployed full-stack applications using React (TypeScript) and Spring Boot. 
Managed client requirements, handled Linux-based deployments, and delivered multiple projects end-to-end. 
Focused on clean architecture, maintainability, and real-world usability.`,
		},
	];

	return (
		<div id="work" className="my-section">
			<h2>Work History</h2>
			<p>
				Below you will find a summary of my past employment experience
				and projects I made. <br />
				Additionally, if you require, you can{" "}
				<a
					href="/my-portfolio/full-stack-software-developer.pdf"
					className="resume-link"
				>
					download my resume here
				</a>
				.
			</p>
			<div className="timeline">
				{jobs.map((job, i) => (
					<div key={i} className="timeline-item">
						<div className="timeline-content">
							<h3>{job.title}</h3>
							<p className="company">{job.sub_title}</p>
							<p className="date">{job.date}</p>
							<p>{job.body}</p>
							{job.link && (
								<a
									href={job.link}
									target="_blank"
									className="project-link"
								>
									View Project →
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
