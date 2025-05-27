import { motion } from "framer-motion";
import {
    ShieldCheck,
    Terminal,
    Brain,
    Bug,
    Server,
    Code,
    Flame,
    ClipboardCheck,
    Users,
  } from "lucide-react";
  

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Icon accent */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-6"
        >
          <Flame className="text-cyan-400 w-8 h-8 mb-2 animate-pulse" />
          <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-lg font-semibold text-gray-300 leading-relaxed mb-10">
            I'm Dikla, an Information Systems student specializing in Cybersecurity,
            with hands-on experience in system administration and DevOps. CSPP-certified,
            with a strong military background as a C4I Officer, I'm skilled in managing
            critical systems and leading high-performing technical teams.
            <br /><br />
            Passionate about technology, cyber defense, and operational excellence - and when
            I'm not in front of a terminal, you’ll probably find me lifting weights at the gym
            or taking a gym selfie.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            <Skill icon={Terminal} label="Linux Servers" />
            <Skill icon={ShieldCheck} label="Firewalls & Security" />
            <Skill icon={Bug} label="Incident Response" />
            <Skill icon={Server} label="Windows Admin" />
            <Skill icon={Code} label="Python & Django" />
            <Skill icon={Brain} label="Logical Thinking" />
            <Skill icon={ClipboardCheck} label="Project Management" />
            <Skill icon={Users} label="Leadership" />
        </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skill({ icon: Icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center gap-3 px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg backdrop-blur-md shadow transition duration-300 font-semibold"
    >
      <Icon className="text-cyan-400 w-5 h-5" />
      <span className="text-sm text-gray-200">{label}</span>
    </motion.div>
  );
}
