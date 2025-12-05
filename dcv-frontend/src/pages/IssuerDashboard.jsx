import PageTransition from "../components/PageTransition";
import { GlassCard } from "../components/ReactBits";

export default function IssuerDashboard() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] pt-16 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Issuer Dashboard</h1>
        <GlassCard className="max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-white mb-2">Issue Credentials</h2>
          <p className="text-gray-400">Create and issue verifiable credentials to users.</p>
        </GlassCard>
      </div>
    </PageTransition>
  );
}
