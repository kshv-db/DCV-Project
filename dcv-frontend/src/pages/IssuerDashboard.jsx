import PageTransition from "../components/PageTransition";
import { GlassCard } from "../components/ReactBits";

export default function IssuerDashboard() {
  return (
    <PageTransition>
      <div className="px-6 py-10 pt-24 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-8">Issuer Dashboard</h1>
        <GlassCard className="max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-white mb-2">Issue Credentials</h2>
          <p className="text-gray-400">Create and issue verifiable credentials to users.</p>
        </GlassCard>
      </div>
    </PageTransition>
  );
}
