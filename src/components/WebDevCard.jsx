import { Phone, Mail, Globe, Github, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import "../style.css";

export default function WebDevCard() {
  if (typeof window === 'undefined') return null;

  return (
    <div className="card-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card-wrapper"
      >
        <div className="card">
          <div className="profile-section">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="profile-image"
            >
              <img
                src="/profile.jpg"
                alt="Laurent Mamba"
                className="image"
              />
            </motion.div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="name"
            >
              Laurent Mamba
            </motion.h1>
            <p className="title">
              Développeur Web Freelance & Consultant Digital
            </p>
            <p className="description">
              Expert en HTML5, CSS3, JavaScript, Php, Python, React, Next.js, Tailwind CSS, Git & GitHub, SEO, UI/UX Design. J'accompagne les entreprises dans leur transformation numérique avec des solutions web innovantes et sur-mesure.
            </p>
            <div className="contact-links">
              <a href={`tel:${import.meta.env.VITE_PHONE}`} className="link call">
				  <Phone className="icon" /> Appeler
			  </a>
			  <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="link email">
				  <Mail className="icon" /> Email
			  </a>

              <a
				  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
				  className="link whatsapp"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  <MessageCircle className="icon" /> WhatsApp
			  </a>

              <a href="https://github.com/DIGITALSCHOOL025" target="_blank" rel="noopener noreferrer" className="link github">
                <Github className="icon" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link linkedin">
                <Linkedin className="icon" /> LinkedIn
              </a>
              <a href="#" className="link portfolio">
                <Globe className="icon" /> Portfolio
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
