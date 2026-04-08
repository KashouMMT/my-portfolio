import "../../assets/css/portfolio-contact.css";

import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Contact() {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [loading, setLoading] = useState(false);

	const sendEmail = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formRef.current) return;

		const form = formRef.current;
		const name = form.user_name.value.trim();
		const email = form.user_email.value.trim();
		const message = form.message.value.trim();

		// ✅ Validation
		if (!name || !email || !message) {
			alert("Please fill in all fields.");
			return;
		}

		// Simple email check
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			alert("Please enter a valid email.");
			return;
		}

		try {
			setLoading(true);

			await emailjs.sendForm(
				"service_xrpaevj",
				"template_045icwx",
				form,
				"fYWpl5pRS749gMVKh" 
                // Please don't use my API keys. I'll curse you if you do. 
                // I'll do something about this later. 
			);

			alert("Message sent successfully!");

			form.reset(); // ✅ clear form
		} catch (error) {
			console.error(error);
			alert("Failed to send message.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div id="contact" className="contact-section">
			<div className="container">
				<h2 className="section-title">Get In Touch</h2>
				<p className="section-desc">
					Feel free to reach out for collaborations, freelance work,
					or just a friendly chat.
				</p>

				<div className="contact-container">
					{/* LEFT INFO */}
					<div className="contact-info">
						<div className="info-item">
							<span>📧</span>
							<a href="mailto:mmyaatthum925@gmail.com">
								mmyaatthum925@gmail.com
							</a>
						</div>

						<div className="info-item">
							<span>💼</span>
							<a
								href="https://linkedin.com/in/myint-myat-thu-9aa850389"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn Profile
							</a>
						</div>

						<div className="info-item">
							<span>💻</span>
							<a
								href="https://github.com/KashouMMT"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</div>

						<div className="info-item">
							<span>📘</span>
							<a
								href="https://www.facebook.com/kashou.mmt.925"
								target="_blank"
								rel="noopener noreferrer"
							>
								Facebook Profile
							</a>
						</div>
					</div>

					{/* RIGHT FORM */}
					<form
						ref={formRef}
						onSubmit={sendEmail}
						className="contact-form"
					>
						<input name="user_name" placeholder="Your Name" />
						<input name="user_email" placeholder="Your Email" />
						<textarea name="message" placeholder="Your Message" />

						<button type="submit" disabled={loading}>
							{loading ? "Sending..." : "Send Message →"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
