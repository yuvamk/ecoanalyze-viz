import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', physical: 4000, virtual: 2400 },
  { month: 'Feb', physical: 3000, virtual: 1398 },
  { month: 'Mar', physical: 2000, virtual: 9800 },
  { month: 'Apr', physical: 2780, virtual: 3908 },
  { month: 'May', physical: 1890, virtual: 4800 },
  { month: 'Jun', physical: 2390, virtual: 3800 },
];

export const CostComparison = () => {
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
            <Line type="monotone" dataKey="physical" stroke="#3B82F6" name="Physical Servers" />
            <Line type="monotone" dataKey="virtual" stroke="#10B981" name="Virtual Servers" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};