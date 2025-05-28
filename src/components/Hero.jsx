import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.jpg"; // ודאי שהתמונה קיימת
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-8 py-24 gap-12"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg w-52 h-52 md:w-64 md:h-64"
      >
        <img src={profileImg} alt="Dikla Stern" className="w-full h-full object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Dikla
        </h1>

        <TypeAnimation
          sequence={[
            "System Administrator 🖥️",
            1500,
            "Cybersecurity Student 🔐",
            1500,
            "Problem Solver 🧠",
            1500,
            "Future CISO 🚀",
            1500,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-2xl text-cyan-300 font-mono"
          repeat={Infinity}
        />

        <p className="mt-6 text-gray-300 text-sm leading-relaxed">
          Passionate about infrastructure, automation, and cyber defense. Skilled in Linux, firewalls, incident response, and building secure systems.
        </p>

        {/* Resume Request Button */}
        <a
          href="mailto:diklasternx@gmail.com?subject=Requesting Your Resume"
          className="mt-6 inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
        >
          <Download className="w-4 h-4" />
          Request Resume
        </a>

      </motion.div>
    </section>
  );
}
