import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Current Cost', value: 70 },
  { name: 'Potential Savings', value: 30 },
];

const COLORS = ['#3B82F6', '#10B981'];

export const EnergySavings = () => {
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
        <p className="text-2xl font-bold text-green-600">30% Potential Savings</p>
        <p className="text-sm text-slate-600 mt-1">Through virtualization optimization</p>
      </div>
    </div>
  );
};