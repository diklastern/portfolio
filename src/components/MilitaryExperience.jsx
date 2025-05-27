import { motion } from "framer-motion";
import { Shield, Radio, Medal } from "lucide-react";

export default function MilitaryExperience() {
  const timeline = [
    {
      year: "11/2021 – 08/2023",
      title: "Chief Operating Officer",
      unit: "C4I Corps, IDF – J6 & Cyber Defense Directorate",
      icon: Shield,
      details: "Directed operational planning and task management under HQ supervision for critical communications and IT units. Oversaw secure implementation of classified systems and high-level operational communications."
    },
    {
      year: "11/2021 – 11/2022",
      title: "Battalion Communications Officer",
      unit: "C4I Corps, IDF",
      icon: Radio,
      details: "Advised the battalion commander on IT, systems reliability, and tactical networking. Managed over 300 communication endpoints, networking equipment, and operational infrastructure."
    },
    {
      year: "03/2018 – 11/2020",
      title: "Staff Commander & IT Instructor",
      unit: "J6 Officers Course, IDF",
      icon: Medal,
      details: "Led training for over 100 cadets in RF communication, system administration, secure network protocols, and field operations. Emphasized leadership, critical thinking, and high-pressure decision-making."
    }
  ];

  return (
    <section id="military" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400 mb-12 tracking-tight"
        >
          Military Experience
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 text-left shadow-lg hover:shadow-cyan-700/40 transition duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="text-cyan-400 w-6 h-6" />
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <span className="block text-sm text-cyan-300 font-semibold mb-1">{item.year}</span>
                <p className="text-gray-400 italic text-sm">{item.unit}</p>
                <p className="text-gray-300 mt-2 text-sm">{item.details}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
