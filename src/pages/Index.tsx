import { Card } from "@/components/ui/card";
import { ServerConfigForm } from "@/components/ServerConfigForm";
import { CostComparison } from "@/components/CostComparison";
import { ResourceUtilization } from "@/components/ResourceUtilization";
import { EnergySavings } from "@/components/EnergySavings";
import { KeyMetrics } from "@/components/KeyMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Energy Cost Analysis Dashboard</h1>
          <p className="text-slate-600 mt-2">Compare energy costs between physical and virtual servers</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <KeyMetrics />
          <Card className="col-span-full">
            <ServerConfigForm />
          </Card>
          <Card className="col-span-full md:col-span-2">
            <CostComparison />
          </Card>
          <Card className="col-span-full md:col-span-1">
            <EnergySavings />
          </Card>
          <Card className="col-span-full">
            <ResourceUtilization />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;