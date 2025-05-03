import { Phone, Mail, Globe, Github, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WebDevCard() {
  if (typeof window === 'undefined') return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="rounded-3xl shadow-2xl bg-white dark:bg-gray-950 p-6 sm:p-10 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg mb-5"
            >
              <img
                src="/profile.jpg"
                alt="Laurent Mamba"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center"
            >
              Laurent Mamba
            </motion.h1>
            <p className="text-indigo-600 text-sm sm:text-base font-medium mt-1 text-center">
              Développeur Web Freelance & Consultant Digital
            </p>
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
              Expert en HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, Git & GitHub, SEO, UI/UX Design. J'accompagne les entreprises dans leur transformation numérique avec des solutions web innovantes et sur-mesure. J'ai également une solide expérience en Python et CSS.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full">
              <a href="tel:+243894797454" className="flex items-center justify-center bg-indigo-600 text-white rounded-lg py-2 px-4 text-sm hover:bg-indigo-700 transition">
                <Phone className="mr-2 h-4 w-4" /> Appeler
              </a>
              <a href="mailto:mambalaurent009@gmail.com" className="flex items-center justify-center bg-blue-600 text-white rounded-lg py-2 px-4 text-sm hover:bg-blue-700 transition">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
              <a href="https://wa.me/243816366576" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 text-white rounded-lg py-2 px-4 text-sm hover:bg-green-600 transition">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
              <a href="https://github.com/DIGITALSCHOOL025" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 text-white rounded-lg py-2 px-4 text-sm hover:bg-gray-900 transition">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-700 text-white rounded-lg py-2 px-4 text-sm hover:bg-blue-800 transition">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
              <a href="#" className="flex items-center justify-center bg-purple-600 text-white rounded-lg py-2 px-4 text-sm hover:bg-purple-700 transition">
                <Globe className="mr-2 h-4 w-4" /> Portfolio
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
