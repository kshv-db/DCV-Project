import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl ${className}`}
    >
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      
      {children}
    </motion.div>
  );
}
