export default {
	work_history: "Experience",
	history_description: `Where I have worked and what I have shipped.<br />
You can also `,
	download_my_resume_here: "download my resume here",
	for_japanese_resume: "For Resume in Japanese, click here.",
	view_project: "View Project →",

	projects: "Projects",
	projects_description: "Personal and team projects.",

	entries: {
		ai_platform: {
			title: "AI Chat Platform — LangGraph + FastAPI + React",
			sub_title: "Freelance · Python, LangGraph, PostgreSQL, React, AWS",
			date: "Feb 2026 – Present",
			summary:
				"Started as a personal project; now one codebase powering two live products in Japan.",
			bullets: [
				"career-lamp.com — an AI interviewer that turns a conversation with a job seeker into a Japanese 履歴書 (.xlsx) and 職務経歴書 (.docx).",
				"ai-katazuke.jp — scans room photos or video, matches items against a catalog, plans truck loads and produces a priced estimate and contract.",
				"Plugin architecture: one product-neutral core, each product a plugin with its own tools, prompts and database migrations, deployed separately.",
				"LangGraph agent with PostgreSQL persistence and rolling summarization for long conversations; tokens streamed to the React UI over Server-Sent Events.",
				"Role-based permissions, S3 file storage, CI/CD with GitHub Actions to AWS (EC2, RDS), and 640+ automated tests.",
				"Built with Claude Code under a written engineering agreement: every change ships with tests and updated documentation.",
			],
		},
		freelance_web: {
			title: "Freelance Full-Stack Developer",
			sub_title: "Multilingual web platform for Japanese-run businesses in Thailand",
			date: "Aug 2025 – Present",
			summary:
				"Designed and built a reusable Spring Boot platform on my own, deployed as 5 separate websites.",
			bullets: [
				"Server-rendered with Spring Boot and Thymeleaf, in up to five languages per site (Japanese, English, Thai, Korean, Chinese).",
				"Spring Security admin panel, staff scheduling, blog and news CMS, and real-time chat over WebSocket/SockJS.",
				"MySQL and MongoDB, with Redis for sessions and caching.",
				"Self-hosted on Debian VPS servers with Docker, Nginx, Cloudflare and TLS.",
			],
		},
		dirace: {
			title: "Full-Stack Software Developer",
			sub_title: "DIR-ACE Technology",
			date: "2024 – 2025 (1 year)",
			bullets: [
				"Developed and maintained full-stack web applications with Spring Boot and modern frontend frameworks.",
				"Worked across the development lifecycle: API design, database optimization and performance improvements.",
				"Worked closely with the team to deliver reliable, scalable solutions.",
			],
		},
		go_pattaya: {
			title: "Go Pattaya",
			sub_title: "Travel platform (React + Spring Boot)",
			date: "Nov 2025",
			bullets: [
				"Full-stack travel web application for exploring attractions and planning trips in Pattaya, Thailand.",
				"Interactive UI in React, REST APIs in Spring Boot.",
				"Location-based features, with attention to accessibility and performance.",
			],
		},
		dat_growth_hub: {
			title: "DAT Growth Hub",
			sub_title: "Team project during OJT at DIR-ACE Technology (Spring Boot)",
			date: "Jul 2024",
			bullets: [
				"Built a web platform with Spring Boot as part of a team.",
				"Designed RESTful APIs and integrated them with the frontend.",
				"Took part in feature planning, debugging and deployment.",
			],
		},
		tetris: {
			title: "Tetris in C/C++",
			sub_title: "Terminal-based game",
			date: "Apr 2024",
			bullets: [
				"A fully playable Tetris that runs in the terminal, written in C/C++.",
				"Piece rotation, collision detection, line clearing and scoring.",
				"Focused on low-level memory management and efficient console rendering.",
			],
		},
		portfolio: {
			title: "Portfolio Website",
			sub_title: "This site — React & TypeScript",
			date: "Ongoing",
			bullets: [
				"React 19 and TypeScript, in English and Japanese with i18next.",
				"Contact form with EmailJS; deployed to GitHub Pages.",
			],
		},
	},
};
