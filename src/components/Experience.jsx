import { motion } from "framer-motion";
import { ServerCog, Code2, Server, Globe, GitBranch, Settings2, CloudCog, TerminalSquare } from "lucide-react";

export default function Experience() {
  const technologies = [
    { label: "Python", icon: TerminalSquare },
    { label: "Django", icon: Code2 },
    { label: "GitLab", icon: GitBranch },
    { label: "CI/CD", icon: Settings2 },
    { label: "Containers", icon: Settings2 },
    { label: "AWX", icon: CloudCog },
    { label: "Ansible", icon: CloudCog },
    { label: "Linux", icon: Server },
    { label: "Windows Server", icon: Server },
    { label: "Networking", icon: Globe },
    { label: "Shell Scripting", icon: Code2 },
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-gray-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400 mb-10"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800/60 p-6 rounded-lg shadow-lg border border-cyan-800/40 text-left"
        >
          <div className="flex items-center gap-3 mb-3">
            <ServerCog className="text-cyan-400 w-6 h-6" />
            <div>
              <h3 className="text-2xl font-bold">System Administrator</h3>
              <p className="text-gray-400 italic text-sm">Barak Capital (2023–Present)</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Managing and maintaining Linux and Windows servers, internal monitoring systems,
            CI/CD pipelines, firewalls, container environments, and database operations.
            Responsible for deploying secure and automated infrastructure solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-gray-700/50 border border-cyan-500/40 px-4 py-2 rounded-full text-sm text-white hover:scale-105 transition"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{tech.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}