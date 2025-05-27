import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:diklastern@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/diklastern",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/diklastern",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gray-950 py-24 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400 mb-10"
        >
          Get in Touch
        </motion.h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {links.map(({ icon: Icon, href, label }, idx) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group bg-gray-800 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg border border-cyan-500/30 transition-transform duration-300 hover:scale-110 focus:outline-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Icon className="w-6 h-6 text-cyan-300 group-hover:text-white" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
