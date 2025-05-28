import { motion } from "framer-motion";
import csppImg from "../assets/CSPP.jpg";
import socImg from "../assets/SOC.jpg";
import honorsImg from "../assets/honors.jpg";

const certifications = [
  {
    title: "CSPP – Cyber Security Preparation Program",
    image: csppImg,
    alt: "CSPP Certification",
    description: "Comprehensive hands-on training in threat detection, SOC operations, and cyber defense."
  },
  {
    title: "SOC Analyst Program",
    image: socImg,
    alt: "SOC Certification",
    description: "Practical experience in SIEM systems, detection engineering, and real-world incident response."
  },
  {
    title: "Honors of Excellence (IDF)",
    image: honorsImg,
    alt: "IDF Honors",
    description: "Awarded for outstanding leadership and technical excellence during military service."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gray-950 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400 mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-cyan-700/30"
            >
              <img src={cert.image} alt={cert.alt} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-cyan-300 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
