import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEnergyCalculation } from '@/contexts/EnergyCalculationContext';

export const CostComparison = () => {
  const { results } = useEnergyCalculation();

  // Generate monthly data based on calculation results
  const generateMonthlyData = () => {
    if (!results) return [];
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map(month => ({
      month,
      physical: results.monthlyPhysicalCost,
      virtual: results.monthlyVirtualizedCost,
    }));
  };

  const data = generateMonthlyData();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Cost Comparison</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="physical" 
              stroke="#3B82F6" 
              name="Physical Servers" 
            />
            <Line 
              type="monotone" 
              dataKey="virtual" 
              stroke="#10B981" 
              name="Virtual Servers" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};