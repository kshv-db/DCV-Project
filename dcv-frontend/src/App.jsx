import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import IssuerDashboard from "./pages/IssuerDashboard";
import VaultDashboard from "./pages/VaultDashboard";
import VerifierPage from "./pages/VerifierPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/issuer" element={<IssuerDashboard />} />
        <Route path="/vault" element={<VaultDashboard />} />
        <Route path="/verify" element={<VerifierPage />} />
      </Routes>
    </div>
  );
}

export default App;
