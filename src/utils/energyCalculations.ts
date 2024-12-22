export interface ServerConfig {
  physicalServers: number;
  cpuCores: number;
  ramGB: number;
  powerConsumption: number;
  energyRate: number;
}

export const calculateEnergyCosts = (config: ServerConfig) => {
  const hoursPerMonth = 730; // Average hours in a month
  
  // Calculate monthly energy consumption in kWh
  const monthlyEnergyConsumption = (config.powerConsumption * hoursPerMonth * config.physicalServers) / 1000;
  
  // Calculate monthly cost
  const monthlyCost = monthlyEnergyConsumption * config.energyRate;
  
  // Estimate virtualized cost (assuming 30% energy savings)
  const virtualizedCost = monthlyCost * 0.7;
  
  // Calculate annual costs
  const annualPhysicalCost = monthlyCost * 12;
  const annualVirtualizedCost = virtualizedCost * 12;
  
  // Calculate potential savings
  const annualSavings = annualPhysicalCost - annualVirtualizedCost;
  const savingsPercentage = (annualSavings / annualPhysicalCost) * 100;
  
  return {
    monthlyPhysicalCost: monthlyCost,
    monthlyVirtualizedCost: virtualizedCost,
    annualPhysicalCost,
    annualVirtualizedCost,
    annualSavings,
    savingsPercentage,
    energyConsumption: monthlyEnergyConsumption
  };
};