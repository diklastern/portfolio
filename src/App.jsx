import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import MilitaryExperience from './components/MilitaryExperience';
import Contact from './components/Contact';
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import WhatDrivesMe from './components/WhatDrivesMe';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Ensure Loader renders correctly and nothing else during loading
  if (isLoading) {
    return <Loader onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative scroll-smooth font-sans bg-gray-950 text-white">
      <ScrollProgress />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-gradient-to-br from-gray-950 to-gray-900"
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-950"
      >
        <About />
        <WhatDrivesMe />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900"
      >
        <Education />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-950"
      >
        <Experience />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900"
      >
        <MilitaryExperience />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900"
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
