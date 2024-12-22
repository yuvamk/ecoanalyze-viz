import { Card } from "@/components/ui/card";
import { Server, Cloud, Battery, TrendingDown } from "lucide-react";

const metrics = [
  {
    title: "Physical Servers",
    value: "12",
    change: "+2",
    icon: Server,
  },
  {
    title: "Virtual Machines",
    value: "48",
    change: "+5",
    icon: Cloud,
  },
  {
    title: "Energy Usage",
    value: "1,234 kWh",
    change: "-12%",
    icon: Battery,
  },
  {
    title: "Cost Savings",
    value: "$3,456",
    change: "+15%",
    icon: TrendingDown,
  },
];

export const KeyMetrics = () => {
  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">{metric.title}</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{metric.value}</p>
              <p className="text-sm text-green-600 mt-1">
                {metric.change}
              </p>
            </div>
            <metric.icon className="h-5 w-5 text-blue-600" />
          </div>
        </Card>
      ))}
    </>
  );
};