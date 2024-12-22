import { createContext, useContext, useState, ReactNode } from "react";
import { ServerConfig } from "@/utils/energyCalculations";

interface CalculationResults {
  monthlyPhysicalCost: number;
  monthlyVirtualizedCost: number;
  annualPhysicalCost: number;
  annualVirtualizedCost: number;
  annualSavings: number;
  savingsPercentage: number;
  energyConsumption: number;
}

interface EnergyCalculationContextType {
  results: CalculationResults | null;
  setResults: (results: CalculationResults) => void;
  serverConfig: ServerConfig | null;
  setServerConfig: (config: ServerConfig) => void;
}

const EnergyCalculationContext = createContext<EnergyCalculationContextType | undefined>(undefined);

export function EnergyCalculationProvider({ children }: { children: ReactNode }) {
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [serverConfig, setServerConfig] = useState<ServerConfig | null>(null);

  return (
    <EnergyCalculationContext.Provider value={{
      results,
      setResults,
      serverConfig,
      setServerConfig,
    }}>
      {children}
    </EnergyCalculationContext.Provider>
  );
}

export function useEnergyCalculation() {
  const context = useContext(EnergyCalculationContext);
  if (context === undefined) {
    throw new Error("useEnergyCalculation must be used within a EnergyCalculationProvider");
  }
  return context;
}