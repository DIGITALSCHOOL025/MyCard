import { Phone, Mail, Globe, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function WebDevCard() {
  if (typeof window === 'undefined') return null; // Ensure we're in a browser environment

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md w-full rounded-2xl shadow-2xl bg-white p-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
              <img
                src="maphoto.jpg"
                alt="Jean Dupont"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mt-4">Jean Dupont</h1>
            <p className="text-gray-500 text-sm">Développeur Web Freelance</p>
            <p className="text-center text-gray-600 text-sm mt-3">
              Spécialisé en React, Next.js & Tailwind CSS. Création de sites modernes et performants.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6 w-full">
              <button className="w-full flex items-center justify-center border rounded-md py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                <Phone className="mr-2 h-4 w-4" /> Appeler
              </button>
              <button className="w-full flex items-center justify-center border rounded-md py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                <Mail className="mr-2 h-4 w-4" /> Email
              </button>
              <button className="w-full flex items-center justify-center border rounded-md py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </button>
              <button className="w-full flex items-center justify-center border rounded-md py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </button>
              <button className="col-span-2 w-full flex items-center justify-center border rounded-md py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                <Globe className="mr-2 h-4 w-4" /> Portfolio
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
