import { createContext, useContext } from "react";

const StandaloneContext = createContext<boolean | null>(null);

export const StandaloneProvider = ({ children, value }: { children: React.ReactNode, value: boolean }) => (
  <StandaloneContext.Provider value={value}>
    {children}
  </StandaloneContext.Provider>
);

export const useStandalone = () => {
  const context = useContext(StandaloneContext);

  if (context === null)
    throw new Error("useStandalone must be used within a StandaloneProvider");

  return context;
};