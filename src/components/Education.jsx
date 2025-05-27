import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  Terminal,
  BookOpen,
  Code2,
  Brain,
} from "lucide-react";

export default function Education() {
  const timeline = [
    {
      year: "2023–2027",
      title: "B.Sc. Information Systems & Cybersecurity",
      institution: "Tel Aviv-Yafo Academic College",
      icon: GraduationCap,
      details: "GPA: 92 • Specialization: Cybersecurity"
    },
    {
      year: "2022",
      title: "CSPP + SOC Analyst Program",
      institution: "See Security College",
      icon: ShieldCheck,
      details: "Certified in security operations, threat detection, and cyber monitoring."
    },
    {
      year: "2018",
      title: "System & Network Administration",
      institution: "J6 & Cyber Defense Directorate (Military)",
      icon: Terminal,
      details: "Trained in enterprise Windows/Linux, networking, and monitoring tools."
    },
    {
      year: "2018",
      title: "Java Programming Course",
      institution: "The Open University",
      icon: Code2,
      details: "Core object-oriented programming and backend fundamentals."
    },
    {
      year: "2017",
      title: "High School - Major in Computer Science",
      institution: "Shazar High School",
      icon: BookOpen,
      details: "Graduated with high honors."
    }
  ];

  return (
    <section id="education" className="relative min-h-screen bg-gray-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400 mb-12"
        >
          Education & Certifications
        </motion.h2>

        <div className="border-l-2 border-cyan-600/30 pl-6 space-y-12 relative mx-auto text-left inline-block">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[39px] top-1 bg-cyan-600 rounded-full p-2">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-900/60 p-5 rounded-lg shadow-lg border border-cyan-800/40">
                  <span className="text-sm text-cyan-300 font-semibold">{item.year}</span>
                  <h3 className="text-xl font-bold mt-1 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm italic">{item.institution}</p>
                  <p className="text-gray-300 mt-2 text-sm">{item.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
