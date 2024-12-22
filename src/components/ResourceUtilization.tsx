import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Server 1', cpu: 90, memory: 65, storage: 45 },
  { name: 'Server 2', cpu: 75, memory: 85, storage: 55 },
  { name: 'Server 3', cpu: 85, memory: 70, storage: 65 },
  { name: 'Server 4', cpu: 65, memory: 90, storage: 75 },
];

export const ResourceUtilization = () => {
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