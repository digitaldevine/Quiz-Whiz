import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  return (
    <section className="hero">
      {/* Floating glow */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Build <span>Beautiful</span> Experiences
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Modern, fast and animated React interfaces for web & mobile.
        </motion.p>

        <motion.button
          className="hero-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore →
        </motion.button>
      </motion.div>
    </section>
  );
}
