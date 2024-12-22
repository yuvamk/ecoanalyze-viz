import { Card } from "@/components/ui/card";
import { Server, Cloud, Battery, TrendingDown } from "lucide-react";
import { useEnergyCalculation } from '@/contexts/EnergyCalculationContext';

export const KeyMetrics = () => {
  const { results, serverConfig } = useEnergyCalculation();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getMetrics = () => [
    {
      title: "Physical Servers",
      value: serverConfig?.physicalServers?.toString() || "0",
      change: "Active",
      icon: Server,
    },
    {
      title: "Energy Usage",
      value: results ? `${(results.energyConsumption).toFixed(1)} kWh` : "0 kWh",
      change: "Monthly",
      icon: Battery,
    },
    {
      title: "Monthly Cost",
      value: results ? formatCurrency(results.monthlyPhysicalCost) : "$0",
      change: "Current",
      icon: Cloud,
    },
    {
      title: "Annual Savings",
      value: results ? formatCurrency(results.annualSavings) : "$0",
      change: "Potential",
      icon: TrendingDown,
    },
  ];

  return (
    <>
      {getMetrics().map((metric) => (
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