import { Phone, Mail, Globe, Github, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WebDevCard() {
  if (typeof window === 'undefined') return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-800 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md w-full rounded-3xl shadow-2xl bg-white p-10 border border-gray-100">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl mb-4"
            >
              <img
                src="/profile.jpg"
                alt="Laurent Mamba"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-extrabold text-gray-900"
            >
              Laurent Mamba
            </motion.h1>
            <p className="text-indigo-600 text-base font-semibold mt-1 text-center">
              Développeur Web Freelance & Consultant Digital
            </p>
            <p className="text-center text-gray-600 text-sm mt-3">
              Expert en React, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript. Je conçois des solutions web modernes, performantes et orientées utilisateur avec un accompagnement stratégique digital.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
              <a href="tel:+243894797454" className="w-full flex items-center justify-center bg-indigo-600 text-white rounded-xl py-2 px-4 text-sm hover:bg-indigo-700 transition">
                <Phone className="mr-2 h-4 w-4" /> Appeler
              </a>
              <a href="mailto:mambalaurent009@gmail.com" className="w-full flex items-center justify-center bg-blue-600 text-white rounded-xl py-2 px-4 text-sm hover:bg-blue-700 transition">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
              <a href="https://wa.me/243816366576" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-green-500 text-white rounded-xl py-2 px-4 text-sm hover:bg-green-600 transition">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-gray-800 text-white rounded-xl py-2 px-4 text-sm hover:bg-gray-900 transition">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-blue-700 text-white rounded-xl py-2 px-4 text-sm hover:bg-blue-800 transition">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
              <a href="#" className="col-span-2 w-full flex items-center justify-center bg-purple-600 text-white rounded-xl py-2 px-4 text-sm hover:bg-purple-700 transition">
                <Globe className="mr-2 h-4 w-4" /> Portfolio
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
