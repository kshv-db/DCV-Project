import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { ShinyButton } from "../components/ReactBits";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading with gradient text effect */}
          <Motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Decentralized Credential Vault
          </Motion.h1>

          {/* Subtitle with fade-in delay */}
          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-400 mb-10"
          >
            Secure. Verifiable. Yours Forever.
          </Motion.p>

          {/* Call-to-Action button with ReactBits ShinyButton */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <ShinyButton onClick={() => navigate("/vault")}>
              Enter Dashboard
            </ShinyButton>
          </Motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
