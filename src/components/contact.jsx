import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Let's connect. I'm open to analyst roles and freelance work.</p>

      <div className="social-icons">
        <a href="mailto:kidusberhanu928@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/KIDUS-K" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://et.linkedin.com/in/kidus-berhanu-960924321" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://t.me/KB_ye12" target="_blank" rel="noreferrer" aria-label="Telegram">
          <FaTelegram />
        </a>
      </div>
    </section>
  );
}

export default Contact;