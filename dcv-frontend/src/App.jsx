import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import IssuerDashboard from "./pages/IssuerDashboard";
import VaultDashboard from "./pages/VaultDashboard";
import VerifierPage from "./pages/VerifierPage";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/issuer" element={<IssuerDashboard />} />
          <Route path="/vault" element={<VaultDashboard />} />
          <Route path="/verify" element={<VerifierPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
