import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ServerConfigForm = () => {
  const [formData, setFormData] = useState({
    physicalServers: "",
    cpuCores: "",
    ramGB: "",
    powerConsumption: "",
    energyRate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
            value={formData.physicalServers}
            onChange={(e) => setFormData({ ...formData, physicalServers: e.target.value })}
            placeholder="Enter number of servers"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cpuCores">CPU Cores per Server</Label>
          <Input
            id="cpuCores"
            type="number"
            value={formData.cpuCores}
            onChange={(e) => setFormData({ ...formData, cpuCores: e.target.value })}
            placeholder="Enter CPU cores"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ramGB">RAM (GB) per Server</Label>
          <Input
            id="ramGB"
            type="number"
            value={formData.ramGB}
            onChange={(e) => setFormData({ ...formData, ramGB: e.target.value })}
            placeholder="Enter RAM in GB"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="powerConsumption">Power Consumption (watts)</Label>
          <Input
            id="powerConsumption"
            type="number"
            value={formData.powerConsumption}
            onChange={(e) => setFormData({ ...formData, powerConsumption: e.target.value })}
            placeholder="Enter power consumption"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="energyRate">Energy Rate ($/kWh)</Label>
          <Input
            id="energyRate"
            type="number"
            step="0.01"
            value={formData.energyRate}
            onChange={(e) => setFormData({ ...formData, energyRate: e.target.value })}
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