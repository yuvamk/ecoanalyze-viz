import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateEnergyCosts, type ServerConfig } from "@/utils/energyCalculations";
import { useToast } from "@/components/ui/use-toast";
import { useEnergyCalculation } from "@/contexts/EnergyCalculationContext";

export const ServerConfigForm = () => {
  const { toast } = useToast();
  const { setResults, setServerConfig } = useEnergyCalculation();
  const [formData, setFormData] = useState<ServerConfig>({
    physicalServers: 0,
    cpuCores: 0,
    ramGB: 0,
    powerConsumption: 0,
    energyRate: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (Object.values(formData).some(value => !value || value <= 0)) {
      toast({
        title: "Validation Error",
        description: "All fields must be filled with values greater than 0",
        variant: "destructive"
      });
      return;
    }

    const results = calculateEnergyCosts(formData);
    
    // Update the context with new results and server config
    setResults(results);
    setServerConfig(formData);
    
    toast({
      title: "Calculations Complete",
      description: `Potential Annual Savings: $${results.annualSavings.toFixed(2)}`,
    });

    console.log("Calculation results:", results);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Server Configuration</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="physicalServers">Number of Physical Servers</Label>
          <Input
            id="physicalServers"
            type="number"
            value={formData.physicalServers || ""}
            onChange={(e) => setFormData({ ...formData, physicalServers: Number(e.target.value) })}
            placeholder="Enter number of servers"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cpuCores">CPU Cores per Server</Label>
          <Input
            id="cpuCores"
            type="number"
            value={formData.cpuCores || ""}
            onChange={(e) => setFormData({ ...formData, cpuCores: Number(e.target.value) })}
            placeholder="Enter CPU cores"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ramGB">RAM (GB) per Server</Label>
          <Input
            id="ramGB"
            type="number"
            value={formData.ramGB || ""}
            onChange={(e) => setFormData({ ...formData, ramGB: Number(e.target.value) })}
            placeholder="Enter RAM in GB"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="powerConsumption">Power Consumption (watts)</Label>
          <Input
            id="powerConsumption"
            type="number"
            value={formData.powerConsumption || ""}
            onChange={(e) => setFormData({ ...formData, powerConsumption: Number(e.target.value) })}
            placeholder="Enter power consumption"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="energyRate">Energy Rate ($/kWh)</Label>
          <Input
            id="energyRate"
            type="number"
            step="0.01"
            value={formData.energyRate || ""}
            onChange={(e) => setFormData({ ...formData, energyRate: Number(e.target.value) })}
            placeholder="Enter energy rate"
          />
        </div>
        <div className="flex items-end">
          <Button type="submit" className="w-full">Calculate</Button>
        </div>
      </form>
    </div>
  );
};