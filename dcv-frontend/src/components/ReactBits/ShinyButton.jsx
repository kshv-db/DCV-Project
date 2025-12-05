import { motion } from "framer-motion";

export default function ShinyButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg group ${className}`}
    >
      {/* Shine effect */}
      <span className="absolute inset-0 w-full h-full">
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700 ease-out" />
      </span>
      
      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-600/50 to-pink-600/50 blur-xl" />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
