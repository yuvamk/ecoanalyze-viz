import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useEnergyCalculation } from '@/contexts/EnergyCalculationContext';

export const EnergySavings = () => {
  const { results } = useEnergyCalculation();

  const calculateData = () => {
    if (!results) {
      return [
        { name: 'Current Cost', value: 100 },
        { name: 'Potential Savings', value: 0 },
      ];
    }

    const totalCost = results.annualPhysicalCost;
    const savings = results.annualSavings;
    const currentCost = totalCost - savings;

    return [
      { name: 'Current Cost', value: currentCost },
      { name: 'Potential Savings', value: savings },
    ];
  };

  const data = calculateData();
  const COLORS = ['#3B82F6', '#10B981'];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Energy Savings Potential</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center">
        <p className="text-2xl font-bold text-green-600">
          {results ? `${results.savingsPercentage.toFixed(1)}% Potential Savings` : '0% Potential Savings'}
        </p>
        <p className="text-sm text-slate-600 mt-1">Through virtualization optimization</p>
      </div>
    </div>
  );
};