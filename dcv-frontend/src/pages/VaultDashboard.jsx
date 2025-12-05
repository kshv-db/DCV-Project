import PageTransition from "../components/PageTransition";
import { GlassCard } from "../components/ReactBits";

export default function VaultDashboard() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] pt-16 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Vault Dashboard</h1>
        <GlassCard className="max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-white mb-2">Your Credentials</h2>
          <p className="text-gray-400">Securely store and manage your verifiable credentials.</p>
        </GlassCard>
      </div>
    </PageTransition>
  );
}
