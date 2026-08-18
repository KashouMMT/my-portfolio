import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

import "../assets/css/portfolio-contact.css";

const Contact = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [loading, setLoading] = useState(false);

	const { t } = useTranslation();

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
				"fYWpl5pRS749gMVKh",
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
			<h2 className="section-title"
			dangerouslySetInnerHTML={{__html: t("contact.get_in_touch")}} />
			<p className="section-desc"
			dangerouslySetInnerHTML={{__html: t("contact.contact_description")}} />

			<div className="contact-container">
				<div className="contact-info">
					<div className="info-item">
						<span>📧</span>
						<a href="mailto:mmyaatthum925@gmail.com"
						dangerouslySetInnerHTML={{__html: t("contact.email")}} />
					</div>

					<div className="info-item">
						<span>💼</span>
						<a
							href="https://linkedin.com/in/myint-myat-thu-9aa850389"
							target="_blank"
							rel="noopener noreferrer"
							dangerouslySetInnerHTML={{__html: t("contact.linkin")}} />
					</div>

					<div className="info-item">
						<span>💻</span>
						<a
							href="https://github.com/KashouMMT"
							target="_blank"
							rel="noopener noreferrer"
							dangerouslySetInnerHTML={{__html: t("contact.github")}} />
					</div>

					<div className="info-item">
						<span>📘</span>
						<a
							href="https://www.facebook.com/kashou.mmt.925"
							target="_blank"
							rel="noopener noreferrer"
							dangerouslySetInnerHTML={{__html: t("contact.facebook")}} />
					</div>
				</div>

				<form
					ref={formRef}
					onSubmit={sendEmail}
					className="contact-form"
				>
					<input name="user_name" placeholder={t("contact.your_name")} />
					<input name="user_email" placeholder={t("contact.your_email")} />
					<textarea name="message" placeholder={t("contact.your_message")} />
					<button type="submit" disabled={loading}>
						{loading ? t("contact.sending") : t("contact.send_message")}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
