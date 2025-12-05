import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/issuer", label: "Issuer" },
    { to: "/vault", label: "Vault" },
    { to: "/verify", label: "Verify" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-xl bg-white/10 border-b border-white/10 flex justify-between items-center z-50"
    >
      {/* Logo / Title */}
      <NavLink to="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          DCV
        </h1>
      </NavLink>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `relative text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 ${
                isActive ? "text-white" : "text-gray-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
}
