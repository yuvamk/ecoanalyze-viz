import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEnergyCalculation } from '@/contexts/EnergyCalculationContext';

export const ResourceUtilization = () => {
  const { serverConfig } = useEnergyCalculation();

  const generateUtilizationData = () => {
    if (!serverConfig) {
      return [];
    }

    // Calculate utilization percentages based on typical virtualization scenarios
    const servers = Array.from({ length: serverConfig.physicalServers }, (_, i) => ({
      name: `Server ${i + 1}`,
      cpu: Math.min(85 + Math.random() * 10, 100), // Random CPU utilization between 85-95%
      memory: Math.min(75 + Math.random() * 15, 100), // Random memory utilization between 75-90%
      storage: Math.min(65 + Math.random() * 20, 100), // Random storage utilization between 65-85%
    }));

    return servers;
  };

  const data = generateUtilizationData();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Resource Utilization</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cpu" fill="#3B82F6" name="CPU %" />
            <Bar dataKey="memory" fill="#10B981" name="Memory %" />
            <Bar dataKey="storage" fill="#6366F1" name="Storage %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};