import { motion } from "framer-motion";

export default function WhatDrivesMe() {
  return (
    <section id="whatdrivesme" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 justify-center mb-4"
        >
          <h2 className="text-3xl font-bold text-cyan-400">What Drives Me</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          I’m driven by the desire to solve meaningful problems — ones that impact systems, people, and organizations.  
          I believe in staying sharp, taking ownership, and defending infrastructure with logic, integrity, and curiosity.
        </motion.p>
      </div>
    </section>
  );
}
